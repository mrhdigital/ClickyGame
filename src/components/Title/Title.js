import React from "react";
import "./Title.css";

const Title = props => (
    <div className="jumbotron jumbotron-fluid background-img">
    <div className= "container">
        <h1 className ="display-4"> Clicky Memory Game!</h1>
        <p className ="lead">Click on an image to earn points, but don't click on any image more than once!</p>
        </div>
    </div>
);

export default Title;

