import * as Dom from './dom';
import * as lang from './lang';
import * as VAR from './vars';

export const CSSVarGenerator = namespace => name => `var(--${namespace}-${name})`;

export const Var = CSSVarGenerator('menu');

export { VAR };

export const MNEMONIC_REG = /^[a-z0-9`~?]$/i;

const LABEL_REG = /^([^&]*)(&[a-z]|&&)?([^&]*)$/i;

export const FRAGEMENT = 'n', MNEMONIC = 'f';

export const resolveLabelText = (text, noMnemonic = false) => {
	const fragement = Dom.createFragement();
	const result = { [FRAGEMENT]: fragement, [MNEMONIC]: null };
	const [, left, mnemonic, right] = text.match(LABEL_REG);

	if (mnemonic === undefined) {
		Dom.appendChild(fragement, Dom.createTextNode(left));
	} else if (mnemonic === '&&') {
		Dom.appendChild(fragement, Dom.createTextNode([left, '&', right].join('')));
	} else {
		const mnemonicChar = mnemonic[1];

		if (noMnemonic) {
			Dom.appendChild(fragement, Dom.createTextNode([left, mnemonicChar, right].join('')));
		} else  {
			const u = Dom.createElement('u');

			u.textContent = mnemonicChar;
			result[MNEMONIC] = lang.toLowerCase(mnemonicChar);
			Dom.appendChild(fragement, Dom.createTextNode(left));
			Dom.appendChild(fragement, u);
			Dom.appendChild(fragement, Dom.createTextNode(right));
		}
	}

	return result;
};

let x = 0, y = 0;
export const getCurrentPosition = () => ({ x, y });

Dom.addEventListener(Dom.WINDOW, 'mousedown', event => {
	x = event.clientX;
	y = event.clientY;
});
