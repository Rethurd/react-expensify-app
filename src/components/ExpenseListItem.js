import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id,dispatch,description,amount,createdAt}) => {
    return (
        <div>
            <h2>{description}</h2>
            <Link to={`/edit/${id}`}>Edit</Link>
            <p>Cost: {numeral(amount/100).format('$0,0.00')}</p>
            <p>Created: {moment(createdAt).format('MMMM Do, YYYY')}</p>
        </div>
       
    );
}
export default ExpenseListItem;
