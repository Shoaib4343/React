import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import NewCard from "../Ui/NewCard";

const Expenses = (props) => {
  return (
    <NewCard className="expense">
      {props.items.map(
        (expense) => (
        <ExpenseItems
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </NewCard>
  );
};

export default Expenses;
