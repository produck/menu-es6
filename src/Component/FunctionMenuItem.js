import * as Dom from 'dom';
import { MenuItem, ROW_ELEMENT, TEXT_ELEMENT } from './MenuItem';
import * as VAR from './vars';
import { MENU_ITEM_ICON_BOX_STYLE, Var } from './utils';

export const FOCUS = 0x04, RESET = 0x05, DISABLE = 0x06, LABEL_SPAN = 0x03;

const MENU_ITEM_ROW_STYLE_DEFAULT = {
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

export class FunctionMenuItem extends MenuItem {
	constructor() {
		super();

		const textElement = this[TEXT_ELEMENT];
		const labelSpan = Dom.createElement('span');
		const iconSpan = Dom.createElement('span');

		Dom.setClassName(labelSpan, 'menu-item-label');
		Dom.setClassName(iconSpan, 'menu-item-icon');
		Dom.setStyle(labelSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.setStyle(iconSpan, ICON_SPAN_STYLE);

		Dom.appendChild(textElement, iconSpan);
		Dom.appendChild(textElement, labelSpan);

		this[LABEL_SPAN] = labelSpan;
		labelSpan.innerText = 'Text 4 test';

		const rowElement = this[ROW_ELEMENT];

		Dom.addEventListener(rowElement, 'mouseover', () => {
			rowElement.dispatchEvent(Dom.createEvent('-focus', this));
		});

		this[RESET]();
	}

	[RESET]() {
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_DEFAULT);
		Dom.removeClass(this[ROW_ELEMENT], 'focus');
	}

	[FOCUS]() {
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_FOCUS);
		Dom.addClass(this[ROW_ELEMENT], 'focus');
	}

	[DISABLE]() {
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_DISABLED);
	}
}
