import { DOCUMENT } from '../symbol';

export function addEventListener(element, eventType, listener) {
	element.addEventListener(eventType, listener);
}

export function removeEventListener(element, eventType, listener) {
	element.removeEventListener(eventType, listener);
}

/**
 * @param {HTMLElement} element
 */
export function removeAllChild(element) {
	return Array
		.from(element.children)
		.map(childElement => element.removeChild(childElement));
}

/**
 * @param {HTMLElement} element
 */
export function removeFromParent(element) {
	return element.parentElement.removeChild(element);
}

/**
 * @param {string} tagName
 * @returns {HTMLElement}
 */
export function createElement(tagName) {
	return DOCUMENT.createElement(tagName);
}

/**
 * @param {HTMLElement} element
 * @param {object} ruleObject
 */
export function setStyle(element, ruleObject) {

}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
export function setClassName(element, name) {
	element.className = name;
}