import * as Dom from 'dom';
import { FunctionMenuItem, FOCUS, RESET, LISTEN_ENTER } from './Function';
import { ROW_ELEMENT, TEXT_ELEMENT } from './Base';
import { MENU_ITEM_ICON_BOX_STYLE } from '../utils';
import { CLOSE, OPEN } from '../Menu';

const ICON_POSITION_STYLE = {
	right: 0,
	top: 0
};

export const
	SUB_MENU = 'sm',
	IS_EXPANDING = 'p',
	EXPAND = 'E',
	COLLAPSE = 'C',

	KEY_LISTENER = 'kL';

export class SubmenuMenuItem extends FunctionMenuItem {
	constructor(menu) {
		super();

		const expandingSpan = Dom.createElement('span');

		Dom.setStyle(expandingSpan, MENU_ITEM_ICON_BOX_STYLE, ICON_POSITION_STYLE);
		Dom.addClass(expandingSpan, 'menu-item-expanding');
		Dom.appendChild(this[TEXT_ELEMENT], expandingSpan);

		this[SUB_MENU] = menu;
		this[IS_EXPANDING] = false;

		this[KEY_LISTENER] = event => {
			if (event.key === 'ArrowRight') {
				this[EXPAND]();
			} else if (event.key === 'ArrowLeft') {
				this[COLLAPSE]();
			}
		};

		this[LISTEN_ENTER](() => this[EXPAND]());
	}

	[EXPAND]() {
		if (this[IS_EXPANDING]) {
			return;
		}

		this[IS_EXPANDING] = true;
		this[SUB_MENU][OPEN]();
		Dom.dispatchEvent(this[ROW_ELEMENT], Dom.createEvent('-keeping', this));
	}

	[COLLAPSE]() {
		if (!this[IS_EXPANDING]) {
			return;
		}

		this[SUB_MENU][CLOSE]();
		this[IS_EXPANDING] = false;
		Dom.dispatchEvent(this[ROW_ELEMENT], Dom.createEvent('-resume', this));
	}

	[FOCUS]() {
		super[FOCUS]();
		Dom.addEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
	}

	[RESET]() {
		super[RESET]();
		this[COLLAPSE]();
		Dom.removeEventListener(Dom.WINDOW, 'keydown', this[KEY_LISTENER]);
	}
}

