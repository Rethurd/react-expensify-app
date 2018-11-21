import uuid from 'uuid';
import database from '../firebase/firebase';

// export const addExpense = (
//     {
//         description='',
//         note='',
//         amount=0,
//         createdAt=0
//     } = {}
// ) => ({
// type:'ADD_EXPENSE',
// expense:{
//     id:uuid(),
//     description,
//     note,
//     amount,
//     createdAt
// }
// });

export const addExpense = (expense) => ({
type:'ADD_EXPENSE',
expense
});

export const startAddExpense = (expenseData = {})=>{
    return (dispatch) =>{   // returning an action only works because we're using redux-thunk, normally it wouldnt
        const{
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData // setting up a default (?)
        const expense = { description,note,amount,createdAt};

        return database.ref('expenses').push(expense).then((ref)=>{ // this is for promise chaining (l. 153)
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        });
        
    }
}


export const removeExpense = ({id}={}) =>({
type:'REMOVE_EXPENSE',
id
});

export const editExpense = (id, updates) =>({
type:'EDIT_EXPENSE',
id,
updates
});