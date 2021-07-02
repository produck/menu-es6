import * as Dom from '@/dom';
import { register as registerMenuItem, normalizeMenuOptions } from './normalize';
import { ClickableMenuItem, normalize as normalizeClickableMenuItemOptions } from './Item/Clickable';
import { SubmenuMenuItem, Menu, normalize as normalizeSubmenuMenuItemOptions } from './Item/Submenu';
import { SpearatorMenuItem, normalize as normalizeSpearatorMenuItemOptions } from './Item/Spearator';
import * as MenuItem from './Item/index';
import { closeAllMenu, setCurrentMenu, appendMenu } from './Scope';

import * as _M from '@/symbol/menu';
import { currentPosition } from '@/utils';

registerMenuItem(ClickableMenuItem, normalizeClickableMenuItemOptions);
registerMenuItem(SubmenuMenuItem, normalizeSubmenuMenuItemOptions);
registerMenuItem(SpearatorMenuItem, normalizeSpearatorMenuItemOptions);

export { MenuItem, normalizeMenuOptions as normalize, closeAllMenu };

export const getPositionFromEvent = event => ({ x: event.clientX, y: event.clientY });

function reOffsetCurrentMenu(element) {
	const rect = Dom.getRect(element);

	if (rect.bottom > Dom.WINDOW.innerHeight) {
		Dom.setStyle(element, {
			top: `${element.offsetTop - element.offsetHeight}px`
		});
	}

	if (rect.right > Dom.WINDOW.innerWidth) {
		Dom.setStyle(element, {
			left: `${element.offsetLeft - element.offsetWidth}px`
		});
	}

	//TODO resize
}

function normalizeModifier(_options) {
	const options = {
		position: currentPosition,
		mnemonic: false,
		blocking: false
	};

	const {
		position: _position = options.position,
		mnemonic: _mnemonic = options.mnemonic,
		blocking: _blocking = options.blocking
	} = _options;

	if (typeof _mnemonic !== 'boolean') {
		throw new Error('A `modifier.mnemonic` MUST be a boolean.');
	}

	if (typeof _blocking !== 'boolean') {
		throw new Error('A `modifier.blocking` MUST be a boolean.');
	}

	if (typeof _position !== 'object') {
		throw new Error('A `modifier.position` MUST be a boolean.');
	} else {
		const {
			x: _x = options.position.x,
			y: _y = options.position.y
		} = _position;

		if (isNaN(_x) || isNaN(_y)) {
			throw new Error('Invalid position.');
		}

		options.position.x = _x;
		options.position.y = _y;
	}

	options.mnemonic = _mnemonic;
	options.blocking = _blocking;

	return options;
}

export function popup(menuOptions, modifierOptions) {
	const { position, mnemonic, blocking } = normalizeModifier(modifierOptions);
	const menu = Menu[_M.S_CREATE](menuOptions, mnemonic);

	setCurrentMenu(menu, blocking);
	appendMenu(menu);
	menu[_M.SET_OFFSET](position);
	reOffsetCurrentMenu(menu[_M.MENU_ELEMENT]);

	return menu;
}