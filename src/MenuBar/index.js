import * as Dom from 'dom';

import { normalize } from './normalize';
import { MenuBar } from './Bar';
import { MenuBarButton } from './Button';
import { install, state } from './scope';

import * as _BAR from '@/symbol/bar';
import * as _BUTTON from '@/symbol/button';
import * as _SCOPE from '@/symbol/menubar-scope';

export const mount = element => {
	state[_SCOPE.CONTAINER] = element;
	install();
};

export const setMenuBar = options => {
	const finalOptions = normalize(options);
	const menuBar = state[_SCOPE.MENU_BAR] = new MenuBar();
	const fragement = Dom.createFragement();

	finalOptions.forEach(buttonOptions => {
		const button = new MenuBarButton(menuBar, buttonOptions);

		menuBar[_BAR.APPEND_BUTTON](button);
		Dom.appendChild(fragement, button[_BUTTON.OUTER_ELEMENT]);
	});

	Dom.appendChild(menuBar[_BAR.BAR_ELEMENT], fragement);
	install();
};
