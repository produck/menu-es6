import * as Dom from 'dom';
import { BaseMenuItem, normalize as normalizeBaseMenuItemOptions } from './Base';
import { Var, VAR } from '@/utils';

import * as _MENU from '@/symbol/menu';
import * as _BASE from '@/symbol/base';

const SPEARATOR_MENU_ITEM_STYLE = {
	display: 'block',
	'border-bottom': `1px solid ${Var(VAR.SPEARATOR_COLOR)}`,
	'margin': `${Var(VAR.WHITESPACE_Y)} ${Var(VAR.SPEARATOR_WHITESPACE_X)}`,
};

export class SpearatorMenuItem extends BaseMenuItem {
	constructor(menu) {
		super(menu);

		Dom.setStyle(this[_BASE.TEXT_ELEMENT], SPEARATOR_MENU_ITEM_STYLE);
		this[_BASE.LISTEN_ENTER](() => menu[_MENU.FOCUS_ITEM]());
	}
}

export function normalize(_options) {
	return normalizeBaseMenuItemOptions(_options);
}