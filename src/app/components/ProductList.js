import React from 'react';

// products, addToCart, addToFav are props, passed by container component
function ProductList({products, addToCart, addToFav}) {
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
                        products.map (product => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => addToCart(product)}>
                                      +Cart
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => addToFav(product)}>
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

ProductList.defaultProps = {
    products: []
}

export default ProductList;