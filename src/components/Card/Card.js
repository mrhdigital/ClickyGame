import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
        {props.message}
                <img  src={require("../../images/" + props.imageprop)} />

            
        </div>
    </div>
);

export default Card;
