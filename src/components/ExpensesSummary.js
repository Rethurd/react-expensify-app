import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';

const ExpensesSummary = (props) =>(

<div>
    <div>Viewing {props.expenses.length} expenses totalling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</div>
</div>
);


const mapStateToProps = (state) =>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }

};

export default connect(mapStateToProps)(ExpensesSummary);