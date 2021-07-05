import * as Dom from 'dom';
import * as lang from 'lang';
import { Var, VAR } from '@/utils';

import { AbstractMenu } from './Base';
import { SpearatorMenuItem } from './Spearator';
import { normalizeMenuOptions } from '../normalize';
import { appendMenu } from '../Scope';

import {
	FunctionMenuItem,
	normalize as normalizeFunctionMenuItemOptions,
	MENU_ITEM_ICON_BOX_STYLE
} from './Function';

import * as _S from '@/symbol/submenu';
import * as _B from '@/symbol/base';
import * as _F from '@/symbol/function';
import * as _M from '@/symbol/menu';

const MENU_STYLE = {
	display: 'block',
	position: 'fixed',
	margin: '0',
	padding: `${Var(VAR.WHITESPACE_Y)} 0`,
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

const IS_FOCUSABLE_ITEM = item => item[_B.FOCUSABLE];

export class Menu extends AbstractMenu {
	constructor() {
		super();

		const menuElement = Dom.createElement('ul');
		const itemComponentList = [];

		Dom.setStyle(menuElement, MENU_STYLE);
		Dom.addClass(menuElement, 'menu');

		this[_M.ITEM_LIST] = itemComponentList;
		this[_M.MENU_ELEMENT] = menuElement;
		this[_M.FOCUSING_ITEM] = null;
		this[_M.OPENER] = null;
		this[_M.COLLAPSING_DELAY] = null;
		this[_M.HAS_MNEMONIC] = false;

		const cancelOpenerCollapse = () => {
			let opener = this[_M.OPENER];

			while (!lang.isNull(opener)) {
				opener[_B.MENU][_M.FOCUS_ITEM](opener);
				opener[_B.MENU][_M.CANCEL_COLLAPSE]();
				opener = opener[_B.MENU][_M.OPENER];
			}
		};

		Dom.addEventListener(menuElement, 'mouseleave', () => this[_M.FOCUS_ITEM]());
		Dom.addEventListener(menuElement, 'mousedown', Dom.STOP_PROPAGATION);
		Dom.addEventListener(menuElement, 'mouseenter', cancelOpenerCollapse);
	}

	get [_M.EXPANDING_ITEM]() {
		return this[_M.ITEM_LIST]
			.filter(item => lang.instanceOf(item, SubmenuMenuItem))
			.find(submenuItem => !lang.isNull(submenuItem[_S.EXPANDED_MENU])) || null;
	}

	[_M.FOCUS_ITEM](item = null) {
		this[_M.FOCUSING_ITEM] && this[_M.FOCUSING_ITEM][_F.BLUR]();
		!lang.isNull(item) && item[_F.FOCUS]();
		this[this[_M.EXPANDING_ITEM] === item ? _M.CANCEL_COLLAPSE : _M.COLLAPSE_ITEM]();
		this[_M.FOCUSING_ITEM] = item;
	}

	[_M.EXPAND_ITEM]() {
		if (lang.instanceOf(this[_M.FOCUSING_ITEM], SubmenuMenuItem)) {
			this[_M.FOCUSING_ITEM][_S.EXPAND]();
		}
	}

	[_M.COLLAPSE_ITEM](delay = 500) {
		this[_M.CANCEL_COLLAPSE]();

		const expandingItem = this[_M.EXPANDING_ITEM];

		if (expandingItem && lang.instanceOf(expandingItem, SubmenuMenuItem)) {
			this[_M.COLLAPSING_DELAY] = setTimeout(() => expandingItem[_S.COLLAPSE](), delay);
		}
	}

	[_M.CANCEL_COLLAPSE]() {
		clearTimeout(this[_M.COLLAPSING_DELAY]);
	}

	[_M.OPEN]() {
		Dom.REQUEST_ANIMATION_FRAME(() => Dom.setStyle(this[_M.MENU_ELEMENT], { opacity: 1 }));
	}

	[_M.CLOSE]() {
		Dom.removeChild(this[_M.MENU_ELEMENT].parentElement, this[_M.MENU_ELEMENT]);
		this[_M.COLLAPSE_ITEM](0);
	}

	/**
	 * Use to add item to this menu.
	 *
	 * @param {import('./Base').BaseMenuItem} item A menu item being appended
	 */
	[_M.APPEND](item) {
		this[_M.ITEM_LIST].push(item);
	}

	/**
	 * Try to find a `next` item then focusing.
	 *
	 * @param {string|null} mnemonic Filtering item by a-z
	 * @param {boolean} reversed Searching direction
	 * @returns The target item found or not.
	 */
	[_M.NEXT](mnemonic = null, reversed = false) {
		const sequence = this[_M.ITEM_LIST].filter(IS_FOCUSABLE_ITEM);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(item => item === this[_M.FOCUSING_ITEM]);
		const length = sequence.length;

		for (let index = 0; index < length; index++) {
			const current = sequence[(focusingIndex + index + 1) % length];

			if (lang.isNull(mnemonic) || current[_F.MNEMONIC] === mnemonic) {
				this[_M.FOCUS_ITEM](current);

				return true;
			}
		}

		return false;
	}

	/**
	 * Adjustment for avoiding a popuped menu overflow.
	 *
	 * @param {{x: number, y:number}} position
	 */
	[_M.SET_OFFSET](position) {
		Dom.setStyle(this[_M.MENU_ELEMENT], {
			top: `${position.y}px`, left: `${position.x}px`
		});
	}

	static [_M.S_CREATE](options, hasMnemonic) {
		const finalOptions = normalizeMenuOptions(options);
		const menu = new this();
		const fragement = Dom.createFragement();

		menu[_M.HAS_MNEMONIC] = hasMnemonic;

		finalOptions.forEach((groupOptions, index) => {
			groupOptions.forEach(options => {
				const item = new options.type(menu, options);

				menu[_M.APPEND](item);
				Dom.appendChild(fragement, item[_B.ROW_ELEMENT]);
			});

			index !== options.length - 1 && menu[_M.APPEND](new SpearatorMenuItem(menu));
		});

		Dom.appendChild(menu[_M.MENU_ELEMENT], fragement);

		return menu;
	}
}

const ICON_POSITION_STYLE = { right: 0, top: 0 };

/**
 * @param {HTMLElement} menuElement
 * @param {DOMRect} rect
 */
export const relayoutMenu = (menuElement, rect) => {
	const menuRect = Dom.getRect(menuElement);

	if (menuRect.bottom > Dom.WINDOW.innerHeight) {
		Dom.setStyle(menuElement, {
			top: `${rect.bottom - menuElement.offsetHeight}px`
		});
	}

	if (menuRect.right > Dom.WINDOW.innerWidth) {
		Dom.setStyle(menuElement, {
			left: `${rect.left - menuElement.offsetWidth}px`
		});
	}

	//TODO resize
};

export class SubmenuMenuItem extends FunctionMenuItem {
	constructor(menu, options) {
		super(menu, options);

		const expandingSpan = Dom.createElement('span');

		Dom.setStyle(expandingSpan, MENU_ITEM_ICON_BOX_STYLE, ICON_POSITION_STYLE);
		Dom.addClass(expandingSpan, 'menu-item-expanding');
		Dom.appendChild(this[_B.TEXT_ELEMENT], expandingSpan);

		this[_S.SUB_MENU_OPITONS] = options.submenu;
		this[_S.EXPANDED_MENU] = null;
		this[_B.LISTEN_ENTER](() => this[_B.MENU][_M.EXPAND_ITEM]());
	}

	[_S.EXPAND]() {
		if (lang.isNull(this[_S.EXPANDED_MENU])) {
			const menu = Menu[_M.S_CREATE](this[_S.SUB_MENU_OPITONS], this[_B.MENU][_M.HAS_MNEMONIC]);
			const rect = Dom.getRect(this[_B.ROW_ELEMENT]);

			menu[_M.OPENER] = this;
			this[_S.EXPANDED_MENU] = menu;
			appendMenu(menu);
			menu[_M.SET_OFFSET]({ x: rect.right, y: rect.top });
			relayoutMenu(menu[_M.MENU_ELEMENT], rect);
		}
	}

	[_S.COLLAPSE]() {
		const expandedMenu = this[_S.EXPANDED_MENU];

		if (!lang.isNull(expandedMenu)) {
			expandedMenu[_M.CLOSE]();
			this[_S.EXPANDED_MENU] = null;
		}
	}

	[_B.ACTIVE]() {
		this[_S.EXPAND]();
		this[_S.EXPANDED_MENU][_M.NEXT]();
	}
}

export const normalize = (_options) => {
	const options = lang.assign({
		submenu: []
	}, normalizeFunctionMenuItemOptions(_options));

	const {
		submenu: _submenu = options.submenu
	} = _options;

	options.submenu = normalizeMenuOptions(_submenu);

	return options;
};