import { ITodo } from "./todo.interface";

export interface IGetAllTodosResponse {
    data: ITodo[],
    count: number,
}