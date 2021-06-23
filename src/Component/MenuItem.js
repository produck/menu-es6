import { createElement, setClassName, setStyle } from './dom';

export const ROW_ELEMENT = 0x00, TEXT_ELEMENT = 0x01;

const MENU_ITEM_ROW_STYLE = {
	display: 'block',
	position: 'static',
	'box-sizing': 'border-box',
	// 'height': Var(VAR.FUNCTION_ITEM_HEIGHT),
	// 'padding-left': Var(VAR.FUNCTION_ITEM_WHITESPACE),
	// 'padding-right': Var(VAR.FUNCTION_ITEM_WHITESPACE)
};

const MENU_ITEM_TEXT_STYLE = {
	position: 'relative',
	display: 'flex'
};

export class MenuItem {
	constructor() {
		const rowElement = createElement('li');
		const textElement = createElement('a');

		rowElement.appendChild(textElement);
		setStyle(rowElement, MENU_ITEM_ROW_STYLE);
		setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		setClassName(rowElement, 'menu-item');

		this[ROW_ELEMENT] = rowElement;
		this[TEXT_ELEMENT] = textElement;
	}
}
