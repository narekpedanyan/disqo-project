import React, { useEffect, useState, useRef } from 'react';
import {validateRules} from "../../constants/validateRules";
import InputField from "../inputField";
import TextArea from "../textArea";

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

export default Gist;
