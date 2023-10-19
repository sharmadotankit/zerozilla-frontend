import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import './CartDropDown.scss';
import { ApplicationContext } from '../../context/context';

function CartDropdown(){
  const {cartItems} = useContext(ApplicationContext);
  return <div className='cart-dropdown'>
  <div className='cart-items'>
    {cartItems?.length ? (
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
    ) : (
      <span className='empty-message'>Your cart is empty</span>
    )}
  </div>
  </div>
}
  

export default CartDropdown;