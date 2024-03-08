import React,{useState} from 'react'
import Expense from './Components/Expense/Expense'
import NewExpense from './Components/NewExpense/NewExpense'

const DumyData = [
    {
        id : 'e1',
        date : new Date(2023, 2, 12) ,
        title : "CAr Insuranse",
        price : 5000,
    },
    {
        id : 'e2',
        date : new Date(2023, 1, 9) ,
        title : "House Rent",
        price : 4000,
    },
    {
        id : 'e3',
        date : new Date(2013, 9, 2) ,
        title : "Bills",
        price : 400,
    },
    {
        id : 'e4',
        date : new Date(2021, 5, 5) ,
        title : "Pipes",
        price : 800,
    },
   
];


const App = () => {
    
    const [expense , setexpense] = useState(DumyData);

   

    const getExpenseData = (data) =>{
        const  updatedList = [...expense , data ];
        setexpense(updatedList);
    }

    
  return (

    <div>
        
        <NewExpense getExpenseData={getExpenseData} />
        <Expense arr={expense} />
        
    </div>
  )
}

export default App