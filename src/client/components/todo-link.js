import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import green from '@material-ui/core/colors/green';

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
      <Checkbox checked={isChecked} onChange={onClick} />
      <label>{text}</label>
    </div>
  );
};

TodoLink.propTypes = propTypes;
TodoLink.defaultProps = defaultProps;

export default TodoLink;
