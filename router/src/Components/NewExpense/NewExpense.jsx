import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


const NewExpense = (props) => {

  const retureFormData = (data) =>{

    const UpdateFormData = {
      ...data,
      id: Math.floor(Math.random() * 100000).toString().padStart(5, '0')
    }

    props.data(UpdateFormData);
    console.log(UpdateFormData);
  }

  return (
    <div className='new-expense'>
       <NewExpenseForm data={retureFormData} />
    </div>
  )
}

export default NewExpense