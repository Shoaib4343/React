import React from 'react'
import './Expense.css';
import ExpenseItems from './ExpenseItems';
import Card from '../Ui/Card';

const Expense = (props) => {
  return (
    <Card className='expense'>
        <ExpenseItems 
            date={props.arr[0].expense_date} 
            tittle={props.arr[0].expense_tittle} 
            price={props.arr[0].expense_price}
        />

         <ExpenseItems 
            date={props.arr[1].expense_date} 
            tittle={props.arr[1].expense_tittle} 
            price={props.arr[1].expense_price}
        />

         <ExpenseItems 
            date={props.arr[2].expense_date} 
            tittle={props.arr[2].expense_tittle} 
            price={props.arr[2].expense_price}
        />

        <ExpenseItems 
            date={props.arr[3].expense_date} 
            tittle={props.arr[3].expense_tittle} 
            price={props.arr[3].expense_price}
        />
    </Card>
  )
}

export default Expense