import * as Dom from 'dom';
import { FunctionMenuItem, MENU_ITEM_LABEL_SPAN_STYLE, normalize as normalizeFunctionMenuItemOptions } from './Function';
import { MENU_ITEM_ICON_BOX_STYLE, VAR, Var } from '../utils';

import { closeAllMenu } from '../Scope';
import * as _BASE from '@/symbol/item/base';
import * as _ from '@/symbol/item/clickable';
import * as _FUNCTION from '@/symbol/item/function';

const CHECKING_POSITION_STYLE = { top: 0, left: 0 };

const MENU_ITEM_ROW_STYLE_ON_DISABLED = {
	color: Var(VAR.DISABLED_FRONTGROUND_COLOR),
	'background-color': 'transparent',
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

		Dom.addEventListener(rowElement, 'mouseup', event => {
			Dom.STOP_AND_PREVENT(event);
			this[_.CLICK]();
		});

		Dom.addEventListener(rowElement, 'contextmenu', Dom.STOP_AND_PREVENT);

		this[_.CLICK_LISTENER] = options.click;
		this[_.KEY_ENTER] = event => event.key === 'Enter' && this[_.CLICK]();

		const disabled = this[_.DISABLED] = options.isDisabled();

		if (disabled) {
			Dom.setStyle(this[_BASE.ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_DISABLED);
			Dom.addClass(rowElement, 'disabled');
		}

		options.isChecked() && Dom.addClass(rowElement, 'checked');
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
		Dom.REQUEST_ANIMATION_FRAME(closeAllMenu);
		this[_.CLICK_LISTENER]();
	}

	[_BASE.ACTIVE]() {
		this[_.CLICK]();
	}
}

const DEFAULT_CLICK_FN = () => console.warn('Undefined click');
const FALSE_GETTER = () => false;
const TRUE_GETTER = () => true;

const isFunction = any => typeof any === 'function';
const isBoolean = any => typeof any === 'boolean';
const isArray = any => Array.isArray(any);

export function normalize(_options) {
	const options = Dom.ASSIGN({
		click: DEFAULT_CLICK_FN,
		isChecked: FALSE_GETTER,
		isDisabled: FALSE_GETTER,
		accelerator: []
	}, normalizeFunctionMenuItemOptions(_options));

	const {
		click: _click = options.click,
		isChecked: _isChecked = options.isChecked,
		isDisabled: _isDisabled = options.isDisabled,
		accelerator: _accelerator = options.accelerator
	} = _options;

	if (!isFunction(_click)) {
		throw new Error('A `.click()` of clickable item MUST be a function.');
	}

	if (!isFunction(_isChecked) && !isBoolean(_isChecked)) {
		throw new Error('A `.isChecked` MUST be `() => boolean` or `boolean`.');
	}

	if (!isFunction(_isDisabled) && !isBoolean(_isDisabled)) {
		throw new Error('A `.isChecked` MUST be `() => boolean` or `boolean`.');
	}

	if (!isArray(_accelerator)) {
		throw new Error('A `.accelerator` MUST be an array of string.');
	}

	options.click = _click;
	options.accelerator = _accelerator.map(_bar => {
		if (!Dom.instanceOf(_bar, DocumentFragment)) {
			throw new Error('A `.accelerator` MUST be a `DocumentFragement`.');
		}

		return _bar;
	});

	options.isChecked = isFunction(_isChecked)
		? _isChecked
		: _isChecked ? TRUE_GETTER : FALSE_GETTER;

	options.isDisabled = isFunction(_isDisabled)
		? _isDisabled
		: _isDisabled ? TRUE_GETTER : FALSE_GETTER;

	return options;
}