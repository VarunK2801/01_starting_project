// import ExpenseItems from "./components/ExpenseItems";when we use maps
// import React from 'react'; if we write code in react object
import { useState } from "react";
import Expenses from "./components/ExpenseList/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expensesData = [
    {
      id: "el",
      title: "Food",
      amount: 500,
      date: new Date(2022, 7, 15),
      // LocationOfExpenditure: "Restaurent dhule",
    },
    {
      id: "bl",
      title: "Shopping",
      amount: 5000,
      date: new Date(2022, 10, 12),
      // LocationOfExpenditure: "Trends",
    },
    {
      id: "ml",
      title: "Movie",
      amount: 1000,
      date: new Date(2022, 6, 13),
      // LocationOfExpenditure: "Imax Nasik",
    },
    {
      id: "cl",
      title: "Tour",
      amount: 20000,
      date: new Date(2022, 4, 12),
      // LocationOfExpenditure: "gao trip",
    }
    
  ];
  
  const [expenseList , setExpenseList] = useState(expensesData)
  const addExpenseHandler = (newExpense) =>{
    setExpenseList([...expenseList ,newExpense]);
    console.log(newExpense,"in app.js new expenses");
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
     
      {/* {expenses.map((any) => (
        <ExpenseItems data={any}></ExpenseItems>
      ))} */}
      <Expenses expenses={expenseList} />
      {/* return React.createElement('div',{},
  React.createElement(Expenses,{items:expenses})); react object code */}
    </div>
  );
}

export default App;