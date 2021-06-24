import * as Dom from 'dom';
import { FunctionMenuItem, MENU_ITEM_LABEL_SPAN_STYLE } from './FunctionMenuItem';
import { ROW_ELEMENT, TEXT_ELEMENT } from './MenuItem';
import { MENU_ITEM_ICON_BOX_STYLE, Var } from './utils';
import * as VAR from './vars';

export const CLICK = 0x02;

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

		Dom.setClassName(acceleratorSpan, 'menu-item-accelerator');
		Dom.setClassName(checkboxSpan, 'menu-item-checkbox');
		Dom.setStyle(acceleratorSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(checkboxSpan, MENU_ITEM_ICON_BOX_STYLE, CHECKING_POSITION_STYLE);
		Dom.appendChild(textElement, acceleratorSpan);
		Dom.appendChild(textElement, checkboxSpan);

		Dom.addEventListener(this[ROW_ELEMENT], 'click', () => {

		});
	}
}
