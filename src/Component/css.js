export function CSSVarGenerator(namespace) {
	return function generateVarName(name) {
		return `var(--${namespace}-${name})`;
	};
}