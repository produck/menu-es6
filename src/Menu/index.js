import { register as registerMenuItem } from './normalize';

import { ClickableMenuItem, normalize as normalizeClickableMenuItemOptions } from './Item/Clickable';
import { SubmenuMenuItem, normalize as normalizeSubmenuMenuItemOptions, popup } from './Item/Submenu';
import { SpearatorMenuItem, normalize as normalizeSpearatorMenuItemOptions } from './Item/Spearator';

registerMenuItem(ClickableMenuItem, normalizeClickableMenuItemOptions);
registerMenuItem(SubmenuMenuItem, normalizeSubmenuMenuItemOptions);
registerMenuItem(SpearatorMenuItem, normalizeSpearatorMenuItemOptions);

export const MenuItem = {
	Clickable: ClickableMenuItem,
	Submenu: SubmenuMenuItem,
	Spearator: SpearatorMenuItem
};

export { popup };
