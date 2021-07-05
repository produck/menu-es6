import * as lang from 'lang';


const NORMALIZER = 'n', TYPE = 't';
const TYPE_NORMALIZER_MAP = [];

const normalize = (options) => {
	const pair = TYPE_NORMALIZER_MAP.find(pair => pair[TYPE] === options.type);

	if (pair === undefined) {
		lang.throwError('Invalid menu item type.');
	}

	return pair[NORMALIZER](options);
};

export const normalizeMenuOptions = (_options) => {
	if (!lang.isArray(_options)) {
		lang.throwError('Menu options MUST be an array.');
	}

	return _options.map(_groupOptions => {
		if (!lang.isArray(_groupOptions)) {
			lang.throwError('Menu item group options MUST be an array.');
		}

		const NORMALIZE_ITEM_OPTIONS = options => normalize(options);

		return _groupOptions.reduce((itemOptionsList, itemOptions) => {
			const finalItemOptionsList = lang.isFunction(itemOptions)
				? itemOptions().map(NORMALIZE_ITEM_OPTIONS)
				: [NORMALIZE_ITEM_OPTIONS(itemOptions)];

			itemOptionsList.push(...finalItemOptionsList);

			return itemOptionsList;
		}, []);
	});
};

export const register = (MenuItemClass, normalize) => {
	TYPE_NORMALIZER_MAP.push({
		[TYPE]: MenuItemClass,
		[NORMALIZER]: normalize
	});
};