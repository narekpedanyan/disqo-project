import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ActionButton = ({
  styleType = 'default',
  clickHandler = () => null,
  type = 'button',
  className = '',
  label
}) => {
  return (
    <button
      className={`act-btn ${styleType} ${className}`}
      onClick={clickHandler}
      type={type}
    >
      {label}
    </button>
  )
}

ActionButton.propTypes = {
  clickHandler: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
};

export default ActionButton;

