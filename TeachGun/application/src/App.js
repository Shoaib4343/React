import React from "react";
import Expense from "./Components/Expense";

const App = () => {
  const expense = [
    {
      expenseDate: new Date(2022, 12, 23),
      expenseTittle: "School Fee",
      expenseAmount: 400,
    },
    {
      expenseDate: new Date(2012, 12, 23),
      expenseTittle: "Food ",
      expenseAmount: 500,
    },
    {
      expenseDate: new Date(2022, 2, 3),
      expenseTittle: "College",
      expenseAmount: 700,
    },
    {
      expenseDate: new Date(2022, 12, 18),
      expenseTittle: "Library",
      expenseAmount: 100,
    },
  ];

  return (
    <div>
      <Expense items={expense} />
    </div>
  );
};

export default App;
