import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../reducers/expenses';

//component calls action generator
// action generator returns object
// component dispatches object 
//redux store changes

//addExpense - implicitly return an action object  {} destructure the first argument
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//removeExpense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id  //id must be in the action object otherwise can't use it in the reducers
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});