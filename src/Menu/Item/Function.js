import * as Dom from '../../dom';
import * as lang from '../../lang';

import { BaseMenuItem, normalize as normalizeBaseMenuItemOptions } from './Base';
import { Var, VAR, resolveLabelText, FRAGEMENT, MNEMONIC } from '../../utils';

import * as _ from '../../symbol/function';
import * as _MENU from '../../symbol/menu';
import * as _BASE from '../../symbol/base';

const ICON_SPAN_STYLE = {
	'margin-right': '0.5em'
};

export const MENU_ITEM_LABEL_SPAN_STYLE = {
	'flex-grow': '1',
	'padding': `0 ${Var(VAR.SIZE_LG)}`,
};

export class FunctionMenuItem extends BaseMenuItem {
	constructor(menu, options) {
		super(menu);

		const textElement = this[_BASE.TEXT_ELEMENT];
		const labelSpan = Dom.createElement('span');

		if (!lang.isNull(options.icon)) {
			const iconSpan = Dom.createElement('span');

			Dom.addClass(iconSpan, 'menu-item-icon');
			Dom.setStyle(iconSpan, ICON_SPAN_STYLE);
			Dom.appendChild(labelSpan, iconSpan);
			Dom.appendChild(iconSpan, options.icon);
		}

		Dom.addClass(labelSpan, 'menu-item-label');
		Dom.setStyle(labelSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.appendChild(textElement, labelSpan);

		const result = resolveLabelText(options.label, !menu[_MENU.HAS_MNEMONIC]);

		Dom.appendChild(labelSpan, result[FRAGEMENT]);

		this[_.LABEL_SPAN] = labelSpan;
		this[_BASE.LISTEN_ENTER](() => menu[_MENU.FOCUS_ITEM](this));
		this[_.MNEMONIC] = result[MNEMONIC];
	}

	[_.FOCUS]() {
		Dom.addClass(this[_BASE.ROW_ELEMENT], 'focus');
	}

	[_.BLUR]() {
		const rowElement = this[_BASE.ROW_ELEMENT];

		Dom.removeClass(rowElement, 'focus');
	}

	get [_BASE.FOCUSABLE]() {
		return true;
	}

	get [_.EXPANDABLE]() {
		return false;
	}
}

export const normalize = (_options) => {
	const options = lang.assign({
		label: '<NO_LABEL>',
		icon: null
	}, normalizeBaseMenuItemOptions(_options));

	const {
		label: _label = options.label,
		icon: _icon = options.icon
	} = _options;

	if (!lang.isString(_label)) {
		lang.throwError('A menu item label MUST be a string.');
	}

	if (!lang.isNull(_icon) && !lang.instanceOf(_icon, Dom.DOCUMENT_FRAGEMENT)) {
		lang.throwError('A menu item icon MUST be a DocumentFragment.');
	}

	options.label = _label;
	options.icon = _icon;

	return options;
};

export const MENU_ITEM_ICON_BOX_STYLE = {
	position: 'absolute',
	height: '100%',
	width: Var(VAR.SIZE_LG),
	'text-align': 'center'
};