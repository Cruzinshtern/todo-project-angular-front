import { IMenuItem } from "../interfaces/menu-item.interface";

export const MENU_ITEMS: IMenuItem[] = [
    // These items are left the first ones on purpose
    {key: 'chevron_right', value: 'Expand', path: null},
    {key: 'chevron_left', value: 'Reduce', path: null},

    // Main menu items
    {key: 'home', value: 'Home', path: '/home'},
    {key: 'note_add', value: 'Add', path: '/todo-form'},
    {key: 'list', value: 'Todos', path: '/todos'},
    {key: 'settings', value: 'Settings', path: '/settings'},

    // This item is left the last one on purpose
    {key: 'logout', value: 'Logout', path: null},
]