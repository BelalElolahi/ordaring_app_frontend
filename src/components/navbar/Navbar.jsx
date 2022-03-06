import React from 'react';
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavDropdown, NavItem } from 'react-bootstrap';
import { logoutUser } from '../../actions/userActions';

export default function Navbar() {
    const userState = useSelector(state => state.LoginUserReducer);
    const { currentUser } = userState;

    const cartState = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    return (
        <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded  ">
            <a className="navbar-brand" href="/">PIZZA</a>
            <button className="navbar-toggler"
                type="button" data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav"  >
                <ul className="navbar-nav ml-1 ">
                    <li className="nav-item active ">
                        {currentUser ? (<NavDropdown title={currentUser.user.name}>
                            <NavItem href="/orders">Orders</NavItem>
                            <NavItem  onClick={() => dispatch(logoutUser())}>Logout</NavItem>

                            
                        </NavDropdown>)
                            : (<a className="nav-link" href="/login">Login </a>)


                        }
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart {cartState.cartItems.length}</a>
                    </li>  

                </ul>
            </div>
        </nav>
    )
}
