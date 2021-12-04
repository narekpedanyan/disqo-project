import React, { useState, useCallback } from 'react';
import InputField from "../inputField";
import TextArea from "../textArea";
import ActionButton from "../actionButton";
import { styleTypes } from '../../constants/actionButtonStyleTypes';
import { validateRules } from '../../constants/validateRules';
import getErrorMessage from '../../helpers/getErrorMessage';
import './index.scss';

const AddNote = () => {
  const initialData = {
    title: '',
    content: ''
  };
  const [state, setState] = useState({
    params: initialData,
    error: initialData
  });
  const { params, error } = state;
  console.log(state, 'state');
  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;
      setState(prev => ({
        ...prev,
        params: {
          ...prev.params,
          [name]: value
        },
        error: initialData
      }));
    },
    []
  );

  const submit = useCallback(
    () => {
      Object.keys(params).forEach(
        (item) => {
          const currentValue = params[item];
          const isEmpty = currentValue.length === 0;
          console.log(currentValue, 'currentValue');
          console.log(validateRules[`${item}MaxCharacterCount`], 'max char count')
          const isOvered = currentValue.length > validateRules[`${item}MaxCharacterCount`];
          if (!isEmpty && !isOvered) {
            // Post request
          } else {
            const errorFieldName = isEmpty ? 'empty' : 'overed';
            const errMessage = getErrorMessage(item, errorFieldName);
            setState(prev => {
              return {
                ...prev,
                error: {
                  ...prev.error,
                  [item]: errMessage
                }
              }
            })
          }
        }
      )
    },
    [params, setState]
  );

  return (
    <div className="add-note-form">
      <p>My Notes</p>
      <InputField
        maxCharacterCount={validateRules.titleMaxCharacterCount}
        placeholder="Enter note title"
        onChangeHandler={handleChange}
        error={error.title}
        name="title"
      />
      <TextArea
        maxCharacterCount={validateRules.contentMaxCharacterCount}
        onChangeHandler={handleChange}
        placeholder="Enter note"
        error={error.content}
        name="content"
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

