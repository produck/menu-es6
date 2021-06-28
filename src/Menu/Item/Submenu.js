import * as Dom from 'dom';
import { FunctionMenuItem, normalize as normalizeFunctionMenuItemOptions } from './Function';
import { normalizeMenuOptions } from '../normalize';
import { MENU_ITEM_ICON_BOX_STYLE } from '../utils';

import { Menu } from '../Menu';
import { openMenu } from '../Scope';
import * as _ from '@/symbol/item/submenu';
import * as _BASE from '@/symbol/item/base';
import * as _FUNCTION from '@/symbol/item/function';
import * as _MENU from '@/symbol/menu';

const ICON_POSITION_STYLE = { right: 0, top: 0 };

export function popup(options, position) {
	openMenu(Menu[_MENU.CREATE](options));
}

export class SubmenuMenuItem extends FunctionMenuItem {
	constructor(menu, options) {
		super(menu, options);

		const expandingSpan = Dom.createElement('span');

		Dom.setStyle(expandingSpan, MENU_ITEM_ICON_BOX_STYLE, ICON_POSITION_STYLE);
		Dom.addClass(expandingSpan, 'menu-item-expanding');
		Dom.appendChild(this[_BASE.TEXT_ELEMENT], expandingSpan);

		this[_.SUB_MENU_OPITONS] = options.submenu;
		this[_BASE.LISTEN_ENTER](() => this[_.EXPAND]());
	}

	[_.EXPAND]() {
		popup(this[_.SUB_MENU_OPITONS]);
	}

	[_FUNCTION.FOCUS]() {
		super[_FUNCTION.FOCUS]();
		// Dom.addEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
	}

	[_FUNCTION.BLUR]() {
		super[_FUNCTION.BLUR]();
		// this[COLLAPSE]();
		// Dom.removeEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
	}
}

export function normalize(_options) {
	const options = Object.assign({
		submenu: []
	}, normalizeFunctionMenuItemOptions(_options));

	const {
		submenu: _submenu = options.submenu
	} = _options;

	options.submenu = normalizeMenuOptions(_submenu);

	return options;
}