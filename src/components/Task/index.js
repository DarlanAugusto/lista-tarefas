/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import './Task.css';

export default function Task({ handleEdit, handleDelete, tasks }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit
              className="edit"
              onClick={(event) => handleEdit(event, index)}
            />
            <FaTrashAlt
              className="delete"
              onClick={(event) => handleDelete(event, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
