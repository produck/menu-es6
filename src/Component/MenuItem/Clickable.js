import * as Dom from 'dom';
import { FunctionMenuItem, MENU_ITEM_LABEL_SPAN_STYLE } from './Function';
import { ROW_ELEMENT, TEXT_ELEMENT } from './Base';
import { closeAllMenu } from '@/Scope';
import { MENU_ITEM_ICON_BOX_STYLE } from '../utils';

export const CLICK = 'c';

const CHECKING_POSITION_STYLE = { top: 0, left: 0 };

export class ClickableMenuItem extends FunctionMenuItem {
	constructor(menu, options) {
		super(menu, options);

		const rowElement = this[ROW_ELEMENT];
		const textElement = this[TEXT_ELEMENT];
		const acceleratorSpan = Dom.createElement('span');
		const checkboxSpan = Dom.createElement('span');

		Dom.addClass(acceleratorSpan, 'menu-item-accelerator');
		Dom.addClass(checkboxSpan, 'menu-item-checkbox');
		Dom.setStyle(acceleratorSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(checkboxSpan, MENU_ITEM_ICON_BOX_STYLE, CHECKING_POSITION_STYLE);
		Dom.appendChild(textElement, acceleratorSpan);
		Dom.appendChild(textElement, checkboxSpan);

		Dom.addEventListener(rowElement, 'mouseup', event => {
			Dom.STOP_AND_PREVENT(event);
			requestAnimationFrame(closeAllMenu);
			options.click();
		});

		Dom.addEventListener(rowElement, 'contextmenu', Dom.STOP_AND_PREVENT);
	}
}
