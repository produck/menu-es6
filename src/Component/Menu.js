import * as Dom from 'dom';
import * as VAR from './vars';
import { Var } from './utils';
import { ROW_ELEMENT } from './MenuItem/Base';
import { FOCUS, FunctionMenuItem, BLUR } from './MenuItem/Function';
import { isMenuTop } from '@/Scope';

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

export const
	MENU_ELEMENT = 'm',
	ITEM_LIST = 'l',
	FOCUSING_ITEM = 'f',
	TOP = 't',

	OPEN = 'O',
	CLOSE = 'X',
	APPEND = 'A',
	NEXT = 'N',
	CLEAR_FOCUS = 'Cf',
	FOCUS_ITEM = 'F';

export class Menu {
	constructor() {
		const menuElement = Dom.createElement('ul');
		const itemComponentList = [];

		Dom.setStyle(menuElement, MENU_STYLE);
		Dom.addClass(menuElement, 'menu');

		this[ITEM_LIST] = itemComponentList;
		this[MENU_ELEMENT] = menuElement;
		this[FOCUSING_ITEM] = null;

		Dom.addEventListener(menuElement, 'mouseleave', () => this[CLEAR_FOCUS]());
		Dom.addEventListener(menuElement, 'mousedown', Dom.STOP_PROPAGATION);
	}

	get [TOP]() {
		return isMenuTop(this);
	}

	[FOCUS_ITEM](item) {
		this[CLEAR_FOCUS]();
		this[FOCUSING_ITEM] = item[FOCUS]();
	}

	[CLEAR_FOCUS]() {
		if (this[TOP]) {
			const focused = this[FOCUSING_ITEM];

			focused && focused[BLUR]();
			this[FOCUSING_ITEM] = null;
		}
	}

	[OPEN]() {
		requestAnimationFrame(() => Dom.setStyle(this[MENU_ELEMENT], { opacity: 1 }));
	}

	[CLOSE]() {
		Dom.removeChild(this[MENU_ELEMENT].parentElement, this[MENU_ELEMENT]);
	}

	[APPEND](item) {
		this[ITEM_LIST].push(item);
		Dom.appendChild(this[MENU_ELEMENT], item[ROW_ELEMENT]);
	}

	[NEXT](flag = null, reversed = false) {
		const sequence = this[ITEM_LIST].filter(IS_FUNCTION_ITEM);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(item => item === this[FOCUSING_ITEM]);
		const length = sequence.length;

		for (let index = 0; index < length; index++) {
			const current = sequence[(focusingIndex + index + 1) % length];

			if (flag === null || current.symbol === flag) {
				return this[FOCUS_ITEM](current);
			}
		}
	}
}

const IS_FUNCTION_ITEM = item => item instanceof FunctionMenuItem;