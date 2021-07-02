import { VAR, Var } from '@/Menu/utils';

export const MENU_BAR_STYLE = {
	display: 'flex',
	flex: 1,
	'user-select': 'none',
	height: `${Var(VAR.BAR_HEIGHT)}`,
	'line-height': `${Var(VAR.BAR_HEIGHT)}`
};

export const MENU_BUTTON_OUTER_STYLE = {
	padding: `0 ${Var(VAR.SPACE_SM)}`,
};