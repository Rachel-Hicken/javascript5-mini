import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }



  render() {
    let allCars = this.state.cars.map((car,i)=>{
      return <div key={i}>{car.make}</div>
    })
    return (
      <div className="App">
        <button onClick={this.getCars()}>Get cars</button>
        {allCars}
      </div>
    );
  }
}

export default App;
