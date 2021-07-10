import * as Dom from '../dom';
import * as lang from '../lang';

import { MNEMONIC_REG, Var, VAR } from '../utils';

import * as _MENU from '../symbol/menu';
import { ACTIVE } from '../symbol/base';
import { COLLAPSE, EXPANDED_MENU, SUB_MENU_OPITONS } from '../symbol/submenu';
import { EXPANDABLE } from '../symbol/function';

const container = Dom.createElement('div');
const CONTAINER_STYLE = {
	top: 0,
	left: 0,
	width: 0,
	height: '100%',
	display: 'block',
	position: 'fixed',
	'font-size': Var(VAR.SIZE_MD)
};

Dom.setStyle(container, CONTAINER_STYLE);
Dom.addClass(container, 'menu-scope');
Dom.appendChild(Dom.BODY, container);

let currentMenu = null;

export const setCurrentMenu = (menu, blocking = false) => {
	closeAllMenu();
	currentMenu = menu;

	if (blocking) {
		Dom.setStyle(container, { width: '100%' });
	}
};

export const appendMenu = (menu) => {
	Dom.appendChild(container, menu[_MENU.MENU_ELEMENT]);
	menu[_MENU.OPEN]();
};

export const closeAllMenu = () => {
	if (!lang.isNull(currentMenu)) {
		currentMenu[_MENU.CLOSE]();
		currentMenu = null;
		expandable = expanding = null;
		Dom.setStyle(container, { width: 0 });
	}
};

const selectUp = () => {
	getTopMenu()[_MENU.NEXT](null, true);
};

const selectDown = () => {
	getTopMenu()[_MENU.NEXT]();
};

const getTopMenu = () => {
	let menu = currentMenu;

	while (!lang.isNull(menu[_MENU.EXPANDING_ITEM])) {
		menu = menu[_MENU.EXPANDING_ITEM][EXPANDED_MENU];
	}

	return menu;
};

const tryCollapse = () => {
	const topMenu = getTopMenu();

	if (!lang.isNull(topMenu[_MENU.OPENER])) {
		topMenu[_MENU.OPENER][COLLAPSE]();

		return true;
	}

	return false;
};

const tryExpand = () => {
	const topMenu = getTopMenu();
	const focusingItem = topMenu[_MENU.FOCUSING_ITEM];

	if (focusingItem && focusingItem[SUB_MENU_OPITONS]) {
		topMenu[_MENU.EXPAND_ITEM]();
		selectDown();
	}
};

const tryActive = () => {
	const topMenu = getTopMenu();
	const focusingItem = topMenu[_MENU.FOCUSING_ITEM];

	focusingItem && focusingItem[ACTIVE]();
};

const KEY_MAP_OPERATION = {
	ArrowUp: selectUp,
	ArrowDown: selectDown,
	ArrowLeft: tryCollapse,
	ArrowRight: tryExpand,
	Escape: () => tryCollapse() || closeAllMenu(),
	Enter: tryActive
};

Dom.addEventListener(Dom.WINDOW, 'mousedown', closeAllMenu);
Dom.addEventListener(Dom.WINDOW, 'blur', closeAllMenu);

let expanding = null, expandable = null;

export const current = Object.freeze({
	get expanding() {
		return expanding;
	},
	get expandable() {
		return expandable;
	},
	get closed() {
		return lang.isNull(currentMenu);
	},
	next() {
		if (currentMenu) {
			currentMenu[_MENU.NEXT]();
		}
	}
});

Dom.addEventListener(Dom.WINDOW, 'keydown', event => {
	const { key } = event;

	if (currentMenu) {
		const topMenu = getTopMenu();

		expanding = !lang.isNull(currentMenu[_MENU.EXPANDING_ITEM]);

		expandable = topMenu[_MENU.FOCUSING_ITEM]
			? topMenu[_MENU.FOCUSING_ITEM][EXPANDABLE]
			: false;

		if (key in KEY_MAP_OPERATION) {
			KEY_MAP_OPERATION[key](event);
		} else if (MNEMONIC_REG.test(key)) {

			if (topMenu[_MENU.NEXT](lang.toLowerCase(key))) {
				topMenu[_MENU.FOCUSING_ITEM][ACTIVE]();
			}
		}
	}
});
