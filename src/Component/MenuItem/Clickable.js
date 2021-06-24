import * as Dom from 'dom';
import { FunctionMenuItem, MENU_ITEM_LABEL_SPAN_STYLE } from './Function';
import { ROW_ELEMENT, TEXT_ELEMENT } from './Base';
import { MENU_ITEM_ICON_BOX_STYLE, Var } from '../utils';
import * as VAR from '../vars';

export const CLICK = 'c';

const CHECKING_POSITION_STYLE = {
	top: 0,
	left: 0
};

export class ClickableMenuItem extends FunctionMenuItem {
	constructor(menuItem) {
		super();

		const textElement = this[TEXT_ELEMENT];
		const acceleratorSpan = Dom.createElement('span');
		const checkboxSpan = Dom.createElement('span');

		Dom.addClass(acceleratorSpan, 'menu-item-accelerator');
		Dom.addClass(checkboxSpan, 'menu-item-checkbox');
		Dom.setStyle(acceleratorSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(checkboxSpan, MENU_ITEM_ICON_BOX_STYLE, CHECKING_POSITION_STYLE);
		Dom.appendChild(textElement, acceleratorSpan);
		Dom.appendChild(textElement, checkboxSpan);

		Dom.addEventListener(this[ROW_ELEMENT], 'click', () => {
			Dom.dispatchEvent(Dom.WINDOW, Dom.createEvent('menu::-close'));
		});
	}
}
