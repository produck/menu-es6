import * as lang from 'lang';

/**
 * @param {Array} _options
 */
export const normalize = _options => {
	if (!lang.isArray(_options)) {
		lang.throwError('A menu bar options MUST be an array.');
	}

	const options = _options.map(_buttonOptions => {
		const options = {
			title: 'defalut',
			menu: []
		};

		const {
			title: _title = options.title,
			menu: _menu = options.menu
		} = _buttonOptions;

		if (!lang.isString(_title)) {
			lang.throwError('A menu bar button title MUST be a string.');
		}

		options.menu = lang.isFunction(_menu) ? _menu : () => _menu;
		options.title = _title;

		return options;
	});

	return options;
};
