import React, {useEffect} from 'react';

// products, addToCart, addToFav are props, passed by container component
function ProductList({products, addToCart,  fetchProducts, addToFav}) {
        console.log('ProductList render')
        
        // we want fetchProducts to be called once per component
        // useEffect called on mount/creation stage, on update stage
        // if we want useEffect to be called only once, during creattion stage,
        // use dependent variable [], ensure that useEffect not called on update
        useEffect( () => {
            console.log("Product list render use Effect")
            fetchProducts()
        }, [])

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