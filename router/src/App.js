import React, { useState, useEffect } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import NavBar from "./Components/Pages/NavBar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";




const Dummy_arr = [];

const App = () => {
  const [expense_arr, setExpense_arr] = useState(Dummy_arr);

  const fetchData = () => {
    fetch("http://localhost:8000/expenses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setExpense_arr(data);
      });
  };

  const user_input_form_data = (data) => {
    fetch("http://localhost:8000/expenses", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      fetchData();
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (


    <div>
    <NavBar />
    
    


    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>







      <NewExpense data={user_input_form_data} />
      <Expenses items={expense_arr} />
    </div>
  );
};

export default App;
