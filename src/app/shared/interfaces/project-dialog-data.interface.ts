import { ITodo } from "./todo.interface";

export interface IProjectDialogData {
    title: string | undefined, 
    text: string | undefined, 
    confirmBtnText: string | undefined,
    dialogType: 'edit' | 'delete',
    todoData?:ITodo
}