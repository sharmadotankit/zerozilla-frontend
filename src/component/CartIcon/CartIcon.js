import React, { useContext } from 'react'
import cartIcon from '../../assets/cartIcon.png';
import { ApplicationContext } from '../../context/context';


export default function CartIcon() {
    const { cartItems} = useContext(ApplicationContext);
    
  return (
    <span style={{display:'flex',alignItems:'center',marginBottom:'8px'}}>
    <img  src={cartIcon} height='30px' alt="cart-icon"/>
    <p style={{position:'relative',top:0,right:0,fontSize:'12px',background:"red",borderRadius:'10px',marginTop:'-5px',padding:"4px 6px"}}>{cartItems?cartItems.length:0}</p>
    </span>
  )
}
