import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component
 */
const Header = ({ onClickFilter }) => {
  /**
   * Base CSS class
   * @returns {ReactElement}
   */
  const baseCls = 'header';

  return (
    <div className={baseCls}>
      <h1>
        <Link to="/" onClick={() => onClickFilter('all')}>MyTodos</Link>
      </h1>
    </div>
  )
};

export default Header;
