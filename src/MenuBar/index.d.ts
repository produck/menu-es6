import { Options as MenuOptions } from '../Menu';

declare namespace Options {
	type MenuBar = MenuBarButtonOptions[];

	interface MenuBarButtonOptions {
		title?: string;
		menu: MenuOptions.Menu
	}
}

export function mount(element: HTMLElement): void;

export function setMenuBar(options: Options.MenuBar): void;
