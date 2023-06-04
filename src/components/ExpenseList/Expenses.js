import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = ""
  if( filteredExpenses.length === 0 ){
    expensesContent = <p>No expenses found.</p> 
  }
  else if(filteredExpenses.length  === 1 ){
    expensesContent = (
      <div>
        {filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItems>
        ))}
        <p>Only single Expense here. Please add more...</p>  
      </div>
    );
  }
  else if( filteredExpenses.length > 1){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItems   
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItems>
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};
export default Expenses;
