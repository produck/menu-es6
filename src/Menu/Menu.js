import * as Dom from 'dom';
import { Var, VAR } from './utils';

import { isMenuTop } from './Scope';
import { AbstractMenu } from './Abstract';
import { FunctionMenuItem } from './Item/Function';
import { SpearatorMenuItem } from './Item/Spearator';
import { normalizeMenuOptions } from './normalize';

import * as _ from '@/symbol/menu';
import * as _BASE from '@/symbol/item/base';
import * as _FUNCTION from '@/symbol/item/function';

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

		this[_.ITEM_LIST] = itemComponentList;
		this[_.MENU_ELEMENT] = menuElement;
		this[_.FOCUSING_ITEM] = null;

		Dom.addEventListener(menuElement, 'mouseleave', () => this[_.CLEAR_FOCUS]());
		Dom.addEventListener(menuElement, 'mousedown', Dom.STOP_PROPAGATION);
	}

	get [_.TOP]() {
		return isMenuTop(this);
	}

	[_.FOCUS_ITEM](item) {
		if (!this[_.TOP] || item === this[_.FOCUSING_ITEM]) {
			return;
		}

		this[_.CLEAR_FOCUS]();
		item[_FUNCTION.FOCUS]();
		this[_.FOCUSING_ITEM] = item;
	}

	[_.CLEAR_FOCUS]() {
		if (!this[_.TOP]) {
			return;
		}

		const focused = this[_.FOCUSING_ITEM];

		focused && focused[_FUNCTION.BLUR]();
		this[_.FOCUSING_ITEM] = null;
	}

	[_.OPEN]() {
		Dom.REQUEST_ANIMATION_FRAME(() => Dom.setStyle(this[_.MENU_ELEMENT], { opacity: 1 }));
	}

	[_.CLOSE]() {
		Dom.removeChild(this[_.MENU_ELEMENT].parentElement, this[_.MENU_ELEMENT]);
		this[_.CLEAR_FOCUS]();
	}

	[_.APPEND](item) {
		this[_.ITEM_LIST].push(item);
		Dom.appendChild(this[_.MENU_ELEMENT], item[_BASE.ROW_ELEMENT]);
	}

	[_.NEXT](flag = null, reversed = false) {
		const sequence = this[_.ITEM_LIST].filter(IS_FUNCTION_ITEM);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(item => item === this[_.FOCUSING_ITEM]);
		const length = sequence.length;

		for (let index = 0; index < length; index++) {
			const current = sequence[(focusingIndex + index + 1) % length];

			if (flag === null || current.symbol === flag) {
				return this[_.FOCUS_ITEM](current);
			}
		}
	}

	static [_.CREATE](options) {
		const finalOptions = normalizeMenuOptions(options);
		const menu = new this();

		finalOptions.forEach((groupOptions, index) => {
			groupOptions.forEach(options => menu[_.APPEND](new options.type(menu, options)));
			index !== options.length - 1 && menu[_.APPEND](new SpearatorMenuItem(menu));
		});

		return menu;
	}
}
