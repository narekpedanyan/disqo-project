import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TextArea = ({
    maxCharacterCount = 30,
    onChangeHandler
  }) => {
  return (
    <label className="textarea" onChange={onChangeHandler}>
      <textarea className="area-field" maxLength={maxCharacterCount}/>
    </label>
  )
}

TextArea.propTypes = {
  onChangeHandler: PropTypes.func
}

export default TextArea;
