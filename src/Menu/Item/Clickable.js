import * as Dom from '../../dom';
import * as lang from '../../lang';

import {
	FunctionMenuItem,
	MENU_ITEM_LABEL_SPAN_STYLE,
	normalize as normalizeFunctionMenuItemOptions,
	MENU_ITEM_ICON_BOX_STYLE
} from './Function';

import * as _BASE from '../../symbol/base';
import * as _ from '../../symbol/clickable';
import * as _FUNCTION from '../../symbol/function';
import { closeAllMenu } from '../scope';

const CHECKING_POSITION_STYLE = { top: 0, left: 0 };

const MENU_ITEM_ROW_STYLE_ON_DISABLED = {
	opacity: 0.4,
	cursor: 'default'
};

const joinAcceleratorElement = acceleratorBarList => {
	const lastBarIndex = acceleratorBarList.length - 1;
	const fragement = Dom.createFragement();

	acceleratorBarList.forEach((bar, index) => {
		Dom.appendChild(fragement, bar);
		index !== lastBarIndex && Dom.appendChild(fragement, Dom.createTextNode(' '));
	});

	return fragement;
};

export class ClickableMenuItem extends FunctionMenuItem {
	constructor(menu, options) {
		super(menu, options);

		const rowElement = this[_BASE.ROW_ELEMENT];
		const textElement = this[_BASE.TEXT_ELEMENT];
		const acceleratorSpan = Dom.createElement('span');
		const checkboxSpan = Dom.createElement('span');

		Dom.addClass(acceleratorSpan, 'menu-item-accelerator');
		Dom.addClass(checkboxSpan, 'menu-item-checkbox');

		Dom.setStyle(acceleratorSpan, MENU_ITEM_LABEL_SPAN_STYLE, { 'text-align': 'right' });
		Dom.setStyle(checkboxSpan, MENU_ITEM_ICON_BOX_STYLE, CHECKING_POSITION_STYLE);
		Dom.appendChild(textElement, acceleratorSpan);
		Dom.appendChild(textElement, checkboxSpan);
		Dom.appendChild(acceleratorSpan, joinAcceleratorElement(options.accelerator));

		Dom.addEventListener(rowElement, 'mouseup', () => this[_.CLICK]());
		Dom.addEventListener(rowElement, 'contextmenu', Dom.STOP_AND_PREVENT);

		this[_.CLICK_LISTENER] = options.click;
		this[_.KEY_ENTER] = event => event.key === 'Enter' && this[_.CLICK]();

		const disabled = this[_.DISABLED] = options.isDisabled;

		if (disabled) {
			Dom.setStyle(this[_BASE.ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_DISABLED);
			Dom.addClass(rowElement, 'disabled');
		}

		if (options.isChecked) {
			Dom.addClass(rowElement, 'checked');
		}
	}

	get [_BASE.FOCUSABLE]() {
		return !this[_.DISABLED];
	}

	[_FUNCTION.FOCUS]() {
		if (!this[_.DISABLED]) {
			super[_FUNCTION.FOCUS]();
		}
	}

	[_FUNCTION.BLUR]() {
		if (!this[_.DISABLED]) {
			super[_FUNCTION.BLUR]();
		}
	}

	[_.CLICK]() {
		this[_.CLICK_LISTENER]();
		closeAllMenu();
	}

	[_BASE.ACTIVE]() {
		this[_.CLICK]();
	}
}

const DEFAULT_CLICK_FN = () => console.warn(undefined);

export const  normalize = (_options) => {
	const options = lang.assign({
		click: DEFAULT_CLICK_FN,
		isChecked: false,
		isDisabled: false,
		accelerator: []
	}, normalizeFunctionMenuItemOptions(_options));

	const {
		click: _click = options.click,
		isChecked: _isChecked = options.isChecked,
		isDisabled: _isDisabled = options.isDisabled,
		accelerator: _accelerator = options.accelerator
	} = _options;

	if (!lang.isFunction(_click)) {
		lang.throwError('A `.click()` of clickable item MUST be a function.');
	}

	if (!lang.isBoolean(_isChecked)) {
		lang.throwError('A `.isChecked` MUST be a `boolean`.');
	}

	if (!lang.isBoolean(_isDisabled)) {
		lang.throwError('A `.isDisabled` MUST be a `boolean`.');
	}

	if (!lang.isArray(_accelerator)) {
		lang.throwError('A `.accelerator` MUST be an array of string.');
	}

	options.accelerator = _accelerator.map(_bar => {
		if (!lang.instanceOf(_bar, Dom.DOCUMENT_FRAGEMENT)) {
			lang.throwError('A `.accelerator` MUST be a `DocumentFragement`.');
		}

		return _bar;
	});

	options.click = _click;
	options.isChecked = _isChecked;
	options.isDisabled = _isDisabled;

	return options;
};