import React from 'react';

import {NavLink} from 'react-router-dom';

// Props - properties, hole down approach
// to pass data from parent component to child component as property value


// functional component using ES5 , old js 
// shall be called by react framework
// create and return virtual dom
function Header(props) {
    console.log('Header called', props)
    // props are readonly, we should modity the props data
    // props data is passed from parent to child, parent should change the data
    //props.year = 2000
    // in es6, we can use destructuring to read code simple
    // const title = props.title
    const {title} = props 
    return (
        <div>
            <h2>{title}</h2>
            {/* success is css class name */}
            <NavLink to="/" exact className="button" activeClassName='success'>Home</NavLink>
            <NavLink to="/products" className="button" activeClassName='success'>Products</NavLink>
            <NavLink to="/cart" className="button" activeClassName='success'>Cart</NavLink>
            <NavLink to="/checkout" className="button" activeClassName='success'>Checkout</NavLink>
            <NavLink to="/about" className="button" activeClassName='success'>About</NavLink>
            <hr />
        </div>
    )
}

export default Header;