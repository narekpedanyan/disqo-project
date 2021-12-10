import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TextArea = ({
  placeholder = 'Type your text',
  maxCharacterCount = 30,
  onChangeHandler,
  error = '',
  name = '',
  value = ''
  }) => {
  return (
    <label className="textarea">
      <textarea
        maxLength={maxCharacterCount}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className="area-field"
        name={name}
        value={value}
      />
      {
        error && (<p className="err">{error}</p> )
      }
    </label>
  )
}

TextArea.propTypes = {
  maxCharacterCount: PropTypes.number,
  onChangeHandler: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string
}

export default TextArea;
