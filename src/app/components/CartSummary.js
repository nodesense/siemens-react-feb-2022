import React, {useState, useEffect} from 'react';

// useState is known as react hook, useful to maintain state within functional component 
// destructuring props to get  amount, totalItems
const CartSummary = ({amount, totalItems}) => {
    console.log('CartSummary Called ', amount, totalItems)
    //TODO: calculate discount, grandTotal

    // functional state, remmeber the state value within function
    
    // destructing array into variable
    const [discountValue, setDiscount] = useState(0)
    const [grandTotalValue, setGrandTotal] = useState(0)

    // called during mount, after component mounted v.dom into real dom
    // called during update cycle, after component v.dom updated into real dom
    useEffect( () => {
        console.log("UseEffect called for CartSummary")
        // this computing shall be performed every time render called, instead we want this computing done only when amount, totalItems changed
        const discount = amount * 3/100.0
        const grandTotal = amount - discount
        setDiscount(discount) // change the state data
        setGrandTotal(grandTotal) // change the state data
    })


    return (
        <div>
            <h4>Cart Summary</h4>
            <table>
                <tr>
                    <td>Total Items</td>
                    <td>{totalItems}</td>
                </tr>
                <tr>
                    <td>Amount</td>
                    <td>{amount}</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>{discountValue}</td>
                </tr>
                <tr>
                    <td>Grand Total</td>
                    <td>{grandTotalValue}</td>
                </tr>
            </table>
        </div>
    )
}

export default CartSummary;