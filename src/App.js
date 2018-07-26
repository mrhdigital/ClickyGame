import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import imagesimport from './images1.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'

import Title from './components/Title'
import Card from './components/Card'



class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    currentScore: 0,
    imagesState: imagesimport,
    // unselectedimages: images
}




  
  render() {
    return (
      <Wrapper>
        <Navpills
        message={this.state.message}
        />
         <Title />
         {
                    this.state.imagesState.map(imagecb => (
                        <Card 
                        message={this.state.message}
                            //id={image.id}
                            imageprop={imagecb.imag}
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
