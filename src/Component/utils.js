import { CSSVarGenerator } from './css';
import * as VAR from './vars';

export const Var = CSSVarGenerator('menu');

export const MENU_ITEM_ICON_BOX_STYLE = {
	position: 'absolute',
	height: '100%',
	width: Var(VAR.FUNCTION_ITEM_WHITESPACE)
};
