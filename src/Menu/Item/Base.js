import * as Dom from 'dom';
import { AbstractMenu } from '../Abstract';
import * as _ from '@/symbol/base';

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
		if (!Dom.instanceOf(menu, AbstractMenu)) {
			throw new Error('A menu required.');
		}

		const rowElement = Dom.createElement('li');
		const textElement = Dom.createElement('a');

		Dom.appendChild(rowElement, textElement);
		Dom.setStyle(rowElement, MENU_ITEM_ROW_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.addClass(rowElement, 'menu-item');

		this[_.ROW_ELEMENT] = rowElement;
		this[_.TEXT_ELEMENT] = textElement;
		this[_.MENU] = menu;
	}

	[_.LISTEN_ENTER](listener) {
		Dom.addEventListener(this[_.ROW_ELEMENT], 'mouseenter', listener);
	}

	[_.ACTIVE]() {}

	get [_.FOCUSABLE]() {
		return false;
	}
}

export function normalize(_options) {
	const options = {
		id: null
	};

	const {
		id: _id = options.id,
		type: _type
	} = _options;

	options.id = _id;
	options.type = _type;

	return options;
}
