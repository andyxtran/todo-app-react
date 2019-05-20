import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';
import TodoLink from './todo-link';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filtered: PropTypes.bool,
  onClickDelete: PropTypes.func,
  onClickTodo: PropTypes.func,
  status: PropTypes.string,
  text: PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filtered: false,
  onClickDelete: noop,
  onClickTodo: noop,
  status: '',
  text: '',
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({ filtered, onClickDelete, onClickTodo, onClickArchive, status, text }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo--status-complete' : '')
    + (filtered ? ' todo--filtered' : '');
  
  const isCompleted = todoCls === 'todo todo--status-complete' ? true : false; 

  return (
    <li className={todoCls}>
      <TodoLink text={text} onClick={onClickTodo} />
      { 
        isCompleted &&
        <Button 
          className="archive-button"
          text="Archive"
          onClick={onClickArchive}
        /> 
      }
      <Button className="delete-button" text="delete" onClick={onClickDelete} />
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
