import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodItem from './FoodItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFoods: ['lettuce', 'carrots', 'beets', 'beans', 'air']
    }
  }
  render() {

    let favFoods = this.state.favoriteFoods.map( (item, i) => {
        return <FoodItem key={item+i} foodItem = {item}/>
    })

    return (
      <div className="App">
        <h1>My Favorite Food List:</h1>
        {favFoods}
      </div>
    );
  }
}

export default App;
