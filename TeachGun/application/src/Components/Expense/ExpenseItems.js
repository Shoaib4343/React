import React, {useState} from 'react'
import './ExpenseItems.css'
// import ExpenseDate from './ExpenseDate'
import Card from '../Ui/Card'

const ExpenseItems = (props) => {

  return (
    <Card className="expense_item">
        {/* <ExpenseDate  date={props.date}/> */}

        <div>{props.date.toLocaleString('en-US',{ month:'long', year:'numeric', day:'2-digit'})}</div>
        <div className="expense_itme__description">
            <h2>{props.title}</h2>
            <div className="expense_item__price">${props.price}</div>

        </div>
    </Card>

  )
}

export default ExpenseItems