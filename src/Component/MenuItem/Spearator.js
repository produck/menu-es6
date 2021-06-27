import * as Dom from 'dom';
import { BaseMenuItem, TEXT_ELEMENT, LISTEN_ENTER } from './Base';
import { Var } from '../utils';
import * as VAR from '../vars';
import { CLEAR_FOCUS } from '../Menu';

const SPEARATOR_MENU_ITEM_STYLE = {
	display: 'block',
	'border-bottom': `1px solid ${Var(VAR.SPEARATOR_COLOR)}`,
	'margin': `${Var(VAR.WHITESPACE_Y)} ${Var(VAR.SPEARATOR_WHITESPACE_X)}`,
};

export class SpearatorMenuItem extends BaseMenuItem {
	constructor(menu) {
		super(menu);

		Dom.setStyle(this[TEXT_ELEMENT], SPEARATOR_MENU_ITEM_STYLE);
		this[LISTEN_ENTER](() => menu[CLEAR_FOCUS]());
	}
}