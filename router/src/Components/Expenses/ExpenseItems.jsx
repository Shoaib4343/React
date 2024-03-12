import React,{useState} from 'react'
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import NewCard from '../Ui/NewCard';

const ExpenseItems = (props) => {

  
 
     
  return (
    
    <NewCard className='expense_item'>
    
       <ExpenseDate date={new Date(props.date)} />
        <div className="expense_itme__description">
            <h2>{props.title}</h2>
            <NewCard className="expense_item__price">${props.price}</NewCard>

           
        </div>
    </NewCard>
  )
}

export default ExpenseItems