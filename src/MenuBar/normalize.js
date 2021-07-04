import { normalizeMenuOptions } from '@/Menu/normalize';
import { throwError } from '@/utils';

/**
 * @param {Array} _options
 */
export const normalize = _options => {
	if (!Array.isArray(_options)) {
		throwError('A menu bar options MUST be an array.');
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

		if (typeof _title !== 'string') {
			throwError('A menu bar button title MUST be a string.');
		}

		options.menu = normalizeMenuOptions(_menu);
		options.title = _title;

		return options;
	});

	return options;
};