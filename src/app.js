// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

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
ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{

    ReactDOM.render(jsx,document.getElementById('app'));
})

