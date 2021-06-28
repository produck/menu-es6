import * as Dom from 'dom';
import { BaseMenuItem, ROW_ELEMENT, TEXT_ELEMENT, LISTEN_ENTER, MENU } from './Base';
import * as VAR from '../vars';
import { Var } from '../utils';
import { FOCUSING_ITEM, FOCUS_ITEM } from '../Menu';
import { setTop } from '@/Scope';

export const
	FOCUS = 'F',
	BLUR = 'r',
	DISABLE = 'd',
	LABEL_SPAN = 'l',
	FOCUSING = 'f';

const MENU_ITEM_ROW_STYLE_DEFAULT = {
	'cursor': 'pointer',
	color: Var(VAR.FRONTGROUND_COLOR),
	'background-color': 'transparent'
};

const MENU_ITEM_ROW_STYLE_ON_FOCUS = {
	color: Var(VAR.ACTIVE_FRONTGROUND_COLOR),
	'background-color': Var(VAR.ACTIVE_BACKGROUND_COLOR)
};

const MENU_ITEM_ROW_STYLE_ON_DISABLED = {
	color: Var(VAR.DISABLED_FRONTGROUND_COLOR),
	'background-color': 'transparent'
};

const MENU_ITEM_TEXT_STYLE = {
	'height': Var(VAR.FUNCTION_ITEM_HEIGHT)
};

const ICON_SPAN_STYLE = {
	display: 'none',
	'margin-right': '0.5em'
};

export const MENU_ITEM_LABEL_SPAN_STYLE = {
	'flex-grow': '1',
	'padding': `0 ${Var(VAR.FUNCTION_ITEM_WHITESPACE)}`,
};

export class FunctionMenuItem extends BaseMenuItem {
	constructor(menu, options) {
		super(menu);

		const textElement = this[TEXT_ELEMENT];
		const labelSpan = Dom.createElement('span');
		const iconSpan = Dom.createElement('span');

		Dom.addClass(labelSpan, 'menu-item-label');
		Dom.addClass(iconSpan, 'menu-item-icon');
		Dom.setStyle(labelSpan, MENU_ITEM_LABEL_SPAN_STYLE);
		Dom.setStyle(textElement, MENU_ITEM_TEXT_STYLE);
		Dom.setStyle(iconSpan, ICON_SPAN_STYLE);
		Dom.appendChild(textElement, iconSpan);
		Dom.appendChild(textElement, labelSpan);

		labelSpan.innerText = options.label;
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_DEFAULT);

		this[LABEL_SPAN] = labelSpan;
		this[LISTEN_ENTER](() => {
			if (!this[FOCUSING]) {
				setTop(this[MENU]);
				menu[FOCUS_ITEM](this);
			}
		});
	}

	get [FOCUSING]() {
		return this[MENU][FOCUSING_ITEM] === this;
	}

	[FOCUS]() {
		if (this[FOCUSING]) {
			return;
		}

		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_FOCUS);
		Dom.addClass(this[ROW_ELEMENT], 'focus');
	}

	[BLUR]() {
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_DEFAULT);
		Dom.removeClass(this[ROW_ELEMENT], 'focus');
	}

	[DISABLE]() {
		Dom.setStyle(this[ROW_ELEMENT], MENU_ITEM_ROW_STYLE_ON_DISABLED);
	}
}
