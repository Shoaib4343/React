import React,{useState, useEffect} from 'react'
import Expense from './Components/Expense/Expense'
import NewExpense from './Components/NewExpense/NewExpense'

const DumyData = [];



const App = () => {

    function fetchData(){
        fetch('http://localhost:8000/expenses').then(
            response => {
                return response.json();
            }
            ).then(
                data =>{
                    console.log(data);
                    setexpense(data);
                }
            );
    
    }
    
    const [expense , setexpense] = useState(DumyData);
    useEffect(()=>{
       fetchData();

    },[]);

    
   

    const getExpenseData = (data) =>{
       fetch('http://localhost:8000/expenses',{
            method: 'POST',
            body: JSON.stringify(data) ,
            headers:{
                'content-Type' : 'application/json'
            }
       }).then(
         response => {
           fetchData();
        }
       )
    }

    
  return (

    <div>
        
        <NewExpense getExpenseData={getExpenseData} />
        <Expense arr={expense} />
        
    </div>
  )
}

export default App