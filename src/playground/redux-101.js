import { createStore } from 'redux';

// Action generators

// in our generator function here we’re using object destructuring 
// on the object passed in as an argument,
// giving our local const a default value of 1, 
// and also giving the parent object a default value of empty object
const incrementCount = ({ incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT', 
  incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) => ({
    type: 'DECREMENT', 
    decrementBy
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Decrement the count
store.dispatch(decrementCount( {decrementBy: 3} ));

// Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

// Reset
store.dispatch({
    type: 'RESET'
});

// SEt to a value
store.dispatch({
    type: 'SET', 
    count: 101
});