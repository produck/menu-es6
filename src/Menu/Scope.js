import * as Dom from 'dom';
import * as _MENU from '@/symbol/menu';

const container = Dom.createElement('div');

Dom.setStyle(container, { width: 0, height: 0, display: 'block', position: 'fixed' });
Dom.addClass(container, 'menu-scope');
Dom.appendChild(Dom.BODY, container);

const menuStack = [];

export function openMenu(menu) {
	menuStack.unshift(menu);
	menu[_MENU.OPEN]();
	Dom.appendChild(container, menu[_MENU.MENU_ELEMENT]);
}

export function closeMenu(menu = menuStack[1]) {
	while (menuStack[0] !== menu && menuStack.length > 0) {
		menuStack[0][_MENU.CLOSE]();
		menuStack.shift();
	}
}

function selectUp() {
	menuStack[0][_MENU.NEXT](null, true);
}

function selectDown() {
	menuStack[0][_MENU.NEXT]();
}

const KEY_MAP_OPERATION = {
	ArrowUp: selectUp,
	ArrowDown: selectDown,
	Escape: () => menuStack.length === 1 && closeMenu()
};

// Dom.addEventListener(Dom.WINDOW, 'mousedown', closeAllMenu);
// Dom.addEventListener(Dom.WINDOW, 'blur', closeAllMenu);
Dom.addEventListener(Dom.WINDOW, 'keydown', event => {
	if (menuStack.length > 0 && event.key in KEY_MAP_OPERATION) {
		KEY_MAP_OPERATION[event.key]();
	}
});

export function setTop(menu) {
	while (menuStack[0] !== menu) {
		closeMenu();
	}
}

export function isMenuTop(menu) {
	return menuStack[0] === menu;
}

export function closeAllMenu() {
	closeMenu(null);
}
