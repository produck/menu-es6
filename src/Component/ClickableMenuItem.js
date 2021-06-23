import { createElement, setClassName, setStyle } from './dom';
import { FunctionMenuItem, MENU_ITEM_LABEL_SPAN_STYLE } from './FunctionMenuItem';
import { ROW_ELEMENT } from './MenuItem';
import { Var } from './utils';
import * as VAR from './vars';

export const CLICK = 0x02;

const MENU_ITEM_CHECKING_SPAN_STYLE = {
	position: 'absolute',
	height: Var(VAR.FUNCTION_ITEM_HEIGHT),

};

export class ClickableMenuItem extends FunctionMenuItem {
	constructor(menuItem) {
		super();

		const acceleratorSpan = createElement('span');
		const checkingSpan = createElement('span');

		setClassName(acceleratorSpan, 'menu-item-accelerator');
		setStyle(acceleratorSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		setStyle(checkingSpan, MENU_ITEM_CHECKING_SPAN_STYLE);

		addEventListener(this[ROW_ELEMENT], 'click', () => {

		});
	}
}
