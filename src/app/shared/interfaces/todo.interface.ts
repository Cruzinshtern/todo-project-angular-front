export interface ITodo {
    readonly _id: string,
    title: string,
    description: string,
    status: number,
    created_at: string,
    created_by: string,
    start_at: string,
    isFavorite: string
    due_at?: string
}