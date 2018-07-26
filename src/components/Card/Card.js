import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
        <a onClick={() => props.selectimage(props.id)}
        >
        {props.message}
                <img alt={props.imagesimport.replace(".jpg", "")} src={require("../../imagesFolder/" + props.imagesimport)} />
        </a>
            
        </div>
    </div>
);

export default Card;
