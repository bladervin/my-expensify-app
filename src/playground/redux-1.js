import { createStore } from 'redux';

//Action generators - functions that return object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

//setCount
const setCount = ({ count }) => ({
    type: 'SET',
    count
})

//resetCount
const resetCount = () => ({
    type: 'RESET',
})

//Reducers
//1. Reducers are pure functions - output is only determined by the input.
//2. Never change state or action 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return {
            count: state.count + action.incrementBy
        };
        default: 
          return state;
        case 'DECREMENT':
          return {
            count: state.count - action.decrementBy
          }
        case 'SET' :
          return {
              count: action.count
          };
        case 'RESET':
          return {
              count: 0
          }
    }
};

const store = createStore(countReducer);

//shows every action for store.dispatch
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions - an object that gets sent to the store 

store.dispatch(incrementCount({ incrementBy: 7}));
store.dispatch(incrementCount());

//Reset the counter 
store.dispatch(resetCount());

store.dispatch(decrementCount());
//decrement by 10
store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 50 }));
