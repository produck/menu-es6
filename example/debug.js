import '../theme/default.css';
import { popup, MenuItem } from '@/Menu/index';

window.addEventListener('load', function () {
	window.addEventListener('contextmenu', event => {
		event.preventDefault();
		popup([
			[
				{
					type: MenuItem.Clickable,
					label: 'test'
				},
				{
					type: MenuItem.Submenu,
					submenu: [
						[
							{
								type: MenuItem.Clickable,
								label: 'l2'
							}
						],
						[
							{
								type: MenuItem.Submenu,
								label: 'open &l3',
								submenu: [
									[
										{
											type: MenuItem.Clickable,
											label: 'l3-0'
										},
									]
								]
							},
							{
								type: MenuItem.Clickable,
								label: 'l2-1'
							}
						]
					]
				}
			],
			[
				{
					type: MenuItem.Clickable
				},
				{ type: MenuItem.Spearator },
				() => new Array(2).fill(1).map((_, index) => {
					return {
						type: MenuItem.Clickable,
						label: `d${index}`
					};
				})
			]
		]);
	});
});