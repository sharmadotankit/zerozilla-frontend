import React, { useContext, useEffect } from 'react'
import { ApplicationContext } from '../../context/context';
import Loading from '../../component/Loading/Loading';
import ProductCardComponent from '../../component/ProductCardComponent/ProductCardComponent'; 
import { useNavigate } from 'react-router-dom';

export default function ProductsForCategory() {
    const {selectedCategory,productsForCategory,setSelectedProduct} = useContext(ApplicationContext);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!selectedCategory){
            navigate("/home");
        }
    },[selectedCategory])


    const handleProductClick = (item) =>{
      if(item.id){
        setSelectedProduct(item);
        navigate(`/product-details/${item.id}`);
      }

    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Products for {selectedCategory}</h1>
        <div>
            {productsForCategory && productsForCategory?.length>0?
            <>
            {productsForCategory.map((item, i) => {
            return (
              <span onClick={() => handleProductClick(item)} key={i}>
                <ProductCardComponent
                  item={item}
                />
              </span>
            );
          })}
            </>
            :
            <>
                <Loading/>
            </>
            }
        </div>
    </div>
  )
}
