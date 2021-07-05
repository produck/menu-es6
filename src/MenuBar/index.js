import * as Dom from 'dom';
import { popup, closeAllMenu } from '@/Menu/index';

import * as _B from '@/symbol/bar';
import * as _N from '@/symbol/button';

import { MENU_BAR_STYLE, MENU_BUTTON_OUTER_STYLE } from './style';
import { normalize } from './normalize';
import { FRAGEMENT, MNEMONIC, MNEMONIC_REG, resolveLabelText } from '@/utils';

class MenuBarButton {
	constructor(menuBar, options) {
		this[_N.MENU_BAR] = menuBar;
		this[_N.MENU_OPTIONS] = options.menu;
		this[_N.MNEMONIC] = null;
		this[_N.TITLE] = options.title;

		const outerElement = this[_N.OUTER_ELEMENT] = Dom.createElement('div');
		const innerElement = this[_N.INNER_ELEMENT] = Dom.createElement('div');

		Dom.addClass(outerElement, 'menu-bar-button');
		Dom.addClass(innerElement, 'menu-bar-button-title');
		Dom.appendChild(outerElement, innerElement);
		Dom.setStyle(outerElement, MENU_BUTTON_OUTER_STYLE);

		const focusThis = () => this[_N.MENU_BAR][_B.FOCUSING_BUTTON] = this;

		Dom.addEventListener(outerElement, 'mouseenter', focusThis);

		this[_N.SET_LABEL]();
	}

	[_N.SET_LABEL]() {
		const result = resolveLabelText(this[_N.TITLE], !this[_N.MENU_BAR][_B.HAS_MNEMONIC]);

		Dom.removeAllChild(this[_N.INNER_ELEMENT]);
		Dom.appendChild(this[_N.INNER_ELEMENT], result[FRAGEMENT]);
		this[_N.MNEMONIC] = result[MNEMONIC];
	}

	[_N.FOCUS]() {
		Dom.addClass(this[_N.OUTER_ELEMENT], 'focused');
	}

	[_N.BLUR]() {
		Dom.removeClass(this[_N.OUTER_ELEMENT], 'focused');
	}

	[_N.OPEN_MENU]() {
		const { left, bottom } = Dom.getRect(this[_N.OUTER_ELEMENT]);

		currentMenu = popup(this[_N.MENU_OPTIONS], {
			position: { x: left, y: bottom },
			mnemonic: this[_N.MENU_BAR][_B.HAS_MNEMONIC]
		});
	}
}

let containerElement = null;
/**
 * @type {MenuBar}
 */
let currentMenuBar = null;
/**
 * @type {import('../Menu'.MenuController)}
 */
let currentMenu = null;

class MenuBar {
	constructor() {
		const container = Dom.createElement('div');

		Dom.addClass(container, 'menu-bar');
		Dom.setStyle(container, MENU_BAR_STYLE);

		this[_B.BAR_ELEMENT] = container;
		this[_B.BUTTON_LIST] = [];

		Dom.addEventListener(container, 'click', () => this[_B.ACTIVE] = !this[_B.ACTIVE]);
		Dom.addEventListener(container, 'mousedown', Dom.STOP_PROPAGATION);
		Dom.addEventListener(container, 'contextmenu', Dom.STOP_AND_PREVENT);
		Dom.addEventListener(container, 'mouseleave', () => {
			if (!this[_B.ACTIVE]) {
				this[_B.FOCUSING_BUTTON] = null;
			}
		});

		this[_B._HAS_MNEMONIC] = false;
		this[_B._ACTIVE] = false;
		this[_B._FOCUSING_BUTTON] = null;
	}

	get [_B.HAS_MNEMONIC]() {
		return this[_B._HAS_MNEMONIC];
	}

	set [_B.HAS_MNEMONIC](value) {
		this[_B._HAS_MNEMONIC] = value;
		this[_B.BUTTON_LIST].forEach(button => button[_N.SET_LABEL]());
		(value ? Dom.addClass : Dom.removeClass)(this[_B.BAR_ELEMENT], 'has-mnemonic');
	}

	get [_B.ACTIVE]() {
		return this[_B._ACTIVE];
	}

	set [_B.ACTIVE](value) {
		if (value !== this[_B._ACTIVE]) {
			const barElement = this[_B.BAR_ELEMENT];

			this[_B._ACTIVE] = value;

			if (value) {
				Dom.addClass(barElement, 'active');
				selecting = true;

				if (this[_B._FOCUSING_BUTTON]) {
					this[_B._FOCUSING_BUTTON][_N.OPEN_MENU]();
				}
			} else {
				Dom.removeClass(barElement, 'active');
				closeAllMenu();
				currentMenu = null;
			}
		}
	}

	get [_B.FOCUSING_BUTTON]() {
		return this[_B._FOCUSING_BUTTON];
	}

	set [_B.FOCUSING_BUTTON](value) {
		const currentButton = this[_B.FOCUSING_BUTTON];

		if (value !== currentButton) {
			if (currentButton !== null) {
				currentButton[_N.BLUR]();
			}

			if (value !== null) {
				value[_N.FOCUS]();

				if (this[_B.ACTIVE]) {
					value[_N.OPEN_MENU]();
				}
			}
		}

		this[_B._FOCUSING_BUTTON] = value;
	}

	[_B.APPEND_BUTTON](button) {
		this[_B.BUTTON_LIST].push(button);
	}

