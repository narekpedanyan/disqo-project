import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ActionButton = ({
  styleType = 'default',
  clickHandler = () => null,
  type = 'button',
  className = '',
  disabled,
  label
}) => {
  return (
    <button
      className={`act-btn ${styleType} ${className}`}
      onClick={disabled ? () => null : clickHandler}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  )
}

ActionButton.propTypes = {
  clickHandler: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string
};

export default ActionButton;

