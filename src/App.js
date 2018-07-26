import React, { Component } from 'react';
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
                images: images,
                unselectedimages: images
            });
        }
        else {
            // success to select a new image
            //if you click on an available image, your score is increased and cards are reordered
            const newimages = this.state.unselectedimages.filter(item => item.id !== event);
            
            this.setState({ 
                message: "You guessed correctly!",
                currentScore: this.state.currentScore + 1,
                images: images,
                unselectedimages: newimages
            });
        }

        this.shuffleArray(images);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
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

