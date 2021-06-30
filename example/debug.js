import '../theme/default.css';
import './debug.css';
import { popup, MenuItem, getPositionFromEvent } from '@/Menu/index';


window.addEventListener('load', function () {
	window.addEventListener('contextmenu', event => {
		const acc0 = document.createDocumentFragment();
		const acc1 = document.createDocumentFragment();

		acc0.appendChild(new Text('Ctrl+A'));
		acc1.appendChild(new Text('B'));

		event.preventDefault();
		popup([
			[
				{
					type: MenuItem.Clickable,
					label: '&Testing for common...',
					accelerator: [acc0, acc1]
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
					type: MenuItem.Clickable,
					isChecked: true
				},
				{
					type: MenuItem.Clickable,
					label: 'disable one',
					isDisabled: true
				},
				{ type: MenuItem.Spearator },
				() => new Array(2).fill(1).map((_, index) => {
					return {
						type: MenuItem.Clickable,
						label: `d${index}`
					};
				})
			]
		], getPositionFromEvent(event));
	});
});