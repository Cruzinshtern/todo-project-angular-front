import { IMenuItem } from "../interfaces/menu-item.interface";

export const MENU_ITEMS: IMenuItem[] = [
    {key: 'home', value: 'Home', path: '/home'},
    {key: 'note_add', value: 'Add', path: '/todo-form'},
    {key: 'list', value: 'Todos', path: '/todos'},
    {key: 'settings', value: 'Settings', path: '/settings'},

    // {key: 'logout', value: 'Logout', path: null},
]