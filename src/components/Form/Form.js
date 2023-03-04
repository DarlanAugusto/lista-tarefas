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

    const newTasks = [...tasks, newTask];

    this.setState({
      tasks: newTasks,
    });
  };

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: newTasks,
    });
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
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" onClick={this.handleEdit} />
                <FaTrashAlt
                  className="delete"
                  onClick={(event) => this.handleDelete(event, index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
