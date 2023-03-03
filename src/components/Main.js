import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleInputChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input type="text" onChange={this.handleInputChange} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
