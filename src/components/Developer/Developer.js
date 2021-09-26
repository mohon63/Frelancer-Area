import React, { useEffect, useState } from 'react';
import '../Programmer/Programmr.css'
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';

const Developer = () => {
    const [programmers, setProgrammers] = useState([]);

    // state declare for cart
    const [cart, setCart] = useState([]);

    const handleAddProgrammer = (programmer) => {
        const newCart = [...cart, programmer]
        setCart(newCart);
    }

    useEffect(() => {
        fetch('./developerData.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                programmers.map(programmer => <Programmer
                                    key={programmer.key}
                                    handleAddProgrammer={handleAddProgrammer}
                                    programmer={programmer}
                                ></Programmer>)
                            }

                        </div>
                    </div>

                    <div className="col-md-3">
                        <Cart
                            cart={cart}
                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;