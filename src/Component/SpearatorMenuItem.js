import * as Dom from 'dom';
import { MenuItem, TEXT_ELEMENT, ROW_ELEMENT } from './MenuItem';
import { Var } from './utils';
import * as VAR from './vars';

const SPEARATOR_MENU_ITEM_STYLE = {
	display: 'block',
	'border-bottom-width': '1px',
	'border-bottom-style': 'solid',
	'border-bottom-color': Var(VAR.SPEARATOR_COLOR),
	'margin-left': Var(VAR.SPEARATOR_WHITESPACE_X),
	'margin-right': Var(VAR.SPEARATOR_WHITESPACE_X),
	'margin-top': Var(VAR.SPEARATOR_WHITESPACE_Y),
	'margin-bottom': Var(VAR.SPEARATOR_WHITESPACE_Y)
};

export class SpearatorMenuItem extends MenuItem {
	constructor() {
		super();

		const rowElement = this[ROW_ELEMENT];

		Dom.setStyle(this[TEXT_ELEMENT], SPEARATOR_MENU_ITEM_STYLE);
		Dom.addEventListener(rowElement, 'mouseover', () => {
			rowElement.dispatchEvent(Dom.createEvent('-clear-focus', this));
		});
	}
}