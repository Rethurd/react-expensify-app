import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) =>{

    
    return(
    <div>
    {
        props.expenses.length==0 ? 
        (<p> No expenses </p>)
        :
        (props.expenses.map((expense)=>{
           return <ExpenseListItem key={expense.id} {...expense} />
        }))
    }
        
        
    </div>
    );
};

const mapStateToProps = (state)=>{
    //what do we want to get from the store
    return{
        expenses:selectExpenses(state.expenses,state.filters) // we want to show the return value of this filtering function
    };

}
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList) // so we're pretty much passing props from the store to ExpenseList ?

export default ConnectedExpenseList;
