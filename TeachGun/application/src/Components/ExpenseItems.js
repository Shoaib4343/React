import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItems = (Props) => {

  return (
    <div>
        <div className="expenseItems">

            <ExpenseDate expenseDate={Props.expenseDate} /> 
            
            <div className="expenseItems__description">
                <h2>{Props.expenseTittle}</h2>
                <div className="expenseItem__price">${Props.expenseAmount}</div>

            </div>
        </div>
    </div>
  )
}

export default ExpenseItems