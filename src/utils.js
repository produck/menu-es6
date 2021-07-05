import * as Dom from './dom';
import * as VAR from './vars';

export const CSSVarGenerator = namespace => name => `var(--${namespace}-${name})`;

export const Var = CSSVarGenerator('menu');

export { VAR };

export const MNEMONIC_REG = /^[a-z0-9`~?]$/i;

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

let x = 0, y = 0;
export const getCurrentPosition = () => ({ x, y });

Dom.addEventListener(Dom.WINDOW, 'mousemove', event => {
	x = event.clientX;
	y = event.clientY;
});

const typeOf = (any, typeString) => typeof any === typeString;

export const
	isFunction = any => typeOf(any, 'function'),
	isString = any => typeOf(any, 'string'),
	isNumber = any => typeOf(any, 'number'),
	isBoolean = any => typeOf(any, 'boolean'),
	isObject = any => typeOf(any, 'object'),
	isArray = any => Array.isArray(any);