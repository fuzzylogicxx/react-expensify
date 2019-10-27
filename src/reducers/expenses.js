// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
            break;
    }
};
