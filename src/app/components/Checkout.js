import React, {createRef} from 'react';

// Reference, 
// reference to real dom instance/object
// instance of div, canvas, chart etc
// setFocus

class Checkout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            address: '',
            city: ''
        }

        // when the ui appear, we want to set the focus to fullName
        this.fullName = createRef()
    }

    // we have to take form change event, take the value from real dom
    // then update the state, the virtual dom will push values to real dom
    changeHandler = (e) => {
        console.log("Input data ", e.target.name, e.target.value)

        const name = e.target.name 
        const value = e.target.value 
        // update the state,then v.dom updated automatically in render function
        this.setState ({
            [name]: value
        })
    }

    // react keyword, 
    // react component lifecycle
    // called after first mount, not called on updates
    componentDidMount() {
        console.log("checkout component did mount")
        // create ref, will have an attribute called "current"
        // "current" is dom element = document.getElementById("fullName")
        // getElementById is not recommened, it may fetch element anywhere in webpage, violation of single responsible
    
        // current is refering input dom
        this.fullName.current.focus ()
    
    }

    render() {
        console.log('Checkout render')
        // Uni Directtion 
        // Data Moved from Virtual DOM to REAL DOM
        // IN V.DOM we have state value
        return (
            <div>
            <h2>Checkout</h2>
            <form >
                Full Name <input name="fullName" 
                                 type="text" 
                                 value={this.state.fullName} 
                                 onChange={this.changeHandler}
                                 ref = {this.fullName}
                                 />
                Address <input name="address" 
                               type="text" 
                               value={this.state.address}
                               
                               onChange={this.changeHandler}
                               />
                City 
                <select name="city" value={this.state.city} 
                               onChange={this.changeHandler}>
                    <option value=""></option>
                    <option value="BLR">Bengaluru</option>
                    <option value="MUM">Mumbai</option>
                    <option value="CHE">Chenai</option>
                </select>
                
            </form>
            </div>
        )
    }
}

export default Checkout;