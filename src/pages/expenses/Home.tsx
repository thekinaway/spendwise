import { useEffect, useState } from "react";
import { Button } from 'celestia-ui-kit-v2';

import { IExpense } from "../../app/types/types";
import { getExpenses } from "../../features/expense/get-expenses"
import { ExpenseList } from "../../widgets/expense/ExpensesList"
import { createExpense } from "../../features/expense/create-expense";
import { expense } from "../../features/expense/mockData";

import '../../widgets/expense/Expense.scss';

export const Home = () => {
    const [expenses, setExpenses] = useState<IExpense[]>([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const data = await getExpenses();
            setExpenses(data);
        };

        fetchExpenses();
    }, []);

    return (
        <div className="main">
            <ExpenseList expenses={expenses} />
            <div className="expense-add-block">
                <span className="text--default">May</span>
                <Button size="small" onClick={() => createExpense(expense)} variant='secondary'>Add expense</Button>
            </div>

        </div>
    );
}