import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ newTask, handleSubmit, handleInputChange }) {
  return (
    <div>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          onChange={handleInputChange}
          value={newTask}
        />
        <button className="button" type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  newTask: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
