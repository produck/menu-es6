import * as VAR from './vars';

export function CSSVarGenerator(namespace) {
	return function generateVarName(name) {
		return `var(--${namespace}-${name})`;
	};
}

export const Var = CSSVarGenerator('menu');

export const MENU_ITEM_ICON_BOX_STYLE = {
	position: 'absolute',
	height: '100%',
	width: Var(VAR.FUNCTION_ITEM_WHITESPACE)
};
