import * as Dom from 'dom';
import * as lang from 'lang';

import { MNEMONIC_REG } from '@/utils';

import * as _BAR from '@/symbol/bar';
import * as _ from '@/symbol/menubar-scope';
import { closeAllMenu } from '@/Menu/index';

export const state = {
	[_.CONTAINER]: null,
	[_.MENU_BAR]: null,
	[_.MENU]: null,
	[_.SELECTING]: false
};

const isReady =
	() => !lang.isNull(state[_.CONTAINER]) && !lang.isNull(state[_.MENU_BAR]);

const KEY_MAP_OPERATION = {
	Alt: () => {
		const buttonList = state[_.MENU_BAR][_BAR.BUTTON_LIST];

		if (buttonList.length > 0) {
			if (lang.isNull(state[_.MENU_BAR][_BAR.FOCUSING_BUTTON])) {
				closeAllMenu();
				state[_.SELECTING] = true;
				state[_.MENU_BAR][_BAR.HAS_MNEMONIC] = true;
				state[_.MENU_BAR][_BAR.FOCUSING_BUTTON] = buttonList[0];
			} else {
				state[_.SELECTING] = false;
				state[_.MENU_BAR][_BAR.HAS_MNEMONIC] = false;
				state[_.MENU_BAR][_BAR.ACTIVE] = false;
				state[_.MENU_BAR][_BAR.FOCUSING_BUTTON] = null;
				state[_.MENU] = null;
			}
		}
	},
	Enter: () => {
		if (!state[_.MENU_BAR][_BAR.ACTIVE]) {
			state[_.MENU_BAR][_BAR.ACTIVE] = true;

			if (state[_.MENU]) {
				state[_.MENU].next();
			}
		}
	},
	ArrowDown: () => {
		if (!state[_.MENU_BAR][_BAR.ACTIVE]) {
			state[_.MENU_BAR][_BAR.ACTIVE] = true;
			state[_.MENU].next();
		}
	},
	ArrowLeft: () => {
		if (state[_.SELECTING]) {
			if (lang.isNull(state[_.MENU]) || expanding === false) {
				state[_.MENU_BAR][_BAR.NEXT](null, true);

				if (state[_.MENU_BAR][_BAR.ACTIVE]) {
					state[_.MENU].next();
				}
			}
		}
	},
	ArrowRight: () => {
		if (state[_.SELECTING]) {
			if (lang.isNull(state[_.MENU]) || expandable === false) {
				state[_.MENU_BAR][_BAR.NEXT]();

				if (state[_.MENU_BAR][_BAR.ACTIVE]) {
					state[_.MENU].next();
				}
			}
		}
	},
	Escape: () => {
		if (state[_.MENU] && state[_.MENU].closed) {
			if (state[_.MENU_BAR][_BAR.ACTIVE]) {
				state[_.MENU_BAR][_BAR.ACTIVE] = false;
			} else if (state[_.MENU_BAR][_BAR.FOCUSING_BUTTON]) {
				state[_.MENU_BAR][_BAR.FOCUSING_BUTTON] = null;
				state[_.SELECTING] = false;
			}

			state[_.MENU] = null;
		}
	}
};

let expandable = null;
let expanding = null;

(function observe() {
	if (state[_.MENU]) {
		expanding = state[_.MENU].expanding;
		expandable = state[_.MENU].expandable;
	} else {
		expandable = expanding = null;
	}

	Dom.REQUEST_ANIMATION_FRAME(observe);
}());

const tryDeactiveAndClear = () => {
	if (isReady()) {
		state[_.MENU_BAR][_BAR.ACTIVE] = false;
		state[_.MENU_BAR][_BAR.FOCUSING_BUTTON] = null;
		state[_.MENU_BAR][_BAR.HAS_MNEMONIC] = false;
		state[_.SELECTING] = false;
	}
};

Dom.addEventListener(Dom.WINDOW, 'mousedown', tryDeactiveAndClear);
Dom.addEventListener(Dom.WINDOW, '-click-end', tryDeactiveAndClear);
Dom.addEventListener(Dom.WINDOW, 'blur', tryDeactiveAndClear);

Dom.addEventListener(Dom.WINDOW, 'keydown', event => {
	if (isReady()) {
		const key = event.key;

		if (key in KEY_MAP_OPERATION) {
			Dom.PREVENT_DEFAULT(event);
			KEY_MAP_OPERATION[key]();
		} else if (MNEMONIC_REG.test(key)) {
			if (!state[_.MENU_BAR][_BAR.ACTIVE]) {
				state[_.MENU_BAR][_BAR.ACTIVE] = true;
			}

			if (state[_.MENU_BAR][_BAR.NEXT](key.toLowerCase())) {
				state[_.MENU].next();
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
