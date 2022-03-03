import React from 'react';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    addToCart = (product) => {

    }

    
    addToFav = (product) => {
        
    }

    render() {
        console.log('ProductList render')
        return (
            <div>
                <h2>Product List</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>+Cart</th>
                        <th>+Fav</th>
                    </tr>
                    {
                        this.state.products.map (product => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => this.addToCart(product)}>
                                      +Cart
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => this.addToFav(product)}>
                                      +Fav
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}

export default ProductList;