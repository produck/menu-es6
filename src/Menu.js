import * as Dom from './Element/dom';
import { MENU_CONTEXT, DOCUMENT, MENU_ENABLED, MENU_SHOWING } from './symbol';
import * as Manager from './Manager';
import * as MenuItem from './MenuItem';

export function Menu(name, options) {
	const itemList = [];
	const ctx = {
		[MENU_CONTEXT]: null,
		[MENU_ENABLED]: true,
		[MENU_SHOWING]: false
	};

	const menuElement = DOCUMENT.createElement('ul');

	const menu = Object.seal({
		get name() {
			return name;
		},
		get enabled() {
			return ctx[MENU_ENABLED];
		},
		get showing() {
			return menuElement.parentElement !== null;
		},
		get itemList() {
			return itemList.filter(item => item !== MenuItem.SEPARATOR_MENU_ITEM);
		},
		set context(value) {
			ctx[MENU_CONTEXT] = value;
		},
		get context() {
			return ctx[MENU_CONTEXT];
		},
		popup(position = { x: 0, y: 0 }) {
			if (!ctx[MENU_ENABLED]) {
				return;
			}

			ctx[MENU_SHOWING] = true;
		},
		close() {
			ctx[MENU_SHOWING] = false;

		},
		enable() {

		},
		disable() {

		},
		build() {
			const groupOptionsList = options;

			itemList.length = 0;
			Dom.removeAllChild(menuElement);

			groupOptionsList.forEach(groupOptions => {
				const itemOptionsList = [];

				groupOptions.reduce((list, itemGeneratorOptions) => {
					if (typeof itemGeneratorOptions === 'function') {
						const itemOptionsList = itemGeneratorOptions(ctx[MENU_CONTEXT]);
						const finalOptionsList = itemOptionsList.map(options => MenuItem.normalize(options));

						list.push(...finalOptionsList);
					} else {
						list.push(itemGeneratorOptions);
					}
				});

				itemOptionsList.forEach(itemOptions => {
					//TODO build item
					itemList.push();
				});

				itemList.push(MenuItem.SEPARATOR_MENU_ITEM);
			});

			itemList.pop();
		}
	});

	Manager.put(name, menu);

	return menu;
}