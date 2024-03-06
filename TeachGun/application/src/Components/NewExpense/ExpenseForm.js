import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const [date, setdate] = useState('');

   const titleHandler = (event)=>{settitle(event.target.value)};
   const priceHandler = (event)=>{setprice(event.target.value)};
   const dateHandler = (event)=>{setdate(event.target.value)};


   const submitHandler = (event)=>{
    event.preventDefault();

    const expenseData = {
        title: title,
        price: price,
        date: date
    }


    props.getformData(expenseData);
     console.log(expenseData);

    settitle('');
    setprice('');
    setdate('');

   }

  return (
    <form action="" onSubmit={submitHandler}>
      <div className=".new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleHandler}  value={title} />
        </div>
        <div className="new-expense__control">
            <label>Price</label>
            <input type="number" min={0.1} step={0.1} onChange={priceHandler} value={price} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateHandler} value={date} />
        </div>
        
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
