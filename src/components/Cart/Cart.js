import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    const totalReduce = (previous, programmer) => previous + programmer.salary;
    const total = cart.reduce(totalReduce, 0);
    return (
        <div>
            <div className="border border-secondary h-100 bg-white p-3 cart rounded">
                <h4><i className="fa fa-user"></i> Programmer added: {cart.length}</h4>
                <h4>Total Cost: ${total.toFixed(2)}</h4>
                <ul>
                    {
                        cart.map(programmer => <li className="list-unstyled">{programmer.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;