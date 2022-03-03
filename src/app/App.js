import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import ThemeContext from './contexts/ThemeContext';

import {BrowserRouter as Router, 
        Route, 
        Switch
    } from 'react-router-dom';
import ProductList from './components/ProductList';

const Home = () => (<div>
                        <h2>Home</h2>
                    </div>)

const About = () => (<div>
    <h2>About</h2>
</div>)


const NotFound = () => (<div>
    <h2>Page not Found!!</h2>
</div>)

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
            <Router>
                <ThemeContext.Provider value={this.state.theme}>
                    <div>
                        
                        <button onClick={() => this.setState({theme: 'dark'})}>Dark</button>
                        <button onClick={() => this.setState({theme: 'light'})}>Light</button>
                        <button onClick={() => this.setState({theme: 'default'})}>Default</button>

                        {/* app is parent component, Header, Footer are child components
                            we pass data from app component to header, footer with properties
                        */}
                        <Header title="Product App" />
                            {/* Switch picks the first component that match router */}
                        <Switch>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                            <Route path="/products">
                                <ProductList />
                            </Route>
                            <Route path="/checkout">
                                <Checkout />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            {/* home path / will match all the routes */}
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            {/* match all, but use for not found page, should be last one" */}
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>

                        <Footer year={2022} company="ShopMall" locations = { ['BLR', 'Chennai']} />
                    </div>
                </ThemeContext.Provider>
            </Router>
        )
    }
}
// while importing, no brace
export default App;