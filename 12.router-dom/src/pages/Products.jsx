import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products'

function Products() {
    return (
        <div>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))
            }
        </div>
    )
}

export default Products