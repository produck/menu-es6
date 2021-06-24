import * as Dom from 'dom';

export const ROW_ELEMENT = 0x00, TEXT_ELEMENT = 0x01;

const MENU_ITEM_ROW_STYLE = {
	display: 'block',
	position: 'static',
	'box-sizing': 'border-box',
	'border-width': '1px',
	'border-color': 'transparent',
	'cursor': 'pointer'
};

const MENU_ITEM_TEXT_STYLE = {
	position: 'relative',
	display: 'flex'
};

export class MenuItem {
	constructor() {
		const rowElement = Dom.createElement('li');
		const textElement = Dom.createElement('a');

		Dom.appendChild(rowElement, textElement);
		Dom.setStyle(rowElement, MENU_ITEM_ROW_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.setClassName(rowElement, 'menu-item');

		this[ROW_ELEMENT] = rowElement;
		this[TEXT_ELEMENT] = textElement;
	}
}
