import '../theme/default.css';

import { Menu, ClickableMenuItem, SubmenuMenuItem, SpearatorMenuItem, SHOW, APPEND, MENU_ELEMENT } from '../src/Component/index';

window.addEventListener('load', function () {
	const menu = window.m = new Menu();
	const menu2 = new Menu();

	/**
	 * level 1
	 */
	const click3 = new ClickableMenuItem();
	const split1 = new SpearatorMenuItem();
	const click4 = new ClickableMenuItem();

	menu2[APPEND](click3);
	menu2[APPEND](split1);
	menu2[APPEND](click4);

	/**
	 * level root
	 */
	const click = new ClickableMenuItem();
	const sub = new SubmenuMenuItem(menu2);
	const click2 = new ClickableMenuItem();
	const split = new SpearatorMenuItem();

	menu[APPEND](click);
	menu[APPEND](sub);
	menu[APPEND](split);
	menu[APPEND](click2);

	menu[MENU_ELEMENT].style.minWidth = '200px';

	window.addEventListener('contextmenu', event => {
		event.preventDefault();
		menu[SHOW]();
		console.log(menu);
	});
});