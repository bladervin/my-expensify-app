//expenses reducer
const expensesReducerDefault = [];
export default (state = expensesReducerDefault, action) => {
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
        case 'SET_EXPENSES':
          return action.expenses;  
        default:
          return state;
    }
};
