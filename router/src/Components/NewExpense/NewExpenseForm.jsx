import React,{useState} from 'react';
import './NewExpenseForm.css';
import { setDriver } from 'localforage';



const NewExpenseForm = (props) => {
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const [date, setdate] = useState('');


    const titleHandler = (e)=>{
        settitle(e.target.value)
    }

    const priceHandler = (e) =>{
        setprice(e.target.value)
    }

    const dateHandler = (e)=>{
        setdate(e.target.value)

    }

    const submitHandler = (e)=>{
        e.preventDefault();


        const expenseData = {
            title : title,
            price : price,
            date : date
        };

        props.data(expenseData);
        console.log(expenseData);

        settitle('');
        setprice('');
        setdate('');
    }

  return (
    <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" value={title}  onChange={titleHandler} />
            </div>
            <div className="new-expense__control">
                <label >Price</label>
                <input type="number" min={0.1} step={0.1}  value={price} onChange={priceHandler}  />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date"  value={date} onChange={dateHandler} />
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default NewExpenseForm