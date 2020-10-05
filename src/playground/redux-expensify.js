import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//addExpense - implicitly return an action object  {} destructure the first argument
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
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
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id  //id must be in the action object otherwise can't use it in the reducers
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    
})

const setStartDate = (startdate) => ({
    type: 'SET_START_DATE',
    startdate
})

const setEndDate = (enddate) => ({
    type: 'SET_END_DATE',
    enddate
})


//expenses reducer
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return [
              ...state, //spread operator used to take an array and add another element to it while keeping the content
              action.expense
          ];
        case 'REMOVE_EXPENSE':
          return state.filter(( { id }) => id !== action.id);  
        case 'EDIT_EXPENSE':
          return state.map((expense) => {
              if(expense.id === action.id) {
                  return {
                      ...expense,
                      ...action.updates
                  };                 
              } else {
                  return expense;
              };              
          });  
        default:
          return state;
    }
};

//filters Reducer
const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
          return {
              ...state,
              text: action.text
          };
        case 'SORT_BY_AMOUNT':
          return {
              ...state,
              sortBy: 'amount'
          };
        case 'SORT_BY_DATE':
          return {
              ...state,
              sortBy: 'date'
          };
        case 'SET_START_DATE':
         return {
             ...state,
             startDate: action.startdate
         };
        case 'SET_END_DATE':
         return {
             ...state,
             endDate: action.enddate
         };
        default: 
          return state;
    }
};

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {  //destructure the filters, creating variables for the individual one
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expenses.description has the text variable string inside of it

        return startDateMatch && endDateMatch && textMatch; //if all of these are true filter is true
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

//store creation - setup multiple reducers for the redux store
const store =  createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);  //get notified of any changes by subscribe
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -23000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 788 }));

// store.dispatch(setTextFilter('ffee'));
//store.dispatch(setTextFilter(''));

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(24));

const demoState = {
    expenses: [{    //array of objects 
        id: '123',
        description: 'January expense',
        note: 'This was the payment for this month',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount 
        startDate: undefined,
        endDate: undefined 
    }
};

// const user = {
//     name: 'Jin',
//     age: 23
// };

// console.log({
//     ...user,
//     location: 'London',
//     age: 24
// });