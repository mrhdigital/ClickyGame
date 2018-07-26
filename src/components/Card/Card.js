import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
        {props.message}
                <img  src={require("../../imagesFolder/" + props.imagesimport)} />

            
        </div>
    </div>
);

export default Card;
