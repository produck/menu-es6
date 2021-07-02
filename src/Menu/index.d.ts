

class BaseMenuItem {}

class FunctionMenuItem {}

class ClickableMenuItem extends FunctionMenuItem {}

class SubmenuMenuItem extends FunctionMenuItem {}

class SpearatorMenuItem extends BaseMenuItem {}

declare namespace MenuItem {
	export const Clickable = ClickableMenuItem;
	export const Submenu = SubmenuMenuItem;
	export const Spearator = SpearatorMenuItem;
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
		accelerator?: DocumentFragment[];
	}

	interface SubmenuMenuItem extends FunctionMenuItem {
		submenu: Menu;
	}

	interface SpearatorMenuItem extends BaseMenuItem {}
}

interface Position {
	x: number;
	y: number;
}

interface Modifier {
	position: Position;
	mnemonic: boolean;
	blocking: boolean;
}

export function popup(menuOptions: Options.Menu, modifierOptions?: Modifier): void;

export function getPositionFromEvent(event: MouseEvent): Position;

export function closeAllMenu(): void;