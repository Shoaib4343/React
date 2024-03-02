import React from 'react'
import './ExpenseDate.css'
const ExpenseDate = (Props) => {
    const year = Props.expenseDate.getFullYear();
    const month = Props.expenseDate.toLocaleString('en-US', {month: 'long'});
    const day = Props.expenseDate.toLocaleString('en-US', {day: '2-digit'})
  return (

    <>
        <div className="expenseDate">
            <div className='expenseDate__month'>{month}</div>
            <div className='expenseDate__year'>{year} </div>
            <div className='expenseDate__day'>{day} </div>
        </div>
    </>
     
  )
}

export default ExpenseDate