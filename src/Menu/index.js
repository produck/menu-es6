import { register as registerMenuItem, normalizeMenuOptions } from './normalize';
import { ClickableMenuItem, addListenerAfterClick, normalize as normalizeClickableMenuItemOptions } from './Item/Clickable';
import { SubmenuMenuItem, Menu, normalize as normalizeSubmenuMenuItemOptions, relayoutMenu } from './Item/Submenu';
import { SpearatorMenuItem, normalize as normalizeSpearatorMenuItemOptions } from './Item/Spearator';
import * as MenuItem from './Item/index';
import { closeAllMenu, setCurrentMenu, appendMenu, current } from './scope';

import * as _M from '../symbol/menu';
import { getCurrentPosition } from '../utils';
import * as lang from '../lang';

addListenerAfterClick(closeAllMenu);

registerMenuItem(ClickableMenuItem, normalizeClickableMenuItemOptions);
registerMenuItem(SubmenuMenuItem, normalizeSubmenuMenuItemOptions);
registerMenuItem(SpearatorMenuItem, normalizeSpearatorMenuItemOptions);

export { MenuItem, normalizeMenuOptions as normalize, closeAllMenu, current, addListenerAfterClick };

export const getPositionFromEvent = event => ({ x: event.clientX, y: event.clientY });

const normalizeModifier = (_options = {}) => {
	const options = {
		position: getCurrentPosition(),
		mnemonic: false,
		blocking: false
	};

	const {
		position: _position = options.position,
		mnemonic: _mnemonic = options.mnemonic,
		blocking: _blocking = options.blocking
	} = _options;

	if (!lang.isBoolean(_mnemonic)) {
		lang.throwError('A `modifier.mnemonic` MUST be a boolean.');
	}

	if (!lang.isBoolean(_blocking)) {
		lang.throwError('A `modifier.blocking` MUST be a boolean.');
	}

	if (!lang.isObject(_position)) {
		lang.throwError('A `modifier.position` MUST be a boolean.');
	} else {
		const {
			x: _x = options.position.x,
			y: _y = options.position.y
		} = _position;

		if (isNaN(_x) || isNaN(_y)) {
			lang.throwError('Invalid position.');
		}

		options.position.x = _x;
		options.position.y = _y;
	}

	options.mnemonic = _mnemonic;
	options.blocking = _blocking;

	return options;
};

const MockRectFromPosition = position => {
	return {
		top: position.y,
		bottom: position.y,
		left: position.x,
		right: position.x
	};
};

export const popup = (menuOptions, modifierOptions) => {
	const { position, mnemonic, blocking } = normalizeModifier(modifierOptions);
	const menu = Menu[_M.S_CREATE](menuOptions, mnemonic);

	setCurrentMenu(menu, blocking);
	appendMenu(menu);
	relayoutMenu(menu[_M.MENU_ELEMENT], MockRectFromPosition(position));
};
