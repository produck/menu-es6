import * as Dom from 'dom';
import * as VAR from './vars';
import { Var } from './utils';
import { ROW_ELEMENT } from './MenuItem';
import { FOCUS, RESET } from './FunctionMenuItem';
import { SpearatorMenuItem } from './SpearatorMenuItem';

const MENU_STYLE = {
	display: 'block',
	position: 'fixed',
	margin: '0',
	padding: `${Var(VAR.MENU_WHITESPACE)} 0`,
	'font-size': '12px',
	'white-space': 'nowrap',
	'border-width': '1px',
	'border-style': 'solid',
	'line-height': Var(VAR.FUNCTION_ITEM_HEIGHT),
	'border-color': 'transparent',
	'background-color': Var(VAR.BACKGROUND_COLOR),
	'color': Var(VAR.FRONTGROUND_COLOR),
	'user-select': 'none'
};

export const
	MENU_ELEMENT = 'e',
	ITEM_COMPONENT_LIST = 'l',
	SHOW = 's',
	CLOSE = 'c',
	APPEND = 'a',
	FOCUS_NEXT = 'n',
	FOCUS_PREVIOUS = 'p';

export class Menu {
	constructor() {
		const menuElement = Dom.createElement('ul');
		const itemComponentList = [];

		Dom.setStyle(menuElement, MENU_STYLE);
		Dom.setClassName(menuElement, 'menu');

		this[ITEM_COMPONENT_LIST] = itemComponentList;
		this[MENU_ELEMENT] = menuElement;

		function clearFocus() {
			itemComponentList
				.filter(itemComponent => !(itemComponent instanceof SpearatorMenuItem))
				.forEach(itemComponent => itemComponent[RESET]());
		}

		Dom.addEventListener(menuElement, '-focus', event => {
			event.stopPropagation();
			clearFocus();
			event.data[FOCUS]();
		});

		Dom.addEventListener(menuElement, 'mouseleave', clearFocus);
		Dom.addEventListener(menuElement, '-clear-focus', clearFocus);
	}

	[SHOW]() {
		Dom.appendChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
	}

	[CLOSE]() {
		Dom.removeChild(Dom.DOCUMENT.body, this[MENU_ELEMENT]);
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