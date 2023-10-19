import React,{useContext} from 'react'
import { Link,Outlet } from "react-router-dom";
import './Navbar.scss';
import {ApplicationContext} from "../../context/context";
import CartIcon from '../../component/CartIcon/CartIcon';
import ProfileIcon from '../../assets/profileIcon.png';
import CartDropdown from '../../component/CartDropDown/CartDropDown';

function Navbar() {
    const {showCart,setShowCart,cartItems} = useContext(ApplicationContext);



    return (
      <React.Fragment>
        <nav className="navigation">
            <Link to='/' className='app-title'>
                <h1>Store App</h1>
            </Link>
            <div className="nav-links-container">

                        <Link className='nav-link' onClick={()=> setShowCart(!showCart)}>
                            <CartIcon/>
                        </Link>
                        <Link className='nav-link'>
                           <img src={ProfileIcon} height="30px" alt="profile-icon" />
                        </Link>
            </div>
        </nav>
        {showCart?<><CartDropdown/></>:<></>}
        <Outlet/>
      </React.Fragment>
    )
}
export default Navbar;