import { IDefaultItem } from "./default-item.interface";

export interface IMenuItem extends IDefaultItem {
    path: string | null;
}