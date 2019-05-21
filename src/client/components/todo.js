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
const Todo = ({ 
    filtered, 
    onClickDelete, 
    onClickTodo, 
    onClickArchive,
    onClickUnarchive,
    status, 
    text, 
    archive 
  }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo--status-complete' : '')
    + (filtered ? ' todo--filtered' : '');

  const isClickable = archive !== undefined && archive ? null : onClickTodo;

  let archiveButton;

  if (status === 'complete' && archive) {
    archiveButton = 
      <Button 
        className="unarchive-button" 
        onClick={onClickUnarchive} 
        text="Unarchive"
      />;
  } else if (status === 'complete') {
    archiveButton = 
      <Button 
        className="archive-button" 
        onClick={onClickArchive} 
        text="Archive"
      />;
  }


  return (
    <li className={todoCls}>
      <TodoLink text={text} onClick={isClickable} status={status} />
      {archiveButton}
      <Button className="delete-button" text="delete" onClick={onClickDelete} />
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
