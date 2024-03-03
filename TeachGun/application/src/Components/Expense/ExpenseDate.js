import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense_date">
      <div className="expense_date__month">{month}</div>
      <div className="expense_date__year">{year}</div>
      <div className="expense_date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
