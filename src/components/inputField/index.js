import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const InputField = ({
  placeholder = 'Type something here',
  maxCharacterCount = 10,
  onChangeHandler = () => null,
  type = 'text',
  name = '',
  error = ''
}) => {
  return (
    <label className="field-label">
      <input
        onChange={(evt) => onChangeHandler(evt)}
        maxLength={maxCharacterCount}
        placeholder={placeholder}
        className="input-item"
        name={name}
        type={type}
      />
      {
        error && (<p className="err">{error}</p>)
      }
    </label>
  )
}

InputField.propTypes = {
  maxCharacterCount: PropTypes.number,
  onChangeHandler: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default InputField;
