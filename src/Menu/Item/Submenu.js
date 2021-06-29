import * as Dom from 'dom';
import { Var, VAR, MENU_ITEM_ICON_BOX_STYLE } from '../utils';

import { AbstractMenu } from '../Abstract';
import { FunctionMenuItem, normalize as normalizeFunctionMenuItemOptions } from './Function';
import { SpearatorMenuItem } from './Spearator';
import { normalizeMenuOptions } from '../normalize';
import { openMenu, closeMenu } from '../Scope';

import * as _SUBMENU from '@/symbol/item/submenu';
import * as _BASE from '@/symbol/item/base';
import * as _FUNCTION from '@/symbol/item/function';
import * as _MENU from '@/symbol/menu';

const MENU_STYLE = {
	display: 'block',
	position: 'fixed',
	margin: '0',
	padding: `${Var(VAR.WHITESPACE_Y)} 0`,
	'font-size': '12px',
	'white-space': 'nowrap',
	'border': '1px solid transparent',
	'line-height': Var(VAR.FUNCTION_ITEM_HEIGHT),
	'background-color': Var(VAR.BACKGROUND_COLOR),
	'color': Var(VAR.FRONTGROUND_COLOR),
	'user-select': 'none',
	'opacity': 0,
	'transition-property': 'opacity',
	'transition-duration': '0.3s'
};

const IS_FUNCTION_ITEM = item => item instanceof FunctionMenuItem;

export class Menu extends AbstractMenu {
	constructor() {
		super();

		const menuElement = Dom.createElement('ul');
		const itemComponentList = [];

		Dom.setStyle(menuElement, MENU_STYLE);
		Dom.addClass(menuElement, 'menu');

		this[_MENU.ITEM_LIST] = itemComponentList;
		this[_MENU.MENU_ELEMENT] = menuElement;
		this[_MENU.FOCUSING_ITEM] = null;
		this[_MENU.OPENER] = null;

		Dom.addEventListener(menuElement, 'mouseleave', () => this[_MENU.CLEAR_FOCUS]());
		Dom.addEventListener(menuElement, 'mousedown', Dom.STOP_PROPAGATION);
	}

	get [_MENU.EXPANDING_ITEM]() {
		return this[_MENU.ITEM_LIST]
			.filter(item => item instanceof SubmenuMenuItem)
			.find(submenuItem => submenuItem[_SUBMENU.EXPANDED_MENU] !== null) || null;
	}

	[_MENU.FOCUS_ITEM](item) {
		if (this[_MENU.FOCUSING_ITEM] === item) {
			return;
		}

		this[_MENU.CLEAR_FOCUS]();
		item[_FUNCTION.FOCUS]();
		this[_MENU.FOCUSING_ITEM] = item;
	}

	[_MENU.CLEAR_FOCUS]() {
		this[_MENU.FOCUSING_ITEM] && this[_MENU.FOCUSING_ITEM][_FUNCTION.BLUR]();
		this[_MENU.FOCUSING_ITEM] = null;
		this[_MENU.EXPANDING_ITEM] && this[_MENU.EXPANDING_ITEM][_SUBMENU.COLLAPSE]();
	}

	[_MENU.OPEN]() {
		Dom.REQUEST_ANIMATION_FRAME(() => Dom.setStyle(this[_MENU.MENU_ELEMENT], { opacity: 1 }));
	}

	[_MENU.CLOSE]() {
		this[_MENU.CLEAR_FOCUS]();
		Dom.removeChild(this[_MENU.MENU_ELEMENT].parentElement, this[_MENU.MENU_ELEMENT]);
	}

	[_MENU.APPEND](item) {
		this[_MENU.ITEM_LIST].push(item);
		Dom.appendChild(this[_MENU.MENU_ELEMENT], item[_BASE.ROW_ELEMENT]);
	}

	[_MENU.NEXT](flag = null, reversed = false) {
		const sequence = this[_MENU.ITEM_LIST].filter(IS_FUNCTION_ITEM);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(item => item === this[_MENU.FOCUSING_ITEM]);
		const length = sequence.length;

		for (let index = 0; index < length; index++) {
			const current = sequence[(focusingIndex + index + 1) % length];

			if (flag === null || current.symbol === flag) {
				return this[_MENU.FOCUS_ITEM](current);
			}
		}
	}

	static [_MENU.CREATE](options) {
		const finalOptions = normalizeMenuOptions(options);
		const menu = new this();

		finalOptions.forEach((groupOptions, index) => {
			groupOptions.forEach(options => menu[_MENU.APPEND](new options.type(menu, options)));
			index !== options.length - 1 && menu[_MENU.APPEND](new SpearatorMenuItem(menu));
		});

		return menu;
	}
}

const ICON_POSITION_STYLE = { right: 0, top: 0 };

export function popup(options, position) {
	const menu = Menu[_MENU.CREATE](options);

	openMenu(menu);

	return menu;
}

export class SubmenuMenuItem extends FunctionMenuItem {
	constructor(menu, options) {
		super(menu, options);

		const expandingSpan = Dom.createElement('span');

		Dom.setStyle(expandingSpan, MENU_ITEM_ICON_BOX_STYLE, ICON_POSITION_STYLE);
		Dom.addClass(expandingSpan, 'menu-item-expanding');
		Dom.appendChild(this[_BASE.TEXT_ELEMENT], expandingSpan);

		this[_SUBMENU.SUB_MENU_OPITONS] = options.submenu;
		this[_SUBMENU.KEY_LISTENER] = event => event.key in KEY_MAP && KEY_MAP[event.key]();
		this[_SUBMENU.EXPANDED_MENU] = null;

		const expand = () => this[_SUBMENU.EXPAND]();
		const collapse = () => this[_SUBMENU.COLLAPSE]();

		this[_BASE.LISTEN_ENTER](expand);

		const KEY_MAP = {
			ArrowLeft: collapse,
			Escape: collapse,
			ArrowRight: expand,
			Enter: expand
		};
	}

	[_SUBMENU.EXPAND]() {
		if (this[_SUBMENU.EXPANDED_MENU] === null) {
			const menu = Menu[_MENU.CREATE](this[_SUBMENU.SUB_MENU_OPITONS]);

			menu[_MENU.OPENER] = this;
			this[_SUBMENU.EXPANDED_MENU] = menu;
			openMenu(menu);
		}
	}

	[_SUBMENU.COLLAPSE]() {
		const expandedMenu = this[_SUBMENU.EXPANDED_MENU];

		if (expandedMenu !== null) {
			expandedMenu[_MENU.CLOSE]();
			this[_SUBMENU.EXPANDED_MENU] = null;
		}
	}



	// [_FUNCTION.FOCUS]() {
	// 	super[_FUNCTION.FOCUS]();
	// 	Dom.addEventListener(Dom.WINDOW, 'keydown', this[_SUBMENU.KEY_LISTENER]);
	// }

	// [_FUNCTION.BLUR]() {
	// 	Dom.removeEventListener(Dom.WINDOW, 'keydown', this[_SUBMENU.KEY_LISTENER]);
	// 	super[_FUNCTION.BLUR]();
	// 	this[_SUBMENU.COLLAPSE]();
	// }
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