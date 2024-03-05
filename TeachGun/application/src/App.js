import React from 'react'
import Expense from './Components/Expense/Expense'
import NewExpense from './Components/NewExpense/NewExpense'

const App = () => {

    const expense = [
        {
            id : 'e1',
            expense_date : new Date(2023, 2, 12) ,
            expense_tittle : "CAr Insuranse",
            expense_price : 5000,
        },
        {
            id : 'e2',
            expense_date : new Date(2023, 1, 9) ,
            expense_tittle : "House Rent",
            expense_price : 4000,
        },
        {
            id : 'e3',
            expense_date : new Date(2013, 9, 2) ,
            expense_tittle : "Bills",
            expense_price : 400,
        },
        {
            id : 'e4',
            expense_date : new Date(2021, 5, 5) ,
            expense_tittle : "Pipes",
            expense_price : 800,
        },
       
    ]

    
  return (

    <div>
        
        <NewExpense />
        <Expense arr={expense} />
        
    </div>
  )
}

export default App