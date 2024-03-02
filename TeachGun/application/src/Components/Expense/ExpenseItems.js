import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItems = (Props) => {

  return (
    <div>
        <Card className="expenseItems">

            <ExpenseDate expenseDate={ Props.expenseDate } /> 
            
            <div className="expenseItems__description">
                <h2>{ Props.expenseTittle }</h2>
                <div className="expenseItem__price">${ Props.expenseAmount }</div>

            </div>
        </Card>
    </div>
  )
}

export default ExpenseItems