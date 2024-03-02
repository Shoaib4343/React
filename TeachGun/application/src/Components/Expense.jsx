import React from "react";
import ExpenseItems from "./ExpenseItems";
import './Expense.css'

const Expense = (Props) => {
  return (
    <div className="expense">
      <ExpenseItems
        expenseDate={Props.items[0].expenseDate}
        expenseTittle={Props.items[0].expenseTittle}
        expenseAmount={Props.items[0].expenseAmount}
      />
      <ExpenseItems
        expenseDate={Props.items[1].expenseDate}
        expenseTittle={Props.items[1].expenseTittle}
        expenseAmount={Props.items[1].expenseAmount}
      />

      <ExpenseItems
        expenseDate={Props.items[2].expenseDate}
        expenseTittle={Props.items[2].expenseTittle}
        expenseAmount={Props.items[2].expenseAmount}
      />

      <ExpenseItems
        expenseDate={Props.items[3].expenseDate}
        expenseTittle={Props.items[3].expenseTittle}
        expenseAmount={Props.items[3].expenseAmount}
      />
    </div>
  );
};

export default Expense;
