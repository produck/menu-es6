import { WINDOW, MENU_ENABLED, ITEM_CLICKABLE } from './symbol';
import { addEventListener } from './Element/dom';

const menuStore = {};

let downing = 0x000000;

function filterClickableItem(item) {
	return item[ITEM_CLICKABLE] = true;
}

export function put(name, menu) {
	if (name in menuStore) {
		throw new Error(`Repeat menu name "${name}".`);
	}

	menuStore[name] = menu;
}

export function get(name) {
	return menuStore[name] || null;
}

export function popup(with) {

}
