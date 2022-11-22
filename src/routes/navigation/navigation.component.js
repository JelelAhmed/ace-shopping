import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from "../../utils/firebase/firebase.util";

import { ReactComponent as AceLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';
import { CartContext } from "../../contexts/cart.contexts";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { cartOpen, setCartOpen } = useContext(CartContext);
	console.log(cartOpen);


	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to='/'>
					<AceLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to='shop'>
						SHOP
					</Link>
					{
						currentUser ? (
							<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
						) : (
							<Link className="nav-link" to={'/auth'}>
								SIGN IN
							</Link>
						)
					}
					<CartIcon />
				</div>
				{cartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;