import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default class Form extends Component {
  state = {
    novaTarefa: '',
  };

  handleInputChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <form action="#" className="form">
        <input
          type="text"
          className="input"
          onChange={this.handleInputChange}
          value={novaTarefa}
        />
        <button className="button" type="submit">
          <FaPlus />
        </button>
      </form>
    );
  }
}
