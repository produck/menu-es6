export const
	assign = Object.assign,
	throwError = message => { throw new Error(message); },
	instanceOf = (instance, contructor) => instance instanceof contructor,
	typeOf = (any, typeString) => typeof any === typeString,
	isArray = any => Array.isArray(any);

export const
	isFunction = any => typeOf(any, 'function'),
	isString = any => typeOf(any, 'string'),
	isNumber = any => typeOf(any, 'number'),
	isBoolean = any => typeOf(any, 'boolean'),
	isObject = any => typeOf(any, 'object'),
	isDate = any => instanceOf(any, Date),
	isUndefined = any => any === undefined,
	isNull = any => any === null;

export const
	toLowerCase = string => string.toLowerCase();