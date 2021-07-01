import * as Dom from 'dom';
import { popup, closeAllMenu } from '@/Menu/index';

import * as _B from '@/symbol/bar';
import * as _N from '@/symbol/button';

import { MENU_BAR_STYLE } from './style';
import { normalize } from './normalize';

const CLASS_FOCUSED = 'focused';

class MenuBarButton {
	constructor(menuBar, options) {
		this[_N.MENU_BAR] = menuBar;
		this[_N.MENU_OPTIONS] = options.menu;

		const outerElement = this[_N.OUTER_ELEMENT] = Dom.createElement('div');
		const innerElement = this[_N.INNER_ELEMENT] = Dom.createElement('div');

		Dom.addClass(outerElement, 'menu-bar-button');
		Dom.addClass(innerElement, 'menu-bar-button-title');
		Dom.appendChild(outerElement, innerElement);

		innerElement.innerText = options.title;

		const focusThis = () => this[_N.MENU_BAR][_B.FOCUS_BUTTON](this);

		Dom.addEventListener(innerElement, 'mouseenter', focusThis);
	}

	[_N.FOCUS]() {
		Dom.addClass(this[_N.OUTER_ELEMENT], CLASS_FOCUSED);
	}

	[_N.BLUR]() {
		Dom.removeClass(this[_N.OUTER_ELEMENT], CLASS_FOCUSED);
	}

	[_N.OPEN_MENU]() {
		closeAllMenu();

		const rect = Dom.getRect(this[_N.OUTER_ELEMENT]);

		popup(this[_N.MENU_OPTIONS], { x: rect.left, y: rect.bottom });
	}
}

let containerElement = null;
/**
 * @type {MenuBar}
 */
let currentMenuBar = null;

class MenuBar {
	constructor(hasMnemonic) {
		const container = Dom.createElement('div');

		Dom.addClass(container, 'menu-bar');
		Dom.setStyle(container, MENU_BAR_STYLE);

		this[_B.ACTIVE] = false;
		this[_B.BAR_ELEMENT] = container;
		this[_B.BUTTON_LIST] = [];
		this[_B.HAS_MNEMONIC] = hasMnemonic;
		this[_B.FOCUSING_BUTTON] = null;

		const toggleActive = () => {
			this[_B.ACTIVE] = !this[_B.ACTIVE];
			this[_B.FOCUS_BUTTON]();
		};

		Dom.addEventListener(container, 'click', toggleActive);
	}

	[_B.FOCUS_BUTTON](button = this[_B.FOCUSING_BUTTON]) {
		closeAllMenu();
		this[_B.FOCUSING_BUTTON] && this[_B.FOCUSING_BUTTON][_N.BLUR]();
		button && button[_N.FOCUS]();
		this[_B.FOCUSING_BUTTON] = button;
		this[_B.ACTIVE] && button[_N.OPEN_MENU]();
	}

	[_B.APPEND_BUTTON](button) {
		this[_B.BUTTON_LIST].push(button);
	}
}

export const mount = (element) => {
	containerElement = element;

	if (currentMenuBar) {
		Dom.removeAllChild(element);
		Dom.appendChild(element, currentMenuBar[_B.BAR_ELEMENT]);
	}
};

export const setMenuBar = (options, hasMnemonic = false) => {
	const finalOptions = normalize(options);
	const menuBar = currentMenuBar = new MenuBar(hasMnemonic);
	const fragement = Dom.createFragement();

	finalOptions.forEach(buttonOptions => {
		const button = new MenuBarButton(menuBar, buttonOptions);

		menuBar[_B.APPEND_BUTTON](button);
		Dom.appendChild(fragement, button[_N.OUTER_ELEMENT]);
	});

	Dom.appendChild(menuBar[_B.BAR_ELEMENT], fragement);

	if (containerElement !== null) {
		Dom.removeAllChild(containerElement);
		Dom.appendChild(containerElement, menuBar[_B.BAR_ELEMENT]);
	}
};
