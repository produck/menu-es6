import { SubmenuMenuItem, ClickableMenuItem, SpearatorMenuItem } from './Component/index';

const NORMALIZER = 'n', TYPE = 't';
const DEFAULT_CLICK_FN = () => console.warn('Undefined click');
const FALSE_GETTER = () => false;
const TRUE_GETTER = () => true;

function normalizeBaseMenuItemOptions(_options) {
	const options = {
		id: null
	};

	const {
		id: _id = options.id,
		type: _type
	} = _options;

	options.id = _id;
	options.type = _type;

	return options;
}

function normalizeFunctionMenuItemOptions(_options) {
	const options = Object.assign({
		label: '<NO_LABEL>',
		icon: null
	}, normalizeBaseMenuItemOptions(_options));

	const {
		label: _label = options.label,
		icon: _icon = options.icon
	} = _options;

	if (typeof _label !== 'string') {
		throw new Error('A menu item label MUST be a string.');
	}

	options.label = _label;
	options.icon = _icon;

	return options;
}

const TYPE_NORMALIZER_MAP = [
	{
		[TYPE]: SubmenuMenuItem,
		[NORMALIZER]: function normalize(_options) {
			const options = Object.assign({
				submenu: []
			}, normalizeFunctionMenuItemOptions(_options));

			const {
				submenu: _submenu = options.submenu
			} = _options;

			options.submenu = normalizeMenuOptions(_submenu);

			return options;
		}
	},
	{
		[TYPE]: ClickableMenuItem,
		[NORMALIZER]: function normalize(_options) {
			const options = Object.assign({
				click: DEFAULT_CLICK_FN,
				isChecked: FALSE_GETTER,
				isDisabled: FALSE_GETTER,
				accelerator: []
			}, normalizeFunctionMenuItemOptions(_options));

			const {
				click: _click = options.click,
				isChecked: _isChecked = options.isChecked,
				isDisabled: _isDisabled = options.isDisabled,
				accelerator: _accelerator = options.accelerator
			} = _options;

			if (!isFunction(_click)) {
				throw new Error('A `.click()` of clickable item MUST be a function.');
			}

			if (!isFunction(_isChecked) && !isBoolean(_isChecked)) {
				throw new Error('A `.isChecked` MUST be `() => boolean` or `boolean`.');
			}

			if (!isFunction(_isDisabled) && !isBoolean(_isDisabled)) {
				throw new Error('A `.isChecked` MUST be `() => boolean` or `boolean`.');
			}

			if (!isArray(_accelerator)) {
				throw new Error('A `.accelerator` MUST be an array of string.');
			}

			options.click = _click;
			options.accelerator = _accelerator;

			options.isChecked = isFunction(_isChecked)
				? _isChecked
				: _isChecked ? TRUE_GETTER : FALSE_GETTER;

			options.isDisabled = isFunction(_isDisabled)
				? _isDisabled
				: _isDisabled ? TRUE_GETTER : FALSE_GETTER;

			return options;
		}
	},
	{
		[TYPE]: SpearatorMenuItem,
		[NORMALIZER]: function normalize(_options) {
			return normalizeBaseMenuItemOptions(_options);
		}
	}
];

function getNormalizer(type) {
	const pair = TYPE_NORMALIZER_MAP.find(pair => pair[TYPE] === type);

	if (pair === undefined) {
		throw new Error('Invalid menu item type.');
	}

	return pair[NORMALIZER];
}

const isArray = any => Array.isArray(any);
const isFunction = any => typeof any === 'function';
const isBoolean = any => typeof any === 'boolean';

export function normalizeMenuOptions(_options) {
	if (!isArray(_options)) {
		throw new Error('Menu options MUST be an array.');
	}

	return _options.map(_groupOptions => {
		if (!isArray(_groupOptions)) {
			throw new Error('Menu item group options MUST be an array.');
		}

		const NORMALIZE_ITEM_OPTIONS = itemOptions => getNormalizer(itemOptions.type)(itemOptions);

		return _groupOptions.reduce((itemOptionsList, itemOptions) => {
			const finalItemOptionsList = typeof itemOptions === 'function'
				? itemOptions().map(NORMALIZE_ITEM_OPTIONS)
				: [NORMALIZE_ITEM_OPTIONS(itemOptions)];

			itemOptionsList.push(...finalItemOptionsList);

			return itemOptionsList;
		}, []);
	});
}