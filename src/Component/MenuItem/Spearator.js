import * as Dom from 'dom';
import { BaseMenuItem, TEXT_ELEMENT, ROW_ELEMENT } from './Base';
import { Var } from '../utils';
import * as VAR from '../vars';

const SPEARATOR_MENU_ITEM_STYLE = {
	display: 'block',
	'border-bottom': `1px solid ${Var(VAR.SPEARATOR_COLOR)}`,
	'margin': `${Var(VAR.WHITESPACE_Y)} ${Var(VAR.SPEARATOR_WHITESPACE_X)}`,
};

export class SpearatorMenuItem extends BaseMenuItem {
	constructor() {
		super();

		const rowElement = this[ROW_ELEMENT];

		Dom.setStyle(this[TEXT_ELEMENT], SPEARATOR_MENU_ITEM_STYLE);
		Dom.addEventListener(rowElement, 'mouseover', () => {
			Dom.dispatchEvent(rowElement, Dom.createEvent('-clear-all', this));
		});
	}
}