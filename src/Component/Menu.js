import * as Dom from 'dom';
import * as VAR from './vars';
import { Var } from './utils';
import { ROW_ELEMENT } from './MenuItem/Base';
import { FOCUS, FOCUSING, FunctionMenuItem, RESET } from './MenuItem/Function';

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
	KEEPING = 'k',
	FOCUSING_ITEM = 'f',
	SHOWING = 's',

	CLOSING_LISTENER = 'lC',
	KEY_LISTENER = 'lK',

	OPEN = 'O',
	CLOSE = 'C',
	APPEND = 'A',
	NEXT = 'N',
	CLEAR_FOCUS = 'R',
	FOCUS_ITEM = 'F';

export class Menu {
	constructor() {
		const menu = this;
		const menuElement = Dom.createElement('ul');
		const itemComponentList = [];

		Dom.setStyle(menuElement, MENU_STYLE);
		Dom.addClass(menuElement, 'menu');

		this[ITEM_LIST] = itemComponentList;
		this[MENU_ELEMENT] = menuElement;
		this[KEEPING] = false;
		this[FOCUSING_ITEM] = null;

		this[CLOSING_LISTENER] = () => this[CLOSE]();

		this[KEY_LISTENER] = event => {
			if (!this[KEEPING]) {
				if (event.key === 'ArrowUp') {
					this[NEXT](null, true);
				} else if (event.key === 'ArrowDown') {
					this[NEXT]();
				}
			}
		};

		const clearAll = () => {
			this[FOCUSING_ITEM] = null;
			this[CLEAR_FOCUS]();
		};

		Dom.addEventListener(menuElement, '-focus', event => menu[FOCUS_ITEM](event.data));
		Dom.addEventListener(menuElement, '-keeping', () => this[KEEPING] = true);
		Dom.addEventListener(menuElement, '-resume', () => this[KEEPING] = false);
		Dom.addEventListener(menuElement, '-clear-all', clearAll);
		Dom.addEventListener(menuElement, 'mouseleave', clearAll);
		Dom.addEventListener(menuElement, 'mousedown', STOP_MOUSEDOWN);
	}

	[FOCUS_ITEM](item) {
		this[KEEPING] = false;
		this[FOCUSING_ITEM] = item;
		this[CLEAR_FOCUS]();
		item[FOCUS]();
	}

	[CLEAR_FOCUS]() {
		if (this[KEEPING]) {
			return;
		}

		this[ITEM_LIST]
			.filter(IS_FUNCTION_ITEM)
			.filter(item => item !== this[FOCUSING_ITEM])
			.forEach(itemComponent => itemComponent[RESET]());
	}

	[OPEN]() {
		Dom.addEventListener(Dom.WINDOW, 'menu::-close', this[CLOSING_LISTENER]);
		Dom.addEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
		requestAnimationFrame(() => Dom.setStyle(this[MENU_ELEMENT], { opacity: 1 }));
		Dom.appendChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
	}

	[CLOSE]() {
		Dom.removeChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
		this[KEEPING] = false;
		this[FOCUSING_ITEM] = null;
		this[CLEAR_FOCUS]();
		Dom.removeEventListener(Dom.WINDOW, 'menu::-close', this[CLOSING_LISTENER]);
		Dom.removeEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
		Dom.setStyle(this[MENU_ELEMENT], { opacity: 0 });
	}

	/**
	 * @param {import('./MenuItem').MenuItem} itemComponent
	 */
	[APPEND](itemComponent) {
		this[ITEM_LIST].push(itemComponent);
		Dom.appendChild(this[MENU_ELEMENT], itemComponent[ROW_ELEMENT]);
	}

	get [SHOWING]() {
		return this[MENU_ELEMENT].parentElement !== null;
	}

	[NEXT](flag = null, reversed = false) {
		if (!this[SHOWING]) {
			return;
		}

		const sequence = this[ITEM_LIST].filter(IS_FUNCTION_ITEM);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(IS_FOCUSING);
		const length = sequence.length;

		for (let index = 0; index < length - 1; index++) {
			const current = sequence[(focusingIndex + index + 1) % length];

			if (flag === null || current.symbol === flag) {
				return this[FOCUS_ITEM](current);
			}
		}
	}
}

const IS_FOCUSING = item => item[FOCUSING];
const IS_FUNCTION_ITEM = item => item instanceof FunctionMenuItem;
const STOP_MOUSEDOWN = event => event.stopPropagation();