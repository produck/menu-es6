

class BaseMenuItem {}

class FunctionMenuItem {}

class ClickableMenuItem extends FunctionMenuItem {}

class SubmenuMenuItem extends FunctionMenuItem {}

class SpearatorMenuItem extends BaseMenuItem {}

/**
 * Including 3 constructor as `MenuItemOptions.type`
 */
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
		/**
		 * Assigning a menu item constructor
		 */
		type: ClickableMenuItem | SubmenuMenuItem | SpearatorMenuItem;

		/**
		 * For global index //TODO
		 */
		id: null | number | string;
	}

	interface FunctionMenuItem extends BaseMenuItem {
		/**
		 * A text display on a menu item.
		 *
		 * @default "<NO_LABEL>"
		 */
		label?: string;

		/**
		 * Any appendable dom as icons of an item.
		 *
		 * @default null
		 */
		icon?: null | DocumentFragment;
	}

	interface ClickableMenuItem extends FunctionMenuItem {
		/**
		 * Doing when a clickable item clicked.
		 *
		 * @default ()=>console.log(undefined);
		 */
		click?: () => any;

		/**
		 * Display checked icon.
		 *
		 * @default false
		 */
		isChecked?: boolean;

		/**
		 * Making an item displayed but disabled.
		 *
		 * @default false
		 */
		isDisabled?: boolean;

		/**
		 * Display customs hot key text.
		 *
		 * @default []
		 */
		accelerator?: DocumentFragment[];
	}

	interface SubmenuMenuItem extends FunctionMenuItem {
		/**
		 * A sub menu expanded by this item.
		 */
		submenu: Menu;
	}

	interface SpearatorMenuItem extends BaseMenuItem {}
}

interface Position {
	/**
	 * A distance to the left.
	 */
	x: number;

	/**
	 * A distance to the top.
	 */
	y: number;
}

interface Modifier {
	/**
	 * Specific position to replace the default (last mousedown).
	 *
	 * @default position from mousedown
	 */
	position?: Position;

	/**
	 * Display mnemonic or not.
	 *
	 * @default false
	 */
	mnemonic?: boolean;

	/**
	 * Using a mask element blocking a whole page or not.
	 *
	 * @default false
	 */
	blocking?: boolean;
}

interface MenuController {
	next(): void;
	readonly closed: boolean;
	readonly expandable: boolean;
	readonly expanding: boolean;
}

/**
 * Popup a menu from a menu options.
 *
 * @param menuOptions A menu item options list
 * @param modifierOptions Adjustment display a little
 */
export function popup(menuOptions: Options.Menu, modifierOptions?: Modifier): void;

/**
 * A helper for creating a position from a mouse event.
 *
 * @param event a mouse event with .clientX & .clientY
 */
export function getPositionFromEvent(event: MouseEvent): Position;

/**
 * Trying to close all active menu & submenu.
 */
export function closeAllMenu(): void;

/**
 * Updating global menu state before keydown.
 */
export const current: MenuController;