import * as Dom from 'dom';
import * as lang from 'lang';

import { VAR, Var } from '@/utils';
import { closeAllMenu } from '@/Menu/index';
import { state } from './scope';

import * as _ from '@/symbol/bar';
import * as _BUTTON from '@/symbol/button';
import * as _SCOPE from '@/symbol/menubar-scope';

export const MENU_BAR_STYLE = {
	display: 'flex',
	flex: 1,
	'user-select': 'none',
	height: `${Var(VAR.BAR_HEIGHT)}`,
	'line-height': `${Var(VAR.BAR_HEIGHT)}`
};

export class MenuBar {
	constructor() {
		const container = Dom.createElement('div');

		Dom.addClass(container, 'menu-bar');
		Dom.setStyle(container, MENU_BAR_STYLE);

		this[_.BAR_ELEMENT] = container;
		this[_.BUTTON_LIST] = [];

		Dom.addEventListener(container, 'click', () => this[_.ACTIVE] = !this[_.ACTIVE]);
		Dom.addEventListener(container, 'mousedown', Dom.STOP_PROPAGATION);
		Dom.addEventListener(container, 'mouseup', Dom.STOP_PROPAGATION);
		Dom.addEventListener(container, 'contextmenu', Dom.STOP_AND_PREVENT);
		Dom.addEventListener(container, 'mouseleave', () => {
			if (!this[_.ACTIVE]) {
				this[_.FOCUSING_BUTTON] = null;
			}
		});

		this[_._HAS_MNEMONIC] = false;
		this[_._ACTIVE] = false;
		this[_._FOCUSING_BUTTON] = null;
	}

	get [_.HAS_MNEMONIC]() {
		return this[_._HAS_MNEMONIC];
	}

	set [_.HAS_MNEMONIC](value) {
		this[_._HAS_MNEMONIC] = value;
		this[_.BUTTON_LIST].forEach(button => button[_BUTTON.SET_LABEL]());
		(value ? Dom.addClass : Dom.removeClass)(this[_.BAR_ELEMENT], 'has-mnemonic');
	}

	get [_.ACTIVE]() {
		return this[_._ACTIVE];
	}

	set [_.ACTIVE](value) {
		if (value !== this[_._ACTIVE]) {
			const barElement = this[_.BAR_ELEMENT];

			if (value) {
				Dom.addClass(barElement, 'active');
				state[_SCOPE.SELECTING] = true;

				if (this[_._FOCUSING_BUTTON]) {
					this[_._FOCUSING_BUTTON][_BUTTON.OPEN_MENU]();
				}
			} else {
				Dom.removeClass(barElement, 'active');
				closeAllMenu();
			}

			this[_._ACTIVE] = value;
		}
	}

	get [_.FOCUSING_BUTTON]() {
		return this[_._FOCUSING_BUTTON];
	}

	set [_.FOCUSING_BUTTON](value) {
		const currentButton = this[_.FOCUSING_BUTTON];

		if (value !== currentButton) {
			if (!lang.isNull(currentButton)) {
				currentButton[_BUTTON.BLUR]();
			}

			if (!lang.isNull(value)) {
				value[_BUTTON.FOCUS]();

				if (this[_.ACTIVE]) {
					value[_BUTTON.OPEN_MENU]();
				}
			}
		}

		this[_._FOCUSING_BUTTON] = value;
	}

	[_.APPEND_BUTTON](button) {
		this[_.BUTTON_LIST].push(button);
	}

	/**
	 * Try to find a `next` item then focusing.
	 *
	 * @param {string|null} mnemonic Filtering item by a-z
	 * @param {boolean} reversed Searching direction
	 * @returns The target item found or not.
	 */
	[_.NEXT](mnemonic = null, reversed = false) {
		const sequence = this[_.BUTTON_LIST].slice(0);

		if (reversed) {
			sequence.reverse();
		}

		const focusingIndex = sequence.findIndex(button => button === this[_.FOCUSING_BUTTON]);
		const length = sequence.length;

		for (let index = 0; index < length; index++) {
			const current = sequence[(focusingIndex + index + 1) % length];

			if (lang.isNull(mnemonic) || current[_BUTTON.MNEMONIC] === mnemonic) {
				this[_.FOCUSING_BUTTON] = current;

				return true;
			}
		}

		return false;
	}
}
