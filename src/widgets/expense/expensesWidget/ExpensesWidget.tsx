import { useQuery } from "@tanstack/react-query";
import { MonthYearPicker } from "celestia-ui-kit-v2";
import { useState } from "react";

import { getExpensesByMonth } from "../../../features/expense/get-expenses";
import { ExpenseList } from "../ExpensesList";

const ExpensesWidget = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const { data: expenses = [] } = useQuery({
    queryKey: ["expenses", month, year],
    queryFn: () => getExpensesByMonth(month, year),
  });

  return (
    <>
      <ExpenseList expenses={expenses} />
      <div className="expense-add-block">
        <MonthYearPicker
          year={year}
          setYear={setYear}
          setMonth={setMonth}
          month={month}
        />
      </div>
    </>
  );
};
export default ExpensesWidget;
