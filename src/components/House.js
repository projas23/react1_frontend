import React, { useState, useEffect } from "react";
import Enquiry from "./Enquiry";

const House = (props) => {
    const [showEnquiry, setShowEnquiry] = useState(false);

    // Assuming paramObj is a prop, otherwise you need to define or obtain it from somewhere.
    const { paramObj } = props;

    useEffect(() => {
        if (paramObj && paramObj.id !== undefined && sessionStorage.getItem('role') === 'customer') {
            setShowEnquiry(true);
        }
    }, [paramObj]);

    // Logging for debugging purposes
    console.log(props.houseInfo);

    // Handling the loading state
    if (!props.houseInfo) {
        return <h1>Loading...</h1>;
    }

    // Constructing the image path
    const imagePath = `/img/${props.houseInfo.photo}`;

    return (
        <div className="row">
            <div className="col-sm-7">
                {props.houseInfo.address}
            </div>
            <div className="col-sm-5">
                Price: {props.houseInfo.price}
            </div>
            <div className="col-sm-7">
                <img src={imagePath} className="img-fluid" alt="house" />
            </div>
            <div className="col-sm-5">
                <p>
                    {props.houseInfo.description}
                </p>
                {showEnquiry && <Enquiry address={props.houseInfo.address} />}
            </div>
        </div>
    );
}

export default House;
