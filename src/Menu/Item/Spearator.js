import * as Dom from '../../dom';
import { Var, VAR } from '../../utils';

import { BaseMenuItem, normalize as normalizeBaseMenuItemOptions } from './Base';

import * as _MENU from '../../symbol/menu';
import * as _BASE from '../../symbol/base';

const SPEARATOR_MENU_ITEM_STYLE = {
	display: 'block',
	'border-bottom': `1px solid ${Var(VAR.MUTE_FRONT_COLOR)}`,
	'margin': `${Var(VAR.SIZE_SM)} ${Var(VAR.SIZE_MD)}`,
};

export class SpearatorMenuItem extends BaseMenuItem {
	constructor(menu) {
		super(menu);

		Dom.setStyle(this[_BASE.TEXT_ELEMENT], SPEARATOR_MENU_ITEM_STYLE);
		this[_BASE.LISTEN_ENTER](() => menu[_MENU.FOCUS_ITEM]());
	}
}

export const normalize = (_options) => {
	return normalizeBaseMenuItemOptions(_options);
};