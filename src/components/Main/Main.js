/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Form from '../Form/Form';

import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>To-do List</h1>
        <Form />
      </div>
    );
  }
}
