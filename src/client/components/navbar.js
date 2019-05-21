import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filterBy: PropTypes.string,
  onClickFilter: PropTypes.func,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filterBy: '',
  onClickFilter: noop,
};

/**
 * Navbar component
 * @returns {ReactElement}
 */
const Navbar = ({ filterBy, onClickFilter }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'navbar'

  
  let allLinkCls = `${baseCls}__item`;
  allLinkCls += filterBy === 'all' || window.location.href.endsWith('3000/') 
    ? ` ${baseCls}__item--active`
    : '';

  let activeLinkCls = `${baseCls}__item`;
  activeLinkCls += filterBy === 'active' || window.location.href.endsWith('/active')
   ? ` ${baseCls}__item--active` 
   : '';

  let completedLinkCls = `${baseCls}__item`;
  completedLinkCls += filterBy === 'completed' || window.location.href.endsWith('/completed')
    ? ` ${baseCls}__item--active` 
    : '';

  let archivedLinkCls = `${baseCls}__item`;
  archivedLinkCls += filterBy === 'archived' || window.location.href.endsWith('/archived')
    ? ` ${baseCls}__item--active`
    : '';

  return (
    <div className={baseCls}>
      <NavLink
        to='/'
        activeClassName={allLinkCls}
        className={allLinkCls}
        onClick={() => onClickFilter('all')}
      >
        All
      </NavLink>
      <NavLink
        to='/active'
        className={activeLinkCls}
        onClick={() => onClickFilter('active')}
      >
        Active
      </NavLink>
      <NavLink
        to='/completed'
        className={completedLinkCls}
        onClick={() => onClickFilter('completed')}
      >
        Completed
      </NavLink>
      <NavLink
        to='/archived'
        className={archivedLinkCls}
        onClick={() => onClickFilter('archived')}
      >
        Archived
      </NavLink>
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
