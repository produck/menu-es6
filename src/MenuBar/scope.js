import * as Dom from '../dom';
import * as lang from '../lang';

import { MNEMONIC_REG } from '../utils';
import { current } from '../Menu/index';

import * as _BAR from '../symbol/bar';
import * as _ from '../symbol/menubar-scope';
import { closeAllMenu } from '../Menu/index';

export const state = {
	[_.CONTAINER]: null,
	[_.MENU_BAR]: null,
	[_.SELECTING]: false
};

const isReady =
	() => !lang.isNull(state[_.CONTAINER]) && !lang.isNull(state[_.MENU_BAR]);

let holding = false;

Dom.addEventListener(Dom.WINDOW, 'keyup', event => {
	if (event.key === 'Alt') {
		holding = false;
	}
});

const KEY_MAP_OPERATION = {
	Alt: () => {
		if (!holding) {
			holding = true;

			const buttonList = state[_.MENU_BAR][_BAR.BUTTON_LIST];

			if (buttonList.length > 0) {
				if (lang.isNull(state[_.MENU_BAR][_BAR.FOCUSING_BUTTON])) {
					closeAllMenu();
					state[_.SELECTING] = state[_.MENU_BAR][_BAR.HAS_MNEMONIC] = true;
					state[_.MENU_BAR][_BAR.FOCUSING_BUTTON] = buttonList[0];
				} else {
					resetMenuBar();
				}
			}
		}
	},
	Enter: () => {
		if (!state[_.MENU_BAR][_BAR.ACTIVE]) {
			state[_.MENU_BAR][_BAR.ACTIVE] = true;
			current.next();
		}
	},
	ArrowDown: () => {
		if (!state[_.MENU_BAR][_BAR.ACTIVE]) {
			state[_.MENU_BAR][_BAR.ACTIVE] = true;
			current.next();
		}
	},
	ArrowLeft: () => {
		if (state[_.SELECTING]) {
			if (current.closed || current.expanding === false) {
				state[_.MENU_BAR][_BAR.NEXT](null, true);

				if (state[_.MENU_BAR][_BAR.ACTIVE]) {
					current.next();
				}
			}
		}
	},
	ArrowRight: () => {
		if (state[_.SELECTING]) {
			if (current.closed || current.expandable === false) {
				state[_.MENU_BAR][_BAR.NEXT]();

				if (state[_.MENU_BAR][_BAR.ACTIVE]) {
					current.next();
				}
			}
		}
	},
	Escape: () => {
		if (current.closed) {
			if (state[_.MENU_BAR][_BAR.ACTIVE]) {
				state[_.MENU_BAR][_BAR.ACTIVE] = false;
			} else if (state[_.MENU_BAR][_BAR.FOCUSING_BUTTON]) {
				resetMenuBar();
			}
		}
	}
};

const resetMenuBar = () => {
	if (isReady()) {
		state[_.MENU_BAR][_BAR.FOCUSING_BUTTON] = null;

		holding =
			state[_.MENU_BAR][_BAR.ACTIVE] =
			state[_.MENU_BAR][_BAR.HAS_MNEMONIC] =
			state[_.SELECTING] =
			false;
	}
};

Dom.addEventListener(Dom.WINDOW, 'mousedown', resetMenuBar);
Dom.addEventListener(Dom.WINDOW, 'mouseup', resetMenuBar);
Dom.addEventListener(Dom.WINDOW, 'blur', resetMenuBar);

Dom.addEventListener(Dom.WINDOW, 'keydown', event => {
	if (isReady()) {
		const key = event.key;

		if (key in KEY_MAP_OPERATION) {
			KEY_MAP_OPERATION[key]();
		} else if (MNEMONIC_REG.test(key)) {
			if (current.closed) {
				if (!state[_.MENU_BAR][_BAR.ACTIVE]) {
					state[_.MENU_BAR][_BAR.ACTIVE] = true;
				}

				if (state[_.MENU_BAR][_BAR.NEXT](lang.toLowerCase(key))) {
					current.next();
				}
			}
		}
	}
});

export const install = () => {
	if (state[_.MENU_BAR] && state[_.CONTAINER]) {
		Dom.removeAllChild(state[_.CONTAINER]);
		Dom.appendChild(state[_.CONTAINER], state[_.MENU_BAR][_BAR.BAR_ELEMENT]);
	}
};
