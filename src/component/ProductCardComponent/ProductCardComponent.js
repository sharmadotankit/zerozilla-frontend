import React from 'react';
import './ProductCardComponent.scss';



function ProductCardComponent({item}) {
    const {image,title,price} = item;
    return (
        <div className='product-container-category' >
            <img src={image} alt='product' height="200px" />
            <h3>{title}</h3>
            <h2>$ {price}</h2>
        </div>
    );
}

export default ProductCardComponent;