import { createElement, setClassName, setStyle } from './dom';
import { MenuItem, ROW_ELEMENT } from './MenuItem';
import * as VAR from './vars';
import { Var } from './utils';

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

export const MENU_ITEM_LABEL_SPAN_STYLE = {
	'padding-left': Var(VAR.FUNCTION_ITEM_WHITESPACE),
	'padding-right': Var(VAR.FUNCTION_ITEM_WHITESPACE)
};

export class FunctionMenuItem extends MenuItem {
	constructor() {
		super();

		const labelSpan = createElement('span');

		setClassName(labelSpan, 'menu-item-label');
		setStyle(labelSpan, MENU_ITEM_LABEL_SPAN_STYLE);

		this[LABEL_SPAN] = labelSpan;

		addEventListener(this[ROW_ELEMENT], 'mouseover', () => this[FOCUS]());
		addEventListener(this[ROW_ELEMENT], 'mouseout', () => this[RESET]());

		this[RESET]();
	}

	[RESET]() {
		setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_DEFAULT);
	}

	[FOCUS]() {
		setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_FOCUS);
	}

	[DISABLE]() {
		setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_DISABLED);
	}
}
