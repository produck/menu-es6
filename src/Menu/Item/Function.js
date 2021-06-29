import * as Dom from 'dom';
import { BaseMenuItem, normalize as normalizeBaseMenuItemOptions } from './Base';
import { Var, VAR } from '../utils';

import * as _ from '@/symbol/item/function';
import * as _MENU from '@/symbol/menu';
import * as _BASE from '@/symbol/item/base';

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
	display: 'none',
	'margin-right': '0.5em'
};

export const MENU_ITEM_LABEL_SPAN_STYLE = {
	'flex-grow': '1',
	'padding': `0 ${Var(VAR.FUNCTION_ITEM_WHITESPACE)}`,
};

export class FunctionMenuItem extends BaseMenuItem {
	constructor(menu, options) {
		super(menu);

		const textElement = this[_BASE.TEXT_ELEMENT];
		const labelSpan = Dom.createElement('span');
		const iconSpan = Dom.createElement('span');

		Dom.addClass(labelSpan, 'menu-item-label');
		Dom.addClass(iconSpan, 'menu-item-icon');
		Dom.setStyle(labelSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.setStyle(iconSpan, ICON_SPAN_STYLE);
		Dom.appendChild(textElement, iconSpan);
		Dom.appendChild(textElement, labelSpan);

		labelSpan.innerText = options.label;
		Dom.setStyle(this[_BASE.ROW_ELEMENT], MENU_ITEM_ROW_STYLE_DEFAULT);

		this[_.LABEL_SPAN] = labelSpan;
		this[_BASE.LISTEN_ENTER](() => menu[_MENU.FOCUS_ITEM](this));
	}

	[_.FOCUS]() {
		const rowElement = this[_BASE.ROW_ELEMENT];

		Dom.setStyle(rowElement, MENU_ITEM_ROW_STYLE_ON_FOCUS);
		Dom.addClass(rowElement, 'focus');
	}

	[_.BLUR]() {
		const rowElement = this[_BASE.ROW_ELEMENT];

		Dom.setStyle(rowElement, MENU_ITEM_ROW_STYLE_DEFAULT);
		Dom.removeClass(rowElement, 'focus');
	}

	[_.DISABLE]() {
		Dom.setStyle(this[_BASE.ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_DISABLED);
	}
}

export function normalize(_options) {
	const options = Dom.ASSIGN({
		label: '<NO_LABEL>',
		icon: null
	}, normalizeBaseMenuItemOptions(_options));

	const {
		label: _label = options.label,
		icon: _icon = options.icon
	} = _options;

	if (typeof _label !== 'string') {
		throw new Error('A menu item label MUST be a string.');
	}

	options.label = _label;
	options.icon = _icon;

	return options;
}