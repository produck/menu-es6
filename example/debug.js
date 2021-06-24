import '../theme/default.css';

import { Menu, ClickableMenuItem, SubmenuMenuItem, SpearatorMenuItem, SHOW, APPEND, MENU_ELEMENT } from '../src/Component/index';

window.addEventListener('load', function () {
	const menu = new Menu();

	const click = new ClickableMenuItem();
	const sub = new SubmenuMenuItem();
	const sub2 = new SubmenuMenuItem();
	const split = new SpearatorMenuItem();

	menu[APPEND](click);
	menu[APPEND](sub);
	menu[APPEND](split);
	menu[APPEND](sub2);

	menu[MENU_ELEMENT].style.minWidth = '200px';

	menu[SHOW]();
});