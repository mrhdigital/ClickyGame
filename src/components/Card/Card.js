import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectimage(props.id)} 
                className={props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                {/* <img alt={props.id} src={props.image} />     use this line to dispaly images in test.JSON*/}
                <img alt={props.image.replace(".jpg", "")} src={require("../../imagesFolder/" + props.image)} />

            </a>
        </div>
    </div>
);

export default Card;
