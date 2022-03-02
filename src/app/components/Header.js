import React from 'react';

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
            <hr />
        </div>
    )
}

export default Header;