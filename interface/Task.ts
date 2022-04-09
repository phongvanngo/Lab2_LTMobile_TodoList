export interface TaskModel {
    id?: number;
    title: string;
    complete?: boolean;
    description: string;
    from?: string;
    to?: string;
}