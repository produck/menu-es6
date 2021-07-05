import * as Dom from 'dom';
import * as _MENU from '@/symbol/menu';
import { COLLAPSE, EXPANDED_MENU, SUB_MENU_OPITONS } from '@/symbol/submenu';
import { ACTIVE } from '@/symbol/base';
import { MNEMONIC_REG } from '@/utils';

const container = Dom.createElement('div');
const CONTAINER_STYLE = {
	width: 0,
	height: '100%',
	display: 'block',
	position: 'fixed',
	top: 0,
	left: 0
};

Dom.setStyle(container, CONTAINER_STYLE);
Dom.addClass(container, 'menu-scope');
Dom.appendChild(Dom.BODY, container);

export let currentMenu = null;

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
	if (currentMenu !== null) {
		currentMenu[_MENU.CLOSE]();
		currentMenu = null;
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

	while (menu[_MENU.EXPANDING_ITEM] !== null) {
		menu = menu[_MENU.EXPANDING_ITEM][EXPANDED_MENU];
	}

	return menu;
};

const tryCollapse = () => {
	const topMenu = getTopMenu();

	if (topMenu[_MENU.OPENER] !== null) {
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
Dom.addEventListener(Dom.WINDOW, 'keydown', event => {
	const { key } = event;

	if (currentMenu) {
		if (key in KEY_MAP_OPERATION) {
			KEY_MAP_OPERATION[key](event);
		} else if (MNEMONIC_REG.test(key)) {
			const topMenu = getTopMenu();

			if (topMenu[_MENU.NEXT](key.toLowerCase())) {
				topMenu[_MENU.FOCUSING_ITEM][ACTIVE]();
			}
		}
	}
});
