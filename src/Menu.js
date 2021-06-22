import * as Manager from './Manager';

const CONTEXT = 0, ENABLED = 1, SHOWING = 2;

function MenuItem() {

}

function ClickableMenuItem(options) {

}

function SubmenuMenuItem(options) {

}

const SEPARATOR_MENU_ITEM = {};

function normalizeItemOptions() {

}

export function Menu(name, options) {
	const itemList = [];
	const ctx = {
		[CONTEXT]: null,
		[ENABLED]: true,
		[SHOWING]: false
	};

	const menu = Object.seal({
		get name() {
			return name;
		},
		get enabled() {
			return ctx[ENABLED];
		},
		get itemList() {
			return itemList.filter(item => item !== SEPARATOR_MENU_ITEM);
		},
		set context(value) {
			ctx[CONTEXT] = value;
		},
		get context() {
			return ctx[CONTEXT];
		},
		popup(position = { x: 0, y: 0 }) {
			if (!ctx[ENABLED]) {
				return;
			}
		},
		close() {

		},
		enable() {

		},
		disable() {

		},
		build() {
			const groupOptionsList = options;

			itemList.length = 0;

			groupOptionsList.forEach(groupOptions => {
				const itemOptionsList = [];

				groupOptions.reduce((list, itemGeneratorOptions) => {
					if (typeof itemGeneratorOptions === 'function') {
						const itemOptionsList = itemGeneratorOptions(ctx[CONTEXT]);
						const finalOptionsList = itemOptionsList.map(options => normalizeItemOptions(options));

						list.push(...finalOptionsList);
					} else {
						const finalOptions = normalizeItemOptions(itemGeneratorOptions);

						list.push(finalOptions);
					}
				});

				itemOptionsList.forEach(itemOptions => {
					itemList.push();
				});

				itemList.push(SEPARATOR_MENU_ITEM);
			});

			itemList.pop();
		}
	});

	Manager.put(name, menu);

	return menu;
}