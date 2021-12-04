import React, { useState, useCallback } from 'react';
import InputField from "../inputField";
import TextArea from "../textArea";
import ActionButton from "../actionButton";
import { styleTypes } from '../../constants/actionButtonStyleTypes';
import { validateRules } from '../../constants/validateRules';
import './index.scss';

const AddNote = () => {
  const [requestParams, setRequestParams] = useState({
    title: '',
    content: ''
  });

  const handleChange = useCallback(
    (evt) => {
      console.log(evt.target.value, 'event.>>')
    },
    []
  );

  const submit = useCallback(
    () => {
      console.log('>>>');
    },
    [requestParams]
  );

  return (
    <div className="add-note-form">
      <p>My Notes</p>
      <InputField
        maxCharacterCount={validateRules.titleMaxCharacterCount}
        placeholder="Enter note title"
        onChangeHandler={handleChange}
      />
      <TextArea
        maxCharacterCount={validateRules.contentMaxCharacterCount}
        onChangeHandler={handleChange}
      />
      <ActionButton
        styleType={styleTypes.typeC}
        clickHandler={submit}
        label="Add"
      />
    </div>
  )
}

export default AddNote;

