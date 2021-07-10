import '../src/style.scss';
import './debug.css';
import { popup, MenuItem, Bar as MenuBar } from '../src/index';

window.addEventListener('load', function () {
	const test = document.createElement('div');

	this.document.body.appendChild(test);

	function MockMenu() {
		return [
			// [
			// 	{ type: MenuItem.Clickable, label: 'l2' }
			// ],
		];
	}

	MenuBar.mount(test);
	MenuBar.setMenuBar([
		{
			title: '&title1',
			menu: MockMenu()
		},
		{
			title: 't&itle2',
			menu: MockMenu()
		},
		{
			menu: [
				[
					{
						type: MenuItem.Clickable,
						label: '&Testing for common...',
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
			]
		}
	], true);

	window.addEventListener('contextmenu', event => {
		const icon = document.createDocumentFragment();
		const acc0 = document.createDocumentFragment();
		const acc1 = document.createDocumentFragment();

		acc0.appendChild(new Text('Ctrl+A'));
		acc1.appendChild(new Text('B'));
		icon.appendChild(new Text('😘'));

		event.preventDefault();
		popup([
			[
				{
					type: MenuItem.Clickable,
					label: '&Testing for common...',
					accelerator: [acc0, acc1],
					icon: icon
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
					isChecked: true
				},
				{
					label: 'disable one',
					isDisabled: true
				},
				{ type: MenuItem.Spearator },
				() => new Array(2).fill(1).map((_, index) => {
					return {
						label: `d${index}`
					};
				})
			]
		], {
			mnemonic: false,
			blocking: true
		});
	});
});