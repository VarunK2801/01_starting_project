// import ExpenseItems from "./components/ExpenseItems";when we use maps
// import React from 'react'; if we write code in react object
import { useState } from "react";
import Expenses from "./components/ExpenseList/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "el",
    title: "Food",
    amount: 500,
    date: new Date(2022, 7, 15),
    // LocationOfExpenditure: "Restaurent Hyd",
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
    // LocationOfExpenditure: "Imax Hyd",
  },
  {
    id: "cl",
    title: "Tour",
    amount: 20000,
    date: new Date(2022, 4, 12),
    // LocationOfExpenditure: "goa trip",
  },

];

const App = () => {
  
  const [expenseList , setExpenseList] = useState(dummyExpenses)
  const addExpenseHandler = (expense) =>{
    // setExpenseList([...expenseList ,newExpense]);
    console.log(expense,"in app.js new expenses");
    setExpenseList(prevExpenses => {
      return [expense,...prevExpenses]
    });
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