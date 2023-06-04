import ExpenseItems from "./ExpenseItems";
import './ExpensesList.css';

const ExpensesList = props => {
  // if (props.items.length === 0) {
  //   expensesContent = <p>No expenses found.</p>;

  // } else if (props.items.length === 1) {
  //   expensesContent = (
  //     <div>
  //       {props.items.map((expense) => (
  //         <ExpenseItems
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         ></ExpenseItems>
  //       ))}
  //       <p>Only single Expense here. Please add more...</p>
  //     </div>
  //   );
  // } else if (props.items.length > 1) {
  //   expensesContent = ;
  // }
  
  if (props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  
  else if(props.items.length === 1){
    return (
      <div>
      {props.items.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItems>
    ))};
      <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2> 
      </div>);
  };
  
  return <ul className="expense-list">
    {props.items.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItems>
    ))}
  </ul>

};

export default ExpensesList;
