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


const MENU_ITEM_TEXT_STYLE = {
	'height': Var(VAR.FUNCTION_ITEM_HEIGHT)
};

const ICON_SPAN_STYLE = {
	'margin-right': '0.5em'
};

export const MENU_ITEM_LABEL_SPAN_STYLE = {
	'flex-grow': '1',
	'padding': `0 ${Var(VAR.FUNCTION_ITEM_WHITESPACE)}`,
};

const LABEL_REG = /^([^&]*)(&[a-z]|&&)?([^&]*)$/i;
const FRAGEMENT = 'n', FLAG = 'f';

function resolveLabelText(text, noFlag = false) {
	const fragement = Dom.createFragement();
	const result = { [FRAGEMENT]: fragement, [FLAG]: null };
	const [, left, flag, right] = text.match(LABEL_REG);

	if (flag === undefined) {
		Dom.appendChild(fragement, Dom.createTextNode(left));
	} else if (flag === '&&') {
		Dom.appendChild(fragement, Dom.createTextNode([left, '&', right].join('')));
	} else if (noFlag) {
		Dom.appendChild(fragement, Dom.createTextNode([left, flag[1], right].join('')));
	} else  {
		const u = Dom.createElement('u');

		u.textContent = flag[1];
		result[FLAG] = flag[1].toLowerCase();
		Dom.appendChild(fragement, Dom.createTextNode(left));
		Dom.appendChild(fragement, u);
		Dom.appendChild(fragement, Dom.createTextNode(right));
	}

	return result;
}

export class FunctionMenuItem extends BaseMenuItem {
	constructor(menu, options) {
		super(menu);

		const textElement = this[_BASE.TEXT_ELEMENT];
		const labelSpan = Dom.createElement('span');

		if (options.icon !== null) {
			const iconSpan = Dom.createElement('span');

			Dom.addClass(iconSpan, 'menu-item-icon');
			Dom.setStyle(iconSpan, ICON_SPAN_STYLE);
			Dom.appendChild(labelSpan, iconSpan);
			Dom.appendChild(iconSpan, options.icon);
		}

		Dom.addClass(labelSpan, 'menu-item-label');
		Dom.setStyle(labelSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.appendChild(textElement, labelSpan);

		const result = resolveLabelText(options.label);

		Dom.appendChild(labelSpan, result[FRAGEMENT]);
		Dom.setStyle(this[_BASE.ROW_ELEMENT], MENU_ITEM_ROW_STYLE_DEFAULT);

		this[_.LABEL_SPAN] = labelSpan;
		this[_BASE.LISTEN_ENTER](() => menu[_MENU.FOCUS_ITEM](this));
		this[_.FLAG] = result[FLAG];
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

	get [_BASE.FOCUSABLE]() {
		return true;
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

	if (_icon !== null && !Dom.instanceOf(_icon, DocumentFragment)) {
		throw new Error('A menu item icon MUST be a DocumentFragment.');
	}

	options.label = _label;
	options.icon = _icon;

	return options;
}