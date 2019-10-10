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

// set count

const setCount = ( {count} ) => ({
    type: 'SET', 
    count
});


// reset count
const resetCount = () => ({
    type: 'RESET'
});

// Reducers

const countReducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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

const store = createStore(countReducer);



const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( {decrementBy: 10} ));

store.dispatch(setCount({ count: -100 }));
