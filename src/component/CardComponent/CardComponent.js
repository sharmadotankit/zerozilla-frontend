import React from 'react';
import './CardComponent.scss';
import jwelleryImage from '../../assets/jewellery.jpg';
import menImage from '../../assets/mens-category.jpg';
import womenImage from '../../assets/women-catagory.jpg';
import electronicsImage from '../../assets/electronicsImage.webp';


function CardComponent({category}) {
    let selectedImage = '';
    switch(category){
        case 'electronics' :   selectedImage = electronicsImage;
                        break;
        case 'jewelery' : selectedImage = jwelleryImage;
                        break;
        case "men's clothing" :   selectedImage = menImage;
                        break;
        case "women's clothing" :   selectedImage = womenImage;
                        break;
        default : selectedImage = jwelleryImage;
    }

    return (
        <div className='card-container-category' >
            <img src={selectedImage} alt={category} />
            <h3>{category}</h3>
        </div>
    );
}

export default CardComponent;