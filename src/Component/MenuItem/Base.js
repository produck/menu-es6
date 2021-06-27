import * as Dom from 'dom';
import { Menu } from '../Menu';

export const
	ROW_ELEMENT = 'e',
	TEXT_ELEMENT = 't',
	MENU = '$',
	LISTEN_ENTER = 'L';

const MENU_ITEM_ROW_STYLE = {
	display: 'block',
	position: 'static',
	'border': '1px solid transparent'
};

const MENU_ITEM_TEXT_STYLE = {
	position: 'relative',
	display: 'flex'
};

export class BaseMenuItem {
	constructor(menu) {
		if (!(menu instanceof Menu)) {
			throw new Error('A menu required.');
		}

		const rowElement = Dom.createElement('li');
		const textElement = Dom.createElement('a');

		Dom.appendChild(rowElement, textElement);
		Dom.setStyle(rowElement, MENU_ITEM_ROW_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.addClass(rowElement, 'menu-item');

		this[ROW_ELEMENT] = rowElement;
		this[TEXT_ELEMENT] = textElement;
		this[MENU] = menu;
	}

	[LISTEN_ENTER](listener) {
		Dom.addEventListener(this[ROW_ELEMENT], 'mouseenter', listener);
	}
}
