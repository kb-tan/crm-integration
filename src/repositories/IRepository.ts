
export interface IRepository<T> {
    create(data: T): Promise<string>;
    update(data: T): Promise<string>; 
    get(id: string): Promise<T>;
    remove(id: string): Promise<string>;
}