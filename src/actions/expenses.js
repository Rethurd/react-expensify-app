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
    return (dispatch,getState) =>{   // returning an action only works because we're using redux-thunk, normally it wouldnt
        const uid = getState().auth.uid;
        const{
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData // setting up a default (?)
        const expense = { description,note,amount,createdAt};

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{ // this is for promise chaining (l. 153)
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

export const startRemoveExpense = ({id}={})=>{
    return (dispatch,getState) =>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        });
    }
};

export const editExpense = (id, updates) =>({
type:'EDIT_EXPENSE',
id,
updates
});

export const startEditExpense= (id, updates)=>{
    return (dispatch,getState) =>{

        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates));
        });
    };
};

export const setExpenses = (expenses) =>({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () =>{
    
    return (dispatch,getState)=>{
        const uid = getState().auth.uid; 
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const setExpensesArray=[];
            snapshot.forEach((childSnapshot)=>{
                const expense = {
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                }
                setExpensesArray.push(expense);
            })
            dispatch(setExpenses(setExpensesArray));
        });

    };
};