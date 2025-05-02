export type Categories = "Bills" | "Health" | "Food" | "Eating out" | "Clothes" | "Toiletry" | "House" | "Savings";

export interface IExpense {
    id?: number;
    name: string;
    category: Categories;
    cost: number;
    paid: boolean;
    priority: string;
    date: string;
}