import * as Dom from './dom';
import * as VAR from './vars';

export const CSSVarGenerator = namespace => name => `var(--${namespace}-${name})`;

export const Var = CSSVarGenerator('menu');

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
	} else {
		const mnemonicChar = mnemonic[1];

		if (noMnemonic) {
			Dom.appendChild(fragement, Dom.createTextNode([left, mnemonicChar, right].join('')));
		} else  {
			const u = Dom.createElement('u');

			u.textContent = mnemonicChar;
			result[MNEMONIC] = mnemonicChar.toLowerCase();
			Dom.appendChild(fragement, Dom.createTextNode(left));
			Dom.appendChild(fragement, u);
			Dom.appendChild(fragement, Dom.createTextNode(right));
		}
	}

	return result;
}

export const throwError = message => { throw new Error(message); };

export let currentPosition = { x: 0, y: 0 };

Dom.addEventListener(Dom.WINDOW, 'mousemove', event => currentPosition = { x: event.clientX, y: event.clientY });