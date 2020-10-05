import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//renders a new expense list item for each item in the array
export const ExpenseList = (props) => (
    <div>
    <h1>ExpenseList</h1>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        )
    }
    </div>
);

// it's a function that maps the store state to component props
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}
export default connect(mapStateToProps)(ExpenseList);
