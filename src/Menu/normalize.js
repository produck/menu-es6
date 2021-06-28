const NORMALIZER = 'n', TYPE = 't';
const TYPE_NORMALIZER_MAP = [];

function getNormalizer(type) {
	const pair = TYPE_NORMALIZER_MAP.find(pair => pair[TYPE] === type);

	if (pair === undefined) {
		throw new Error('Invalid menu item type.');
	}

	return pair[NORMALIZER];
}

const isArray = any => Array.isArray(any);

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

export function register(MenuItemClass, normalize) {
	TYPE_NORMALIZER_MAP.push({
		[TYPE]: MenuItemClass,
		[NORMALIZER]: normalize
	});
}