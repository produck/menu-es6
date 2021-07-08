import * as Dom from '../dom';

import { popup } from '../Menu/index';
import { normalizeMenuOptions } from '../Menu/normalize';
import { FRAGEMENT, MNEMONIC, resolveLabelText, VAR, Var } from '../utils';

export const MENU_BUTTON_OUTER_STYLE = {
	padding: `0 ${Var(VAR.SIZE_SM)}`,
};

import * as _ from '../symbol/button';
import * as _B from '../symbol/bar';

export class MenuBarButton {
	constructor(menuBar, options) {
		this[_.MENU_BAR] = menuBar;
		this[_.MENU_OPTIONS] = options.menu;
		this[_.MNEMONIC] = null;
		this[_.TITLE] = options.title;

		const outerElement = this[_.OUTER_ELEMENT] = Dom.createElement('div');
		const innerElement = this[_.INNER_ELEMENT] = Dom.createElement('div');

		Dom.addClass(outerElement, 'menu-bar-button');
		Dom.addClass(innerElement, 'menu-bar-button-title');
		Dom.appendChild(outerElement, innerElement);
		Dom.setStyle(outerElement, MENU_BUTTON_OUTER_STYLE);

		const focusThis = () => this[_.MENU_BAR][_B.FOCUSING_BUTTON] = this;

		Dom.addEventListener(outerElement, 'mouseenter', focusThis);

		this[_.SET_LABEL]();
	}

	[_.SET_LABEL]() {
		const result = resolveLabelText(this[_.TITLE], !this[_.MENU_BAR][_B.HAS_MNEMONIC]);

		Dom.removeAllChild(this[_.INNER_ELEMENT]);
		Dom.appendChild(this[_.INNER_ELEMENT], result[FRAGEMENT]);
		this[_.MNEMONIC] = result[MNEMONIC];
	}

	[_.FOCUS]() {
		Dom.addClass(this[_.OUTER_ELEMENT], 'focus');
	}

	[_.BLUR]() {
		Dom.removeClass(this[_.OUTER_ELEMENT], 'focus');
	}

	[_.OPEN_MENU]() {
		const { left, bottom } = Dom.getRect(this[_.OUTER_ELEMENT]);
		const menuOptions = normalizeMenuOptions(this[_.MENU_OPTIONS]());

		popup(menuOptions, {
			position: { x: left, y: bottom },
			mnemonic: this[_.MENU_BAR][_B.HAS_MNEMONIC]
		});
	}
}