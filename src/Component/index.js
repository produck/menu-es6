import * as Dom from 'dom';
import { closeAllMenu } from './MenuItem/Clickable';

export { DISABLE, FOCUS, RESET } from './MenuItem/Function';
export { ClickableMenuItem, CLICK } from './MenuItem/Clickable';
export { SubmenuMenuItem, SUB_MENU } from './MenuItem/Submenu';
export { SpearatorMenuItem } from './MenuItem/Spearator';
export { Menu, MENU_ELEMENT, OPEN, CLOSE, APPEND, NEXT } from './Menu';

Dom.addEventListener(Dom.WINDOW, 'mousedown', closeAllMenu);