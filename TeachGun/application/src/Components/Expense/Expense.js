import React from 'react'
import './Expense.css';
import ExpenseItems from './ExpenseItems';
import Card from '../Ui/Card';

const Expense = (props) => {
  return (
    <Card className='expense'>

    {
      props.arr.map(items => (
        <ExpenseItems 
            date={items.date} 
            title={items.title} 
            price={items.price}
        />

      ))
    }
        

        
    </Card>
  )
}

export default Expense