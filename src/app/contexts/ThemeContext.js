import React, {createContext} from 'react';

// How we pass data from parent to child = using props
// we have got 10 level of hierarchy, want pass data from parent to greates children which 10 level down

// not useful for handling data for example, shopping cart data
// use it for global data, like theme, language , currency 

// light theme, , default value , if no theme value specified, then the value light will be used
const ThemeContext = createContext("light")

export default ThemeContext