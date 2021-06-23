
const
KEY_CONTROL = 0x010000,
KEY_SHFIFT = 0x020000,
KEY_ALT = 0x030000;

addEventListener(WINDOW, 'keydown', function findThenClick() {
	for (const menuName in menuStore) {
		const menu = menuStore[menuName];

		if (!menu[MENU_ENABLED]) {
			continue;
		}

		const targetItem = menu.itemList
			.filter(filterClickableItem)
			.find(item => item.accelerator === downing);
	}
});

addEventListener(WINDOW, 'keyup', function releaseKey() {

});