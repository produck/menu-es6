export const DOCUMENT = document, WINDOW = window;
export const BODY = DOCUMENT.body;
export const REQUEST_ANIMATION_FRAME = requestAnimationFrame;
export const ASSIGN = Object.assign;
export const instanceOf = (instance, contructor) => instance instanceof contructor;

/**
 * @param {HTMLElement} element
 * @param {string} eventType
 * @param {EventListener} listener
 */
export const addEventListener = (element, eventType, listener) => {
	element.addEventListener(eventType, listener);
};

export const removeEventListener = (element, eventType, listener) => {
	element.removeEventListener(eventType, listener);
};

/**
 * @param {HTMLElement} element
 */
export const removeAllChild = (element) => {
	return Array
		.from(element.children)
		.map(childElement => removeChild(element, childElement));
};

/**
 * @param {HTMLElement} element
 */
export const removeFromParent = (element) => {
	return removeChild(element.parentElement, element);
};

/**
 * @param {string} tagName
 * @returns {HTMLElement}
 */
export const createElement = (tagName) => {
	return DOCUMENT.createElement(tagName);
};

export const createTextNode = (data) => {
	return DOCUMENT.createTextNode(data);
};

/**
 * @param {HTMLElement} element
 * @param {object} ruleObject
 */
export const setStyle = (element, ...ruleObjectList) => {
	for (const ruleObject of ruleObjectList) {
		for (const property in ruleObject) {
			element.style.setProperty(property, ruleObject[property]);
		}
	}
};

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
export const setClassName = (element, name) => {
	element.className = name;
};

/**
 * @param {HTMLElement} parentElement
 * @param {HTMLElement} element
 */
export const appendChild = (parentElement, element) => {
	parentElement.appendChild(element);
};

/**
 * @param {HTMLElement} parentElement
 * @param {HTMLElement} element
 */
export const removeChild = (parentElement, element) => {
	parentElement.removeChild(element);
};

/**
 * @param {HTMLElement} element
 * @param  {...string} tokens
 */
export const addClass = (element, ...tokens) => {
	element.classList.add(...tokens);
};

/**
 * @param {HTMLElement} element
 * @param  {...string} tokens
 */
export const removeClass = (element, ...tokens) => {
	element.classList.remove(...tokens);
};

export const createEvent = (eventType, data = null) => {
	const event = new Event(eventType, { bubbles: true });

	event.data = data;

	return event;
};

/**
 * @param {HTMLElement} element
 * @param {Event} event
 */
export const dispatchEvent = (element, event) => {
	element.dispatchEvent(event);
};

export const PREVENT_DEFAULT = event => event.preventDefault();
export const STOP_PROPAGATION = event => event.stopPropagation();

export const STOP_AND_PREVENT = (event) => {
	PREVENT_DEFAULT(event);
	STOP_PROPAGATION(event);
};

/**
 * @param {HTMLElement} element
 */
export const getRect = (element) => {
	return element.getBoundingClientRect();
};

export const createFragement = () => {
	return DOCUMENT.createDocumentFragment();
};