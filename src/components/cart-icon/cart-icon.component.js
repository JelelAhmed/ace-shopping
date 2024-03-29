import { useContext } from 'react';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.contexts';

import './cart-icon.styles.scss';

const CartIcon = () => {
	const {cartOpen, setCartOpen, cartCount } = useContext(CartContext);
	const toggleCartOpen = () => setCartOpen(!cartOpen);

	return (
		<div onClick={toggleCartOpen} className='cart-icon-container'>
			<ShoppingIcon  className='shopping-icon'/>
			<span className='item-count'>{cartCount}</span>
		</div>
	)
};

export default CartIcon;