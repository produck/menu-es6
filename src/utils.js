import * as Dom from './dom';
import * as VAR from './vars';

export const CSSVarGenerator = namespace => name => `var(--${namespace}-${name})`;

export const Var = CSSVarGenerator('menu');

export const MENU_ITEM_ICON_BOX_STYLE = {
	position: 'absolute',
	height: '100%',
	width: Var(VAR.FUNCTION_ITEM_WHITESPACE)
};

export { VAR };

const LABEL_REG = /^([^&]*)(&[a-z]|&&)?([^&]*)$/i;
export const FRAGEMENT = 'n', MNEMONIC = 'f';

export function resolveLabelText(text, noMnemonic = false) {
	const fragement = Dom.createFragement();
	const result = { [FRAGEMENT]: fragement, [MNEMONIC]: null };
	const [, left, mnemonic, right] = text.match(LABEL_REG);

	if (mnemonic === undefined) {
		Dom.appendChild(fragement, Dom.createTextNode(left));
	} else if (mnemonic === '&&') {
		Dom.appendChild(fragement, Dom.createTextNode([left, '&', right].join('')));
	} else if (noMnemonic) {
		Dom.appendChild(fragement, Dom.createTextNode([left, mnemonic[1], right].join('')));
	} else  {
		const u = Dom.createElement('u');

		u.textContent = mnemonic[1];
		result[MNEMONIC] = mnemonic[1].toLowerCase();
		Dom.appendChild(fragement, Dom.createTextNode(left));
		Dom.appendChild(fragement, u);
		Dom.appendChild(fragement, Dom.createTextNode(right));
	}

	return result;
}