import React, { useContext } from "react";

import "./CartItem.scss";
import deleteIcon from '../../assets/deleteIcon.png';
import { ApplicationContext } from "../../context/context";

function CartItem({ item: { image, price, id,title, quantity } }) {
  const { cartItems,setCartItems} = useContext(ApplicationContext);
    
  const handleDeleteItemClick = (id)=>{

    let newCartItem = [...cartItems];
    for(let i=0;i<newCartItem?.length;i++){
        if(newCartItem[i].id==id){
          newCartItem.splice(i, 1);
        }
    }
    setCartItems(newCartItem)
  }

  return (
    <div className="cart-item">
      <img src={image} alt="item" />
      <div className="item-details">
        <span className="name">
          {title?.length > 30 ? title.substring(0, 30) + "..." : title}
        </span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <img src={deleteIcon} height='30px' style={{marginTop:'20px'}} onClick={()=> handleDeleteItemClick(id)} alt="delete-icon"/>
    </div>
  );
}

export default CartItem;
