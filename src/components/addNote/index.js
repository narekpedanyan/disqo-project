import React, { useState, useCallback, useContext } from 'react';
import InputField from "../inputField";
import TextArea from "../textArea";
import ActionButton from "../actionButton";
import { styleTypes } from '../../constants/actionButtonStyleTypes';
import { validateRules } from '../../constants/validateRules';
import getErrorMessage from '../../helpers/getErrorMessage';
import './index.scss';
import {accessToken} from "../../constants/accessToken";
import {UIContext} from "../../context/uiContext";

const AddNote = () => {
  const { setData } = useContext(UIContext);
  const initialData = {
    title: '',
    content: ''
  };
  const [state, setState] = useState({
    params: {
      title: '',
      content: ''
    },
    error: initialData,
    loading: 'initial'
  });
  const { params, error, loading } = state;

  const createGist = () => {
    fetch(
      'https://api.github.com/gists',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${accessToken}`
        },
        body: JSON.stringify(
          {
            description: 'Some description',
            public: true,
            files: {
              'index.js': {
                content: JSON.stringify(params)
              }
            }
          }
        )
      }
    ).then((response) => {
      const { status } = response;
      if (status === 201) {
        setState(prev => {
          return ({
            ...prev,
            loading: 'fulfilled'
          })
        });
        setData(
          (prev) => {
            return ({
              ...prev,
              notifications: [{
                status: 'success',
                description: 'You have successfully created gist.'
              }]
            })
          }
        )
      }
      return response.json();
    }).then((data) => {
      console.log(data);
    });
  }

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
      let readyToCreate = false;
      Object.keys(params).forEach(
        (item) => {
          const currentValue = params[item];
          const isEmpty = currentValue.length === 0;
          const isOvered = currentValue.length > validateRules[`${item}MaxCharacterCount`];
          if (!isEmpty && !isOvered) {
            readyToCreate = true;
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
      );
      if (readyToCreate) {
        setState((prev) => {
          return ({
            ...prev,
            loading: 'loading'
          });
        });
      }
      createGist();
    },
    [params, setState, setData]
  );

  return (
    <div className="add-note-form">
      <p>My Notes</p>
      <InputField
        maxCharacterCount={validateRules.titleMaxCharacterCount}
        value={params.title}
        placeholder="Enter note title"
        onChangeHandler={handleChange}
        error={error.title}
        name="title"
      />
      <TextArea
        maxCharacterCount={validateRules.contentMaxCharacterCount}
        value={params.content}
        onChangeHandler={handleChange}
        placeholder="Enter note"
        error={error.content}
        name="content"
      />
      <ActionButton
        label={loading === 'loading' ? 'Loading ...' : 'Add'}
        disabled={loading === 'loading'}
        styleType={styleTypes.typeC}
        clickHandler={submit}
      />
    </div>
  )
}

export default AddNote;

