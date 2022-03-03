import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import ThemeContext from './contexts/ThemeContext';

// If we provide value for ThemeContext, then provided value shall be taken by consumer

// class component, should have render function
class App extends React.Component {
    // create virtual dom and return virtual dom
    // called by react frame
    constructor(props) {
        super(props)
        this.state = {
            theme: 'default'
        }
    }

    render() {
        console.log('App render called')

        // return v.dom, write in jsx
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <div>
                    
                    <button onClick={() => this.setState({theme: 'dark'})}>Dark</button>
                    <button onClick={() => this.setState({theme: 'light'})}>Light</button>
                    <button onClick={() => this.setState({theme: 'default'})}>Default</button>

                    {/* app is parent component, Header, Footer are child components
                        we pass data from app component to header, footer with properties
                    */}
                    <Header title="Product App" />

                   <Checkout /> 
         
                    {/* <Cart /> */}

                    <Footer year={2022} company="ShopMall" locations = { ['BLR', 'Chennai']} />
                </div>
            </ThemeContext.Provider>
        )
    }
}
// while importing, no brace
export default App;