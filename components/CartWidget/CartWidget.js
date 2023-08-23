import React from 'react';
import cart from './assets/cart.png';

const CartWidget = () => {
    return (
            <div>
                <img src={cart} alt="CartWidget" />
                0
            </div>
    );
};

export default CartWidget;