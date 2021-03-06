// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter , {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './actions/filters';
import {login,logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';

const store = configureStore();

// console.log(store.getState());

store.subscribe(()=>{
    const state = store.getState();
    // console.log(getVisibleExpenses(state.expenses,state.filters));
});


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

let hasRendered = false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered=true;
    }
}
ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('uid',user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if (history.location.pathname==='/'){
                history.push('/dashboard');
            }
        });

    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})

