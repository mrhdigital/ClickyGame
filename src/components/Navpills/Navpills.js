import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-fill">
            <li className ="left-nav"> Clicky Game</li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
             {props.message}
            </li>
           
            <li className = "score">  Score: <span style={{color: "yellow"}}>{props.currentScore}</span>  | Top Score: {props.topScore} </li>
        </ul>
    </div>
);

export default Navpills;

