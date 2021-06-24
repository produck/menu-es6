declare namespace MenuBar {
	interface Instance {

	}

}

declare namespace Menu {
	type Key = string;

	interface Instance<Context> {
		readonly name: string;
		readonly enabled: boolean;
		context: Context;

		/**
		 * Display this menu.
		 */
		popup(): void;

		/**
		 * Hide this menu
		 */
		close(): void;

		/**
		 * Activing and responding to accelerator.
		 */
		enable(): void;
		disable(): void;

		/**
		 * Re-creating all item instances according by options.
		 */
		build(): void;
	}

	namespace Item {
		interface Instance {

		}
	}

	namespace Options {
		type MenuItem = ClickableMenuItem | SubmenuMenuItem;
		type MenuItemGenerator = () => MenuItem[];
		type MenuItemGroup = (MenuItem | MenuItemGenerator)[];
		type Menu = MenuItemGroup[];

		type ItemLabelGetter<Context> = (context?: Context) => string;
		type ItemLabel<Context> = string | ItemLabelGetter<Context>;
		type ImageSrc = string;

		interface BaseMenuItem {
			id: number;
			label: ItemLabel;
			icon?: ImageSrc | HTMLElement;
		}

		type ClickListener<Context> = (context?: Context) => void;
		type CheckedGetter = () => boolean;
		type DisabledGetter = () => boolean;

		interface ClickableMenuItem extends BaseMenuItem {
			click: ClickListener;
			isChecked?: CheckedGetter;
			isDisabled?: DisabledGetter;
			accelerator: Key[];
		}

		interface SubmenuMenuItem extends BaseMenuItem {
			submenu: Menu;
		}

	}
}

/**
 *
 * @param name
 * @param options
 * @param context
 */
export function Menu<Context>(name: string, options: Menu.Options.Menu): Menu.MenuInstance<Context>;

/**
 *
 */
export function MenuBar(): Menu.MenuBarInstance;