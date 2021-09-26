import React from 'react';

const Programmer = (props) => {
    const { age, country, img, role, salary, name } = props.programmer || {}
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="box">
                    <div className="img">
                        <img src={img} />
                    </div>
                    <h2 className="">{name}<br /><span>{role}</span></h2>
                    <div className="text-start">
                        <h3>Age: {age}</h3>
                        <h3>Country: {country}</h3>
                        <h3>Salary: ${salary}</h3>
                    </div>
                    <button onClick={() => props.handleAddProgrammer(props.programmer)} className="btn mb-2 text-start border rounded"> <i className="fa fa-cart-plus"></i> Add to cart</button>
                    <span>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Programmer;