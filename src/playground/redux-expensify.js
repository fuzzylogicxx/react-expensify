import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action Generators

// Add Expense
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({ 
  type: 'ADD_EXPENSE', 
  expense: {
      id: uuid(), 
      description, 
      note, 
      amount, 
      createdAt
  }
});

// Remove Expense
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE', 
    expense: {
        id
    }
});



// Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // we’ll use spread operator (rather than state.push()) so as not to mutate the state
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            // note the object destructuring on the argument to make it less verbose than item.id
            return state.filter( ( { id } ) => id !== action.expense.id);
        default:
            return state;
            break;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action) {
        default:
            return state;
            break;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer, 
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 3 }));

store.dispatch(removeExpense( { id: expenseOne.expense.id } = {} ));


const demoState = {
    expenses: [

    ], 
    filters: {

    }
};



const user = {
    name: 'Larry', 
    age: 43
};

console.log({
    ...user
});