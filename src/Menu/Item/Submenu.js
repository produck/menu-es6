import * as Dom from 'dom';
import { FunctionMenuItem, normalize as normalizeFunctionMenuItemOptions } from './Function';
import { normalizeMenuOptions } from '../normalize';
import { MENU_ITEM_ICON_BOX_STYLE } from '../utils';

import { Menu } from '../Menu';
import { openMenu, closeMenu } from '../Scope';
import * as _ from '@/symbol/item/submenu';
import * as _BASE from '@/symbol/item/base';
import * as _FUNCTION from '@/symbol/item/function';
import * as _MENU from '@/symbol/menu';

const ICON_POSITION_STYLE = { right: 0, top: 0 };

export function popup(options, position) {
	openMenu(Menu[_MENU.CREATE](options));
}

const EXPANDING_STACK = [];

export class SubmenuMenuItem extends FunctionMenuItem {
	constructor(menu, options) {
		super(menu, options);

		const expandingSpan = Dom.createElement('span');

		Dom.setStyle(expandingSpan, MENU_ITEM_ICON_BOX_STYLE, ICON_POSITION_STYLE);
		Dom.addClass(expandingSpan, 'menu-item-expanding');
		Dom.appendChild(this[_BASE.TEXT_ELEMENT], expandingSpan);

		this[_.SUB_MENU_OPITONS] = options.submenu;
		this[_.KEY_LISTENER] = event => event.key in KEY_MAP && KEY_MAP[event.key]();

		const expand = () => {
			if (EXPANDING_STACK[0] !== this) {
				popup(this[_.SUB_MENU_OPITONS]);
				EXPANDING_STACK.unshift(this);
			}
		};

		const collapse = () => {
			if (EXPANDING_STACK[0] === this) {
				closeMenu();
				EXPANDING_STACK.shift();
			}
		};

		this[_BASE.LISTEN_ENTER](expand);

		const KEY_MAP = {
			ArrowLeft: collapse,
			ArrowRight: expand,
			Enter: expand
		};
	}

	[_FUNCTION.FOCUS]() {
		super[_FUNCTION.FOCUS]();
		Dom.addEventListener(Dom.WINDOW, 'keydown', this[_.KEY_LISTENER]);
	}

	[_FUNCTION.BLUR]() {
		super[_FUNCTION.BLUR]();
		Dom.removeEventListener(Dom.WINDOW, 'keydown', this[_.KEY_LISTENER]);
	}
}

export function normalize(_options) {
	const options = Dom.ASSIGN({
		submenu: []
	}, normalizeFunctionMenuItemOptions(_options));

	const {
		submenu: _submenu = options.submenu
	} = _options;

	options.submenu = normalizeMenuOptions(_submenu);

	return options;
}