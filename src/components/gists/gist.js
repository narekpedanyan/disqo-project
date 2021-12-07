import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {validateRules} from "../../constants/validateRules";
import InputField from "../inputField";
import TextArea from "../textArea";
import {styleTypes} from "../../constants/actionButtonStyleTypes";
import ActionButton from "../actionButton";

const Gist = ({ rawUrl }) => {
  const initialData = useRef({});
  const [data, setData] = useState({});
  const { title, content } = data;
  useEffect(
    () => {
      fetch(rawUrl).then((response) => {
        return response.json();
      }).then((data) => {
        setData(data);
        initialData.current = data;
      })
    },
    []
  );
  return (
    <React.Fragment>
      <div className="title-holder">
        <InputField
          maxCharacterCount={validateRules.titleMaxCharacterCount}
          value={title}
          onChangeHandler={() => null}
        />
        <ActionButton
          label="Delete"
          styleType={styleTypes.typeB}
        />
      </div>
      <div className="content-holder">
        <TextArea
          maxCharacterCount={validateRules.contentMaxCharacterCount}
          value={content}
          onChangeHandler={() => null}
          name="content"
        />
      </div>
    </React.Fragment>
  )
}

Gist.propTypes = {
  rawUrl: PropTypes.string.isRequired
};

export default Gist;
