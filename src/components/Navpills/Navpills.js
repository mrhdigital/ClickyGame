import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-fill">
            <li className ="left-nav"> Clicky Game</li>
            
            <li className = "score">  Score:  | Top Score: </li>
        </ul>
    </div>
);

export default Navpills;

