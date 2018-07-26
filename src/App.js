import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import images from './images.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'

import Title from './components/Title'
import Card from './components/Card'



class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    currentScore: 0,
    images: images,
    unselectedimages: images
}




  
  render() {
    return (
      <Wrapper>
        <Navpills/>
         <Title />
         {
                    this.state.images.map(image => (
                        <Card
                            id={image.id}
                            image={image.image}
                            selectimage={this.selectimage} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
         </Wrapper>
    );
  }
}

export default App;
