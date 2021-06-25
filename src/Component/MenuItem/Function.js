import * as Dom from 'dom';
import { BaseMenuItem, ROW_ELEMENT, TEXT_ELEMENT } from './Base';
import * as VAR from '../vars';
import { Var } from '../utils';

export const
	FOCUS = 'f',
	RESET = 'r',
	DISABLE = 'd',
	LABEL_SPAN = 'l',
	FOCUSING = 'F',
	LISTEN_ENTER = 'L';

const MENU_ITEM_ROW_STYLE_DEFAULT = {
	'cursor': 'pointer',
	color: Var(VAR.FRONTGROUND_COLOR),
	'background-color': 'transparent'
};

const MENU_ITEM_ROW_STYLE_ON_FOCUS = {
	color: Var(VAR.ACTIVE_FRONTGROUND_COLOR),
	'background-color': Var(VAR.ACTIVE_BACKGROUND_COLOR)
};

const MENU_ITEM_ROW_STYLE_ON_DISABLED = {
	color: Var(VAR.DISABLED_FRONTGROUND_COLOR),
	'background-color': 'transparent'
};

const MENU_ITEM_TEXT_STYLE = {
	'height': Var(VAR.FUNCTION_ITEM_HEIGHT)
};

const ICON_SPAN_STYLE = {
	display: 'none'
};

export const MENU_ITEM_LABEL_SPAN_STYLE = {
	'flex-grow': '1',
	'padding': `0 ${Var(VAR.FUNCTION_ITEM_WHITESPACE)}`,
};

export class FunctionMenuItem extends BaseMenuItem {
	constructor(label, icon) {
		super();

		const textElement = this[TEXT_ELEMENT];
		const labelSpan = Dom.createElement('span');
		const iconSpan = Dom.createElement('span');

		Dom.addClass(labelSpan, 'menu-item-label');
		Dom.addClass(iconSpan, 'menu-item-icon');
		Dom.setStyle(labelSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.setStyle(iconSpan, ICON_SPAN_STYLE);

		Dom.appendChild(textElement, iconSpan);
		Dom.appendChild(textElement, labelSpan);

		this[LABEL_SPAN] = labelSpan;
		this[FOCUSING] = false;

		labelSpan.innerText = 'Text 4 test';

		const rowElement = this[ROW_ELEMENT];

		Dom.setStyle(rowElement, MENU_ITEM_ROW_STYLE_DEFAULT);

		this[LISTEN_ENTER](() => {
			Dom.dispatchEvent(rowElement, Dom.createEvent('-focus', this));
		});
	}

	[LISTEN_ENTER](listener) {
		Dom.addEventListener(this[ROW_ELEMENT], 'mouseenter', listener);
	}

	[RESET]() {
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_DEFAULT);
		Dom.removeClass(this[ROW_ELEMENT], 'focus');
		this[FOCUSING] = false;
	}

	[FOCUS]() {
		if (this[FOCUSING]) {
			return;
		}

		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_FOCUS);
		Dom.addClass(this[ROW_ELEMENT], 'focus');
		this[FOCUSING] = true;
	}

	[DISABLE]() {
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_DISABLED);
	}
}
