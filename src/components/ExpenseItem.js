import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.item.date} />
      <ExpenseDetails 
        amount ={props.item.amount}
        title ={props.item.title}
        location ={props.item.LocationOfExpenditure} />
    </div>
  );
}

export default ExpenseItem;
