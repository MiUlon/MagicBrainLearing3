import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageFormLink from './Components/ImageFormLink/ImageFormLink';
import FaceDetection from './Components/FaceDetection/FaceDetection';
import './App.css';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

window.process = {};

const app = new Clarifai.App({
  apiKey: '82819b6c8d2d4417abbdebb80e6a3cdc'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  };

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  putBoxOnFace = (box) => {
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input)
      .then(response => this.putBoxOnFace(this.calculateFaceLocation(response)))
      .catch(error => console.log(error))
  };

  render() {
    return(
      <div>
        <ParticlesBg type="fountain" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageFormLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceDetection putBoxOnFace={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    )
  }
}

export default App;
