import { IExpense } from "../../app/types/types"

export const ExpenseCard = ({ expense }: { expense: IExpense }) => {
    return (
        <div className="card">
            <div className="card--left">
                <span className="card-title">{expense.name}</span>
                <span className="card-category">{expense.category}</span>
            </div>
            <div className="card--right">
                <span className={expense.paid ? 'status--green' : 'status--red'}>{expense.cost}</span>
                {expense.priority}
            </div>
        </div>
    )
}