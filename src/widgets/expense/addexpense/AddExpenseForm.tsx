import { Button } from "celestia-ui-kit-v2";
import { createExpense } from "../../../features/expense/create-expense";
import { expense } from "../../../features/expense/mockData";
import { Input } from "../../../shared/Input/Input";

export const AddExpenseForm = () => {
  return (
    <div className="add-expense-form">
      <div className="add-expense-form__input">
        <Input />
      </div>
      <div className="add-expense-form__input">
        <Input />
      </div>
      <Button
        size="small"
        onClick={() => createExpense(expense)}
        variant="outline"
        title="Add expense"
      ></Button>
    </div>
  );
};
