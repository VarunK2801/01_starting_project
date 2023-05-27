import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {/* <ExpenseItems
        name={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        LocationOfExpenditure={props.expenses[0].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        LocationOfExpenditure={props.expenses[1].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
        LocationOfExpenditure={props.expenses[2].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
        LocationOfExpenditure={props.expenses[3].LocationOfExpenditure}
      ></ExpenseItems> */}

      {props.expenses.map((expense) =>(
        <ExpenseItems
        name={expense.title}
        amount={expense.amount}
        date={expense.date}
       ></ExpenseItems>
        
      ))}
    </Card>
  );
}
export default Expenses;