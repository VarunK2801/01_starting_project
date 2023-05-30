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
  return (
    <Card className="expenses">
        <ExpensesFilter
       selected={filteredYear} 
       onChangeFilter={filterChangeHandler}/>

      {props.expenses.map((expense) => (
        <ExpenseItems
          key ={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItems>
      ))}
    </Card>
  );
};
export default Expenses;
