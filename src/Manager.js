import { WINDOW, MENU_GROUP_LIST } from './symbol';
import { addEventListener } from './utils';

const
	KEY_CONTROL = 0x010000,
	KEY_SHFIFT = 0x020000,
	KEY_ALT = 0x030000;

const menuStore = {};

let downing = 0x000000;

addEventListener(WINDOW, 'keydown', function findAndClick() {
	for (const menuName in menuStore) {
		const menu = menuStore[menuName];
		const groupList = menu[MENU_GROUP_LIST];

		groupList.forEach(group => {
			group.forEach(item => {
				item
			});
		});
	}
});

export function put() {

}

export function get() {

}
