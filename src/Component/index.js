import * as Dom from 'dom';

export { DISABLE, FOCUS, RESET } from './MenuItem/Function';
export { ClickableMenuItem, CLICK } from './MenuItem/Clickable';
export { SubmenuMenuItem, SUB_MENU } from './MenuItem/Submenu';
export { SpearatorMenuItem } from './MenuItem/Spearator';
export { Menu, MENU_ELEMENT, OPEN as SHOW, CLOSE, APPEND, NEXT as FOCUS_NEXT, PREVIOUS as FOCUS_PREVIOUS } from './Menu';

Dom.addEventListener(Dom.WINDOW, 'mousedown', closeAllMenu);

export function closeAllMenu() {
	Dom.dispatchEvent(Dom.WINDOW, Dom.createEvent('menu::-close'));
}