import React, { Component } from 'react';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';

import './Form.css';

export default class Form extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { tasks, index } = this.state;
    const newTasks = [...tasks];
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (!newTask) return;

    if (index !== -1) {
      newTasks[index] = newTask;

      this.setState({
        tasks: newTasks,
        newTask: '',
        index: -1,
      });

      return;
    }

    if (tasks.indexOf(newTask) !== -1) return;

    this.setState({
      tasks: [...newTasks, newTask],
      newTask: '',
      index: -1,
    });
  };

  handleEdit = (event, index) => {
    const { tasks } = this.state;

    this.setState({
      newTask: tasks[index],
      index,
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
                <FaEdit
                  className="edit"
                  onClick={(event) => this.handleEdit(event, index)}
                />
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
