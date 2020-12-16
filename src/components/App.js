import React, { Component } from 'react';
import './App.css';
import './style.less';
import './style.scss';
import img from './1.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <h2>Image from html</h2>
        <img src={img} alt="Hotdog" width="150" />
        <h2>Image from Css</h2>
        <div className="product"></div>
        <h3>Less style</h3>
        <div className="text-styles">
          Text Text Text Text
          <span>Text Text</span>
        </div>
        <h3>Sass style</h3>
        <div className="text">
          Text Text Text Text
          <span>Text Text</span>
        </div>
      </div>
    );
  }
}
