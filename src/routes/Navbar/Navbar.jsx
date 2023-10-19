import React,{useContext} from 'react'
import { Link,Outlet } from "react-router-dom";
import './Navbar.scss';
import {ApplicationContext} from "../../context/context";
import CartIcon from '../../component/CartIcon/CartIcon';
import ProfileIcon from '../../assets/profileIcon.png'

function Navbar() {
    const {} = useContext(ApplicationContext);



    return (
      <React.Fragment>
        <nav className="navigation">
            <Link to='/' className='app-title'>
                <h1>Store App</h1>
            </Link>
            <div className="nav-links-container">

                        <Link className='nav-link' to='/user-dashboard' >
                            <CartIcon/>
                        </Link>
                        <Link className='nav-link' to='/signup'>
                           <img src={ProfileIcon} height="30px" alt="profile-icon" />
                        </Link>
            </div>
        </nav>
        <Outlet/>
      </React.Fragment>
    )
}
export default Navbar;