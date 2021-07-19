import { Options as MenuOptions } from '../Menu';

declare namespace Options {
	type MenuOptionsGenerator = () => MenuOptions.Menu;
	type MenuBar = MenuBarButtonOptions[];

	interface MenuBarButtonOptions {
		/**
		 * The text of this button.
		 *
		 * @default "<NO_LABEL>"
		 */
		title?: string;

		/**
		 * A menu options or a function returning menu options.
		 *
		 * @requires
		 */
		menu: MenuOptions.Menu | MenuOptionsGenerator;
	}
}

/**
 * Putting a existed menu bar into the specifical element. If there is a
 * defined menu bar then appending immediately.
 *
 * @param element target element
 */
export function mount(element: HTMLElement): void;

/**
 * Providing an options to create a menu bar. If there is a container element
 * for mounting then appending into it immediately.
 *
 * @param options A new menu bar options
 */
export function setMenuBar(options: Options.MenuBar): void;

/**
 * Bootstraping menu bar scope & registering event listeners.
 */
export function bootstrap(): void;