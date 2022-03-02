import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

// class component, should have render function
class App extends React.Component {
    // create virtual dom and return virtual dom
    // called by react frame
    render() {
        console.log('App render called')

        // return v.dom, write in jsx
        return (
            <div>
                {/* app is parent component, Header, Footer are child components
                    we pass data from app component to header, footer with properties
                   */}
                <Header title="Product App" />
                <Cart />
                <Footer year={2022} company="ShopMall" locations = { ['BLR', 'Chennai']} />
            </div>
        )
    }
}
// while importing, no brace
export default App;