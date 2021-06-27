import * as Dom from 'dom';
import { normalizeMenuOptions } from './normalize';
import { Menu, SpearatorMenuItem, APPEND, ClickableMenuItem, SubmenuMenuItem, OPEN, NEXT, MENU_ELEMENT, CLOSE } from './Component/index';

const container = Dom.createElement('div');

Dom.setStyle(container, { width: 0, height: 0, display: 'block', position: 'fixed' });
Dom.addClass(container, 'menu-scope');
Dom.appendChild(Dom.BODY, container);

const menuStack = window.s = [];

/**
 * @param {Array} options
 * @returns
 */
function createMenu(options) {
	const finalOptions = normalizeMenuOptions(options);
	const menu = new Menu();

	finalOptions.forEach((groupOptions, index) => {
		groupOptions.forEach(options => menu[APPEND](new options.type(menu, options)));
		index !== options.length - 1 && menu[APPEND](new SpearatorMenuItem(menu));
	});

	return menu;
}

function openMenu(options) {
	const menu = createMenu(options);

	menuStack.unshift(menu);
	menu[OPEN]();
	Dom.appendChild(container, menu[MENU_ELEMENT]);
}

function closeMenu() {
	menuStack.shift()[CLOSE]();
}

function selectUp() {
	menuStack[0][NEXT](null, true);
}

function selectDown() {
	menuStack[0][NEXT]();
}

const KEY_MAP_OPERATION = {
	ArrowUp: selectUp,
	ArrowDown: selectDown,
	Escape: closeMenu
};

Dom.addEventListener(Dom.WINDOW, 'mousedown', closeAllMenu);
// Dom.addEventListener(Dom.WINDOW, 'blur', closeAllMenu);
Dom.addEventListener(Dom.WINDOW, 'keydown', event => {
	if (menuStack.length > 0 && event.key in KEY_MAP_OPERATION) {
		KEY_MAP_OPERATION[event.key]();
	}
});

export function isMenuTop(menu) {
	return menuStack[0] === menu;
}

export function closeAllMenu() {
	while (menuStack.length > 0) {
		closeMenu();
	}
}

export function popup(options) {
	openMenu(options);
}

export const MenuItem = {
	Clickable: ClickableMenuItem,
	Submenu: SubmenuMenuItem,
	Spearator: SpearatorMenuItem
};