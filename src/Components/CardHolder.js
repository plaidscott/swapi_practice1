import React, { Component } from 'react';

import Card from "./Card.js";

import '../styles/CardHolder.css';

class CardHolder extends Component {
  render() {
    return (
      <div className="CardHolder">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    )
  }
}

export default CardHolder;
