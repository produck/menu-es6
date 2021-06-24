import * as Dom from 'dom';
import * as VAR from './vars';
import { Var } from './utils';
import { ROW_ELEMENT } from './MenuItem/Base';
import { FOCUS, RESET } from './MenuItem/Function';
import { SpearatorMenuItem } from './MenuItem/Spearator';

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
	MENU_ELEMENT = 'e',
	ITEM_COMPONENT_LIST = 'l',
	OPEN = 's',
	CLOSE = 'c',
	CLOSING_LISTENER = 'C',
	APPEND = 'a',
	FOCUS_NEXT = 'n',
	FOCUS_PREVIOUS = 'p',
	KEEPING = 'k',
	CLEAR_FOCUS = 'cF';

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
		this[CLOSING_LISTENER] = () => this[CLOSE]();

		Dom.addEventListener(menuElement, '-focus', event => {
			event.stopPropagation();
			menu[KEEPING] = false;
			this[CLEAR_FOCUS](event.data);
			event.data[FOCUS]();
		});

		Dom.addEventListener(menuElement, 'mouseleave', () => this[CLEAR_FOCUS]());
		Dom.addEventListener(menuElement, '-clear-focus', () => this[CLEAR_FOCUS]());
		Dom.addEventListener(menuElement, '-keeping', () => this[KEEPING] = true);
	}

	[CLEAR_FOCUS](exclude = null) {
		if (this[KEEPING]) {
			return;
		}

		this[ITEM_COMPONENT_LIST]
			.filter(item => !SpearatorMenuItem.is(item) && item !== exclude)
			.forEach(itemComponent => itemComponent[RESET]());
	}

	[OPEN]() {
		Dom.appendChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
		requestAnimationFrame(() => Dom.setStyle(this[MENU_ELEMENT], { opacity: 1 }));
		Dom.addEventListener(Dom.WINDOW, 'menu::-close', this[CLOSING_LISTENER]);
	}

	[CLOSE]() {
		this[KEEPING] = false;
		Dom.removeChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
		Dom.setStyle(this[MENU_ELEMENT], { opacity: 0 });
		Dom.removeEventListener(Dom.WINDOW, 'menu::-close', this[CLOSING_LISTENER]);
		this[CLEAR_FOCUS]();
	}

	/**
	 * @param {import('./MenuItem').MenuItem} itemComponent
	 */
	[APPEND](itemComponent) {
		this[ITEM_COMPONENT_LIST].push(itemComponent);
		Dom.appendChild(this[MENU_ELEMENT], itemComponent[ROW_ELEMENT]);
	}

	[FOCUS_NEXT](flag = null) {

	}

	[FOCUS_PREVIOUS](flag = null) {

	}
}