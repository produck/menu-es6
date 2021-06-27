import '../theme/default.css';
import { popup, MenuItem } from '@/MenuScope';

window.addEventListener('load', function () {
	window.addEventListener('contextmenu', event => {
		event.preventDefault();
		popup([
			[
				{ type: MenuItem.Clickable },
				{
					type: MenuItem.Submenu,
					submenu: [
						[
							{
								type: MenuItem.Clickable
							}
						]
					]
				}
			],
			[
				{ type: MenuItem.Clickable }
			]
		]);
	});
});