import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props) =>{
    
    const [isEditing, setisEditing] = useState(false);

    const GetDetails=(details) =>{  
        // console.log(details,"new expense from expense form");
        props.onAddExpense(details);
        setisEditing(false);
    }

    const startEditingHandler= () =>{
        setisEditing(true);
    }

    const stopEditingHandler = () =>{
        setisEditing(false);
    }

    return( 
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm details={GetDetails} onCancel={stopEditingHandler}/>}
    </div> 
    );
};

export default NewExpense; 