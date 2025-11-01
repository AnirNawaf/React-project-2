import React from 'react';
import Products from './Products';

const Product = ({ product, handleCartUpdate}) => {


    const { name, category, price, image, rating, description } = product;

    return (
        <div>
            <div className=" card bg-base-100  shadow-sm">
                <figure>
                    <img className='w-96 h-52 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="flex gap-3">
                        <div className="badge badge-success">
                            <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></polyline></g></svg>
                            {rating}
                        </div>

                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">${price}</div>
                        
                    </div>
                    <div className='flex gap-10 mt-6'>
                            <button onClick={() => handleCartUpdate()} className="btn btn-dash btn-info">Add to Cart</button>
                            <button className="btn btn-soft btn-success"> Buy Now</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Product;