import { createElement, setStyle } from './dom';
import * as VAR from './vars';
import { Var } from './utils';

const MENU_STYLE = {
	display: 'block',
	position: 'fixed',
	'white-space': 'nowrap',
	'border-width': '1px',
	'border-style': 'solid',
	'line-height': Var(VAR.ITEM_HEIGHT),
	'border-color': Var(VAR.OUTLINE_COLOR),
	'background-color': Var(VAR.BACKGROUND_COLOR),
	'color': Var(VAR.FRONTGROUND_COLOR)
};

export const
	MENU_ELEMENT = 0x00;

export class Menu {
	constructor() {
		const menuElement = createElement('ul');

		setStyle(menuElement, MENU_STYLE);
	}
}