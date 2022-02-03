import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { clearCartItem } from '../../redux/cart/cart.actions'
import { addItem, removeItem } from '../../redux/cart/cart.actions';
const CheckoutItem = ({ cartItem, clearItem, addOne, removeOne }) => {
    const {name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={()=> removeOne(cartItem)}className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={()=>addOne(cartItem)} className='arrow'>&#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <div onClick={()=>clearItem(cartItem)}className='remove-button'>&#10005;</div>
        </div>
    )
}


const mapDispatchToState = (dispatch) => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addOne: item=> dispatch(addItem(item)),
    removeOne: item=> dispatch(removeItem(item))
})
export default connect(null,mapDispatchToState)(CheckoutItem);
