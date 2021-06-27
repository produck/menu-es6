export const DOCUMENT = document, WINDOW = window;
export const BODY = DOCUMENT.body;

/**
 * @param {HTMLElement} element
 * @param {string} eventType
 * @param {EventListener} listener
 */
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
		.map(childElement => removeChild(element, childElement));
}

/**
 * @param {HTMLElement} element
 */
export function removeFromParent(element) {
	return removeChild(element.parentElement, element);
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
export function setStyle(element, ...ruleObjectList) {
	for (const ruleObject of ruleObjectList) {
		for (const property in ruleObject) {
			element.style.setProperty(property, ruleObject[property]);
		}
	}
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
export function setClassName(element, name) {
	element.className = name;
}

/**
 * @param {HTMLElement} parentElement
 * @param {HTMLElement} element
 */
export function appendChild(parentElement, element) {
	parentElement.appendChild(element);
}

/**
 * @param {HTMLElement} parentElement
 * @param {HTMLElement} element
 */
export function removeChild(parentElement, element) {
	parentElement.removeChild(element);
}

/**
 * @param {HTMLElement} element
 * @param  {...string} tokens
 */
export function addClass(element, ...tokens) {
	element.classList.add(...tokens);
}

/**
 * @param {HTMLElement} element
 * @param  {...string} tokens
 */
export function removeClass(element, ...tokens) {
	element.classList.remove(...tokens);
}

export function createEvent(eventType, data = null) {
	const event = new Event(eventType, { bubbles: true });

	event.data = data;

	return event;
}

/**
 *
 * @param {HTMLElement} element
 * @param {Event} event
 */
export function dispatchEvent(element, event) {
	element.dispatchEvent(event);
}