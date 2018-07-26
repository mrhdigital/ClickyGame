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
     unselectedimages: imagesimport
}
componentDidMount() {
}
// function for randomly shuffling the images
shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// if you click on the card
selectimage = event => {
  const findimage = this.state.unselectedimages.find(item => item.id === event);

  if(findimage === undefined) {
    // failure to select a new image
    //if you click on a fish that has already been selected, the game is reset and cards reordered
    this.setState({ 
        message: "You guessed incorrectly!",
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        imagesState: imagesimport,
        unselectedimages: imagesimport
    });
}



  this.shuffleArray(imagesimport);
};

      


  
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
                            id={imagesimport.id}
                            imagesimport={imagecb.imag}
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
