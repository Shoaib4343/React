import React from 'react'
import './ExpenseDate.css';
import NewCard from '../Ui/NewCard';

const ExpenseDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});

  return (
   
    <NewCard className="expense_date">       
        <div className='expense_date__month'>{month}</div>
        <div className='expense_date__year'>{year}</div>
        <div className='expense_date__day'>{day}</div>
    </NewCard>
  )
}

export default ExpenseDate