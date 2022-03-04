// mount virtual into real dom

// without curly brace - default import
import ReactDOM from 'react-dom';
import React from 'react';

// handled by webpacks
import './styles.css';

import App from './app/App';
// Virtual DOM using React.createElement
// const App = React.createElement('h1', {id:'header'}, 'Hello React')
// JSX - JavaScript + XML - hack to have html in javascript, html will be converted to javascript

// babel to convert jsx to javascript at compile time

//const App = <h1 id='header'>Hello React</h1>

// mount virtual dom App into real dom container root
// React create install for class component 
// it will call app component render() function, get virtual dom
// render virtual dom into real dom

import store from './app/state/store';
import {Provider} from 'react-redux';

// Provider passes store as React context to all the container component

ReactDOM.render(
            <Provider store={store}>
            <App />
            </Provider>
            , document.getElementById('root'))