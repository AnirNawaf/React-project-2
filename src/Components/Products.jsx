import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({handleCartUpdate}) => {
    const[products, setProducts]= useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setProducts(data));
    }, [])
    console.log(products);

    return (
        
        <div className='grid grid-cols-3 justify-center gap-10 my-8'>
            {
                products.map((product) => <Product handleCartUpdate = {handleCartUpdate}
                product={product}></Product>)
            }
        </div>
    );
};

export default Products;