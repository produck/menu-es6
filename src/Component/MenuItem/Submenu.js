import { addClass, appendChild, createElement, setStyle } from 'dom';
import { FunctionMenuItem, FOCUS } from './Function';
import { TEXT_ELEMENT } from './Base';
import { MENU_ITEM_ICON_BOX_STYLE } from '../utils';
import * as VAR from '../vars';

const ICON_POSITION_STYLE = {
	right: 0,
	top: 0
};

export class SubmenuMenuItem extends FunctionMenuItem {
	constructor() {
		super();

		const expandingSpan = createElement('span');

		setStyle(expandingSpan, MENU_ITEM_ICON_BOX_STYLE, ICON_POSITION_STYLE);
		addClass(expandingSpan, 'menu-item-expanding');
		appendChild(this[TEXT_ELEMENT], expandingSpan);
	}
}