	/**
	 * Try to find a `next` item then focusing.
	 *
	 * @param {string|null} mnemonic Filtering item by a-z
	 * @param {boolean} reversed Searching direction
	 * @returns The target item found or not.
	 */
	[_B.NEXT](mnemonic = null, reversed = false) {
		const sequence = this[_B.BUTTON_LIST].slice(0);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(button => button === this[_B.FOCUSING_BUTTON]);
		const length = sequence.length;

		for (let index = 0; index < length; index++) {
			const current = sequence[(focusingIndex + index + 1) % length];

			if (mnemonic === null || current[_N.MNEMONIC] === mnemonic) {
				this[_B.FOCUSING_BUTTON] = current;

				return true;
			}
		}

		return false;
	}
}

export const mount = (element) => {
	containerElement = element;

	if (currentMenuBar) {
		Dom.removeAllChild(element);
		Dom.appendChild(element, currentMenuBar[_B.BAR_ELEMENT]);
	}
};

const tryDeactiveAndClear = () => {
	if (isReady) {
		currentMenuBar[_B.ACTIVE] = false;
		currentMenuBar[_B.FOCUSING_BUTTON] = null;
		currentMenuBar[_B.HAS_MNEMONIC] = false;
	}
};

Dom.addEventListener(Dom.WINDOW, 'mousedown', tryDeactiveAndClear);
Dom.addEventListener(Dom.WINDOW, '-click-end', tryDeactiveAndClear);
Dom.addEventListener(Dom.WINDOW, 'blur', tryDeactiveAndClear);

export const setMenuBar = (options, hasMnemonic = false) => {
	const finalOptions = normalize(options);
	const menuBar = currentMenuBar = new MenuBar(hasMnemonic);
	const fragement = Dom.createFragement();

	finalOptions.forEach(buttonOptions => {
		const button = new MenuBarButton(menuBar, buttonOptions);

		menuBar[_B.APPEND_BUTTON](button);
		Dom.appendChild(fragement, button[_N.OUTER_ELEMENT]);
	});

	Dom.appendChild(menuBar[_B.BAR_ELEMENT], fragement);

	if (containerElement !== null) {
		Dom.removeAllChild(containerElement);
		Dom.appendChild(containerElement, menuBar[_B.BAR_ELEMENT]);
	}
};

const isReady = () => currentMenuBar !== null && containerElement !== null;

let selecting = false;
let expandable = null;
let expanding = null;

const KEY_MAP_OPERATION = {
	Alt: () => {
		const buttonList = currentMenuBar[_B.BUTTON_LIST];

		if (buttonList.length > 0) {
			if (currentMenuBar[_B.FOCUSING_BUTTON] === null) {
				selecting = true;
				currentMenuBar[_B.HAS_MNEMONIC] = true;
				currentMenuBar[_B.FOCUSING_BUTTON] = buttonList[0];
			} else {
				selecting = false;
				currentMenuBar[_B.HAS_MNEMONIC] = false;
				currentMenuBar[_B.ACTIVE] = false;
				currentMenuBar[_B.FOCUSING_BUTTON] = null;
				currentMenu = null;
			}
		}
	},
	Enter: () => {
		if (!currentMenuBar[_B.ACTIVE]) {
			currentMenuBar[_B.ACTIVE] = true;

			if (currentMenu) {
				currentMenu.next();
			}
		}
	},
	ArrowDown: () => {
		if (!currentMenuBar[_B.ACTIVE]) {
			currentMenuBar[_B.ACTIVE] = true;
			currentMenu.next();
		}
	},
	ArrowLeft: () => {
		if (selecting) {
			if (currentMenu === null || expanding === false) {
				currentMenuBar[_B.NEXT](null, true);

				if (currentMenuBar[_B.ACTIVE]) {
					currentMenu.next();
				}
			}
		}
	},
	ArrowRight: () => {
		if (selecting) {
			if (currentMenu === null || expandable === false) {
				currentMenuBar[_B.NEXT]();

				if (currentMenuBar[_B.ACTIVE]) {
					currentMenu.next();
				}
			}
		}
	},
	Escape: () => {
		if (currentMenu && currentMenu.closed) {
			if (currentMenuBar[_B.ACTIVE]) {
				currentMenuBar[_B.ACTIVE] = false;
			} else if (currentMenuBar[_B.FOCUSING_BUTTON]) {
				currentMenuBar[_B.FOCUSING_BUTTON] = null;
				selecting = false;
			}

			currentMenu = null;
		}
	}
};

(function observe() {
	if (currentMenu) {
		expanding = currentMenu.expanding;
		expandable = currentMenu.expandable;
	} else {
		expandable = expanding = null;
	}

	Dom.REQUEST_ANIMATION_FRAME(observe);
}());

Dom.addEventListener(Dom.WINDOW, 'keydown', event => {
	if (isReady()) {
		const key = event.key;

		if (key in KEY_MAP_OPERATION) {
			Dom.PREVENT_DEFAULT(event);
			KEY_MAP_OPERATION[key]();
		} else if (MNEMONIC_REG.test(key)) {
			if (!currentMenuBar[_B.ACTIVE]) {
				currentMenuBar[_B.ACTIVE] = true;
			}

			if (currentMenuBar[_B.NEXT](key.toLowerCase())) {
				currentMenu.next();
			}
		}
	}
});
