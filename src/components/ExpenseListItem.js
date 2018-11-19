import React from 'react';
import {Link} from 'react-router-dom';
const ExpenseListItem = ({id,dispatch,description,amount,createdAt}) => {
    return (
        <div>
            <h2>{description}</h2>
            <Link to={`/edit/${id}`}>Edit</Link>
            <p>Cost: {amount}</p>
            <p>Created: {createdAt}</p>
        </div>
       
    );
}
export default ExpenseListItem;
