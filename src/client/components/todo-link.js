import PropTypes from 'prop-types';
import React from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.string,
  text: PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onClick: noop,
  checked: '',
  text: '',
};

/**
 * Link component
 * @returns {ReactElement}
 */
const TodoLink = ({ text, onClick, status }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo-link';

  const isChecked = status === 'complete' ? 'checked' : '';

  return (
    <div className={baseCls} onClick={onClick}>
      <input type="checkbox" checked={isChecked} onChange={onClick}/>
      <label>{text}</label>
    </div>
  );
};

TodoLink.propTypes = propTypes;
TodoLink.defaultProps = defaultProps;

export default TodoLink;
