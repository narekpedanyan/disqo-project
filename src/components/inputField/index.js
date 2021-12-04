import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const InputField = ({
                      placeholder = 'Type something here',
                      onChangeHandler = () => null,
                      type = 'text'
  }) => {
  return (
    <label className="field-label">
      <input
        onChange={(evt) => onChangeHandler(evt)}
        placeholder={placeholder}
        className="input-item"
        type={type}
      />
    </label>
  )
}

InputField.propTypes = {
  onChangeHandler: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default InputField;
