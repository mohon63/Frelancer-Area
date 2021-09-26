import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    console.log(cart)
    return (
        <div>
            <h4><i class="fa fa-user"></i> Programmer added: {cart.length}</h4>
            <ul>
                {
                    cart.map(programmer => <li>{programmer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;