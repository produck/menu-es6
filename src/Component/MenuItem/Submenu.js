import * as Dom from 'dom';
import { FunctionMenuItem, FOCUS, BLUR } from './Function';
import { TEXT_ELEMENT, LISTEN_ENTER } from './Base';
import { MENU_ITEM_ICON_BOX_STYLE } from '../utils';
import { CLOSE } from '../Menu';

import { popup } from '@/Scope';

const ICON_POSITION_STYLE = {
	right: 0,
	top: 0
};

export const
	SUB_MENU_OPITONS = 'sm',
	IS_EXPANDING = 'p',
	EXPAND = 'E',
	COLLAPSE = 'C',

	KEY_LISTENER = 'kL';

export class SubmenuMenuItem extends FunctionMenuItem {
	constructor(menu, options) {
		super(menu, options);

		const expandingSpan = Dom.createElement('span');

		Dom.setStyle(expandingSpan, MENU_ITEM_ICON_BOX_STYLE, ICON_POSITION_STYLE);
		Dom.addClass(expandingSpan, 'menu-item-expanding');
		Dom.appendChild(this[TEXT_ELEMENT], expandingSpan);

		this[SUB_MENU_OPITONS] = options.submenu;
		this[IS_EXPANDING] = false;
		this[LISTEN_ENTER](() => this[EXPAND]());
	}

	[EXPAND]() {
		// if (this[IS_EXPANDING]) {
		// 	return;
		// }

		// this[IS_EXPANDING] = true;
		// this[SUB_MENU_OPITONS][OPEN]();
		// Dom.dispatchEvent(this[ROW_ELEMENT], Dom.createEvent('-keeping', this));
		popup(this[SUB_MENU_OPITONS]);
	}

	[COLLAPSE]() {
		if (!this[IS_EXPANDING]) {
			return;
		}

		this[SUB_MENU_OPITONS][CLOSE]();
		this[IS_EXPANDING] = false;
	}

	[FOCUS]() {
		super[FOCUS]();
		Dom.addEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
	}

	[BLUR]() {
		super[BLUR]();
		this[COLLAPSE]();
		Dom.removeEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
	}
}

