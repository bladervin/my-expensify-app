import uuid from 'uuid';

//addExpense - implicitly return an action object  {} destructure the first argument
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,   //these last four objects are gonna come from the user
        note,
        amount, 
        createdAt
    }
});

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