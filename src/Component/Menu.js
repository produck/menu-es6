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
	'border-width': '1px',
	'border-style': 'solid',
	'line-height': Var(VAR.FUNCTION_ITEM_HEIGHT),
	'border-color': 'transparent',
	'background-color': Var(VAR.BACKGROUND_COLOR),
	'color': Var(VAR.FRONTGROUND_COLOR),
	'user-select': 'none',
	'opacity': 0,
	'transition-property': 'opacity',
	'transition-duration': '0.3s'
};

export const
	MENU_ELEMENT = 'm',
	ITEM_COMPONENT_LIST = 'i',
	CLOSING_LISTENER = 'c',
	KEEPING = 'k',
	FOCUSING_ITEM = 'f',
	SHOWING = 's',

	OPEN = 'O',
	CLOSE = 'C',
	APPEND = 'A',
	NEXT = 'N',
	CLEAR_FOCUS = 'Cf',
	FOCUS_ITEM = 'F';

export class Menu {
	constructor() {
		const menu = this;
		const menuElement = Dom.createElement('ul');
		const itemComponentList = [];

		Dom.setStyle(menuElement, MENU_STYLE);
		Dom.addClass(menuElement, 'menu');

		this[ITEM_COMPONENT_LIST] = itemComponentList;
		this[MENU_ELEMENT] = menuElement;
		this[KEEPING] = false;
		this[FOCUSING_ITEM] = null;
		this[CLOSING_LISTENER] = () => this[CLOSE]();

		const clearAll = () => {
			this[FOCUSING_ITEM] = null;
			this[CLEAR_FOCUS]();
		};

		Dom.addEventListener(menuElement, '-focus', event => menu[FOCUS_ITEM](event.data));
		Dom.addEventListener(menuElement, '-keeping', () => this[KEEPING] = true);
		Dom.addEventListener(menuElement, '-clear-all', clearAll);
		Dom.addEventListener(menuElement, 'mouseleave', clearAll);
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

		this[ITEM_COMPONENT_LIST]
			.filter(IS_FUNCTION_ITEM)
			.filter(item => item !== this[FOCUSING_ITEM])
			.forEach(itemComponent => itemComponent[RESET]());
	}

	[OPEN]() {
		Dom.appendChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
		requestAnimationFrame(() => Dom.setStyle(this[MENU_ELEMENT], { opacity: 1 }));
		Dom.addEventListener(Dom.WINDOW, 'menu::-close', this[CLOSING_LISTENER]);
	}

	[CLOSE]() {
		this[KEEPING] = false;
		this[FOCUSING_ITEM] = null;
		this[CLEAR_FOCUS]();
		Dom.removeEventListener(Dom.WINDOW, 'menu::-close', this[CLOSING_LISTENER]);
		Dom.removeChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
		Dom.setStyle(this[MENU_ELEMENT], { opacity: 0 });
	}

	/**
	 * @param {import('./MenuItem').MenuItem} itemComponent
	 */
	[APPEND](itemComponent) {
		this[ITEM_COMPONENT_LIST].push(itemComponent);
		Dom.appendChild(this[MENU_ELEMENT], itemComponent[ROW_ELEMENT]);
	}

	[NEXT](flag = null, reversed = false) {
		const sequence = this[ITEM_COMPONENT_LIST].filter(IS_FUNCTION_ITEM);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(IS_FOCUSING);
		const length = sequence.length;

		for (let index = 1; index < length - 1; index++) {
			const current = sequence[(focusingIndex + index) % length];

			if (flag === null || current.symbol === flag) {
				return this[FOCUS_ITEM](current);
			}
		}
	}
}

const IS_FOCUSING = item => item[FOCUSING];
const IS_FUNCTION_ITEM = item => item instanceof FunctionMenuItem;