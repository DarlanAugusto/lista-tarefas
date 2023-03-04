import React, { Component } from 'react';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';

import './Form.css';

export default class Form extends Component {
  state = {
    newTask: '',
    tasks: ['Faculdade', 'Trabalhar', 'Academia', 'Estudar'],
  };

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (!newTask || tasks.indexOf(newTask) !== -1) return;

    tasks.push(newTask);
    this.setState({ tasks });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div>
        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            onChange={this.handleInputChange}
            value={newTask}
          />
          <button className="button" type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaTrashAlt className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
