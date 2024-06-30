import { IDefaultItem } from "./default-item.interface";

export interface ITabItem extends IDefaultItem {
    icon: string;
    selected: boolean;
}