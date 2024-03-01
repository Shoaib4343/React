import React from 'react'
import ExpenseItems from './Components/ExpenseItems'

const App = () => {

  const expense = [
    { 
      expenseDate : new Date(2022, 12, 23),
      expenseTittle : "School Fee",
      expenseAmount : 400
    },
    { 
      expenseDate : new Date(2012, 12, 23),
      expenseTittle : "Food ",
      expenseAmount : 500
    },
    { 
      expenseDate : new Date(2022, 2, 3),
      expenseTittle : "College",
      expenseAmount : 700
    },
    { 
      expenseDate : new Date(2022, 12, 18),
      expenseTittle : "Library",
      expenseAmount : 100
    }
  ]

  return (
    
    <div>
      <h1>This is App.js </h1>

      <ExpenseItems 
       expenseDate={expense[0].expenseDate}
       expenseTittle={expense[0].expenseTittle} 
       expenseAmount={expense[0].expenseAmount} 

      />
       <ExpenseItems 
       expenseDate={expense[1].expenseDate}
       expenseTittle={expense[1].expenseTittle} 
       expenseAmount={expense[1].expenseAmount} 

      />

      <ExpenseItems 
       expenseDate={expense[2].expenseDate}
       expenseTittle={expense[2].expenseTittle} 
       expenseAmount={expense[2].expenseAmount} 

      />

      <ExpenseItems 
       expenseDate={expense[3].expenseDate}
       expenseTittle={expense[3].expenseTittle} 
       expenseAmount={expense[3].expenseAmount} 

      />




      </div>

  )
}

export default App