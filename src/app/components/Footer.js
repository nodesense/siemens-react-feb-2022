import React from 'react';

import PropTypes from 'prop-types';

// es6 function to create component
// create and return virtual dom
// destructuring in arguments level
// first param is props, we destruct year, company, locations from props
const Footer = ({year, company, locations}) => {
    console.log("Footer called")
    return (
        <div>
            <hr />
            <p>copyrights @{year}, {company} </p>
            {/* JSX doesn't support statements like if, for loop, instead we can use expression
                that returns value 
            */}
            <p> Locations  
                {locations.map (location => <span> {location} </span>)}
            </p>
        </div>
    )
}

// keywords
Footer.defaultProps = {
    locations: [], // if locations is not passed from parent, [] is used
    company: 'Company Name',
    year: new Date().getFullYear() 
}

// property type check to ensure that parent pass right data type
// keyword
Footer.propTypes = {
    year: PropTypes.number,
    company: PropTypes.string,
    locations: PropTypes.arrayOf(PropTypes.string)
}

export default Footer;