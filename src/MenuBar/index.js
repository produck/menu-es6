import * as Dom from 'dom';
import { popup, closeAllMenu } from '@/Menu/index';

import * as _B from '@/symbol/bar';
import * as _N from '@/symbol/button';

import { MENU_BAR_STYLE, MENU_BUTTON_OUTER_STYLE } from './style';
import { normalize } from './normalize';

class MenuBarButton {
	constructor(menuBar, options) {
		this[_N.MENU_BAR] = menuBar;
		this[_N.MENU_OPTIONS] = options.menu;

		const outerElement = this[_N.OUTER_ELEMENT] = Dom.createElement('div');
		const innerElement = this[_N.INNER_ELEMENT] = Dom.createElement('div');

		Dom.addClass(outerElement, 'menu-bar-button');
		Dom.addClass(innerElement, 'menu-bar-button-title');
		Dom.appendChild(outerElement, innerElement);
		Dom.setStyle(outerElement, MENU_BUTTON_OUTER_STYLE);

		innerElement.innerText = options.title;

		const focusThis = () => this[_N.MENU_BAR][_B.FOCUS_BUTTON](this);

		Dom.addEventListener(innerElement, 'mouseenter', focusThis);
	}

	[_N.FOCUS]() {
		Dom.addClass(this[_N.OUTER_ELEMENT], 'focused');
	}

	[_N.BLUR]() {
		Dom.removeClass(this[_N.OUTER_ELEMENT], 'focused');
	}

	[_N.OPEN_MENU]() {
		const rect = Dom.getRect(this[_N.OUTER_ELEMENT]);

		popup(this[_N.MENU_OPTIONS], {
			position: { x: rect.left, y: rect.bottom },
		});
	}
}

let containerElement = null;
/**
 * @type {MenuBar}
 */
let currentMenuBar = null;

class MenuBar {
	constructor(hasMnemonic) {
		const container = Dom.createElement('div');

		Dom.addClass(container, 'menu-bar');
		Dom.setStyle(container, MENU_BAR_STYLE);

		this[_B.ACTIVE] = false;
		this[_B.BAR_ELEMENT] = container;
		this[_B.BUTTON_LIST] = [];
		this[_B.HAS_MNEMONIC] = hasMnemonic;
		this[_B.FOCUSING_BUTTON] = null;

		const toggleActive = () => {
			const oldFocusingButton = this[_B.FOCUSING_BUTTON];

			this[_B.BLUR_FOCUSING_BUTTON]();
			this[_B.ACTIVE] = !this[_B.ACTIVE];
			this[_B.FOCUS_BUTTON](oldFocusingButton);
		};

		Dom.addEventListener(container, 'click', toggleActive);
		Dom.addEventListener(container, 'mousedown', Dom.STOP_PROPAGATION);
		Dom.addEventListener(container, 'contextmenu', Dom.STOP_AND_PREVENT);
		Dom.addEventListener(container, 'mouseleave', () => {
			if (!this[_B.ACTIVE]) {
				this[_B.BLUR_FOCUSING_BUTTON]();
			}
		});
	}

	[_B.BLUR_FOCUSING_BUTTON]() {
		this[_B.FOCUSING_BUTTON] && this[_B.FOCUSING_BUTTON][_N.BLUR]();
		this[_B.FOCUSING_BUTTON] = null;
	}

	[_B.DEACTIVE]() {
		this[_B.ACTIVE] = false;
		this[_B.BLUR_FOCUSING_BUTTON]();
	}

	[_B.FOCUS_BUTTON](button = this[_B.FOCUSING_BUTTON]) {
		const oldFocusingButton = this[_B.FOCUSING_BUTTON];

		this[_B.BLUR_FOCUSING_BUTTON]();

		if (button) {
			button[_N.FOCUS]();

			if (button !== oldFocusingButton) {
				closeAllMenu();
				this[_B.ACTIVE] && button[_N.OPEN_MENU]();
			}
		}

		this[_B.FOCUSING_BUTTON] = button;
	}

	[_B.APPEND_BUTTON](button) {
		this[_B.BUTTON_LIST].push(button);
	}
}

export const mount = (element) => {
	containerElement = element;

	if (currentMenuBar) {
		Dom.removeAllChild(element);
		Dom.appendChild(element, currentMenuBar[_B.BAR_ELEMENT]);
	}
};

const tryDeactive = () => currentMenuBar && currentMenuBar[_B.DEACTIVE]();

Dom.addEventListener(Dom.WINDOW, 'mousedown', tryDeactive);
Dom.addEventListener(Dom.WINDOW, '-click-end', tryDeactive);
Dom.addEventListener(Dom.WINDOW, 'blur', tryDeactive);

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
