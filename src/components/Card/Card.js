import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
                <img  src={require("../../images/" + props.image)} />

            
        </div>
    </div>
);

export default Card;
