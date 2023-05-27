import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props) =>{
    const GetDetails=(details) =>{  
        // console.log(details,"new expense from expense form");
        props.onAddExpense(details);
    }
    return( 
    <div className='new-expense'>
        <ExpenseForm details={GetDetails}/>
    </div> 
    );
};

export default NewExpense; 