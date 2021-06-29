
export namespace MenuItem {
	class BaseMenuItem {}

	class FunctionMenuItem {}

	export class ClickableMenuItem extends FunctionMenuItem {}

	export class SubmenuMenuItem extends FunctionMenuItem {}

	export class SpearatorMenuItem extends BaseMenuItem {}
}

namespace Options {
	type MenuItemGenerator = () => MenuItem[];
	type MenuItem = ClickableMenuItem | SubmenuMenuItem | SpearatorMenuItem;
	type MenuItemGroup = (MenuItem | MenuItemGenerator)[];
	type Menu = MenuItemGroup[];

	interface BaseMenuItem {
		type: BaseMenuItem;
		id: null;
	}

	interface FunctionMenuItem extends BaseMenuItem {
		label?: string;
		icon?: any;
	}

	interface ClickableMenuItem extends FunctionMenuItem {
		click?: () => void;
		isChecked?: () => boolean;
		isDisabled?: () => boolean;
		accelerator: string[];
	}

	interface SubmenuMenuItem extends FunctionMenuItem {
		submenu: Menu;
	}

	interface SpearatorMenuItem extends BaseMenuItem {}
}

export function popup(options: Options.Menu, position?): void;