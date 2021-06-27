import * as Dom from 'dom';
import { normalizeMenuOptions } from './normalize';
import { Menu, SpearatorMenuItem, APPEND, ClickableMenuItem, SubmenuMenuItem } from './Component/index';

const container = Dom.createElement('div');

Dom.setStyle(container, { width: 0, height: 0, display: 'block' });
Dom.addClass(container, 'menu-scope');
Dom.appendChild(Dom.BODY, container);

const
	CONSTRUCTOR = 'C';

const menuStack = [];

/**
 * @param {Array} options
 * @returns
 */
function createMenu(options) {
	const finalOptions = normalizeMenuOptions(options);
	const menu = new Menu();
	const appendItem = options => menu[APPEND](new options.type(options));

	finalOptions.forEach((groupOptions, index) => {
		groupOptions.forEach(itemOptions => {
			typeof itemOptions === 'function'
				? itemOptions().map(options => appendItem(options))
				: appendItem(itemOptions);
		});

		index !== options.length - 1 && menu[APPEND](new SpearatorMenuItem());
	});

	return menu;
}

function openMenu(options) {
	const menu = createMenu(options);

	menuStack.unshift(menu);
}

function closeMenu() {
	menuStack.shift().close();
}

function selectUp() {
	menuStack[0].next();
}

function selectDown() {
	menuStack[0].next(null, true);
}

function closeAllMenu() {
	menuStack.splice(0, menuStack.length).forEach(menu => menu.close());
}

const KEY_MAP_OPERATION = {
	ArrowUp: selectUp,
	ArrowDown: selectDown,
	ArrowLeft: closeMenu,
	ArrowRight: openMenu
};

Dom.addEventListener(Dom.WINDOW, 'mousedown', closeAllMenu);
Dom.addEventListener(Dom.WINDOW, 'keydown',
	event => menuStack.length && KEY_MAP_OPERATION[event.key]());

export function popup(options) {
	openMenu(options);
}

export const MenuItem = {
	Clickable: ClickableMenuItem,
	Submenu: SubmenuMenuItem
};