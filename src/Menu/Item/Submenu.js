import * as Dom from 'dom';
import { Var, VAR, MENU_ITEM_ICON_BOX_STYLE } from '../utils';

import { AbstractMenu } from '../Abstract';
import { FunctionMenuItem, normalize as normalizeFunctionMenuItemOptions } from './Function';
import { SpearatorMenuItem } from './Spearator';
import { normalizeMenuOptions } from '../normalize';
import { appendMenu, setCurrentMenu } from '../Scope';

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
		this[_MENU.COLLAPSING_DELAY] = null;

		const cancelOpenerCollapse = () => {
			let opener = this[_MENU.OPENER];

			while (opener !== null) {
				opener[_BASE.MENU][_MENU.FOCUS_ITEM](opener);
				opener[_BASE.MENU][_MENU.CANCEL_COLLAPSE]();
				opener = opener[_BASE.MENU][_MENU.OPENER];
			}
		};

		Dom.addEventListener(menuElement, 'mouseleave', () => this[_MENU.FOCUS_ITEM]());
		Dom.addEventListener(menuElement, 'mousedown', Dom.STOP_PROPAGATION);
		Dom.addEventListener(menuElement, 'mouseenter', cancelOpenerCollapse);

	}

	get [_MENU.EXPANDING_ITEM]() {
		return this[_MENU.ITEM_LIST]
			.filter(item => item instanceof SubmenuMenuItem)
			.find(submenuItem => submenuItem[_SUBMENU.EXPANDED_MENU] !== null) || null;
	}

	[_MENU.FOCUS_ITEM](item = null) {
		const focusingItem = this[_MENU.FOCUSING_ITEM];

		if (focusingItem) {
			focusingItem && focusingItem[_FUNCTION.BLUR]();
		}

		if (item !== null) {
			item[_FUNCTION.FOCUS]();
		}

		const expandingItem = this[_MENU.EXPANDING_ITEM];

		if (expandingItem !== item) {
			this[_MENU.COLLAPSE_ITEM]();
		} else {
			this[_MENU.CANCEL_COLLAPSE]();
		}

		this[_MENU.FOCUSING_ITEM] = item;
	}

	[_MENU.EXPAND_ITEM]() {
		if (this[_MENU.FOCUSING_ITEM] instanceof SubmenuMenuItem) {
			this[_MENU.FOCUSING_ITEM][_SUBMENU.EXPAND]();
		}
	}

	[_MENU.COLLAPSE_ITEM](delay = 500) {
		this[_MENU.CANCEL_COLLAPSE]();

		const expandingItem = this[_MENU.EXPANDING_ITEM];

		if (expandingItem && expandingItem instanceof SubmenuMenuItem) {
			this[_MENU.COLLAPSING_DELAY] = setTimeout(() => expandingItem[_SUBMENU.COLLAPSE](), delay);
		}
	}

	[_MENU.CANCEL_COLLAPSE]() {
		clearTimeout(this[_MENU.COLLAPSING_DELAY]);
	}

	[_MENU.OPEN]() {
		Dom.REQUEST_ANIMATION_FRAME(() => Dom.setStyle(this[_MENU.MENU_ELEMENT], { opacity: 1 }));
	}

	[_MENU.CLOSE]() {
		Dom.removeChild(this[_MENU.MENU_ELEMENT].parentElement, this[_MENU.MENU_ELEMENT]);
		this[_MENU.COLLAPSE_ITEM](0);
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

			if (current[_FUNCTION.FLAG] === flag) {
				return this[_MENU.FOCUS_ITEM](current);
			}
		}
	}

	static [_MENU.S_CREATE](options) {
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
	const menu = Menu[_MENU.S_CREATE](options);

	setCurrentMenu(menu);
	appendMenu(menu);

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
		this[_SUBMENU.EXPANDED_MENU] = null;
		this[_BASE.LISTEN_ENTER](() => this[_BASE.MENU][_MENU.EXPAND_ITEM]());
	}

	[_SUBMENU.EXPAND]() {
		if (this[_SUBMENU.EXPANDED_MENU] === null) {
			const menu = Menu[_MENU.S_CREATE](this[_SUBMENU.SUB_MENU_OPITONS]);

			menu[_MENU.OPENER] = this;
			this[_SUBMENU.EXPANDED_MENU] = menu;
			appendMenu(menu);
		}
	}

	[_SUBMENU.COLLAPSE]() {
		const expandedMenu = this[_SUBMENU.EXPANDED_MENU];

		if (expandedMenu !== null) {
			expandedMenu[_MENU.CLOSE]();
			this[_SUBMENU.EXPANDED_MENU] = null;
		}
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