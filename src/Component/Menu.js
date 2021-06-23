import { appendChild, createElement, DOCUMENT, removeChild, setClassName, setStyle } from './dom';
import * as VAR from './vars';
import { Var } from './utils';
import { ROW_ELEMENT } from './MenuItem';

const MENU_STYLE = {
	display: 'block',
	position: 'fixed',
	'white-space': 'nowrap',
	'border-width': '1px',
	'border-style': 'solid',
	'line-height': Var(VAR.ITEM_HEIGHT),
	'border-color': Var(VAR.OUTLINE_COLOR),
	'background-color': Var(VAR.BACKGROUND_COLOR),
	'color': Var(VAR.FRONTGROUND_COLOR)
};

export const
	MENU_ELEMENT = 0x00,
	ITEM_COMPONENT_LIST = 0x01,
	SHOW = 0x02,
	CLOSE = 0x03,
	APPEND = 0x04
	FOCUS_NEXT = 0x05;

export class Menu {
	constructor(menu) {
		const menuElement = createElement('ul');

		setStyle(menuElement, MENU_STYLE);
		setClassName(menuElement, 'menu');

		this[ITEM_COMPONENT_LIST] = [];
		this[MENU_ELEMENT] = menuElement;
	}

	[SHOW]() {
		// update styles of items.

		appendChild(DOCUMENT.body, this[MENU_ELEMENT]);
	}

	[CLOSE]() {
		removeChild(DOCUMENT.body, this[MENU_ELEMENT]);
	}

	/**
	 * @param {import('./MenuItem').MenuItem} itemComponent
	 */
	[APPEND](itemComponent) {
		this[ITEM_COMPONENT_LIST].push(itemComponent);
		appendChild(this[MENU_ELEMENT], itemComponent[ROW_ELEMENT]);
	}

	[FOCUS_NEXT](flag) {

	}
}