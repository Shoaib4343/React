import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{

    const getformData = (data) =>{
        const newData = {
            ...data,
            id: Math.floor(Math.random() * 100000).toString().padStart(5, '0')
        };
        props.getExpenseData(newData);
        console.log(newData);
    };
    
    return(
        <>
            <div className="new-expense">
                <ExpenseForm getformData={getformData}  />
            </div>
            
        </>
    );
}

export default NewExpense
