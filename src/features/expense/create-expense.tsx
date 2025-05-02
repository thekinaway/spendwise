import { IExpense } from "../../app/types/types";

export const createExpense = async (expense: IExpense) => {
    try {
        const response = await fetch("http://localhost:8000/expense", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(expense),
            redirect: "follow" as RequestRedirect
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error creating expense:", error);
    }
}

