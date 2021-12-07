import React from 'react';
import './index.scss';
import InputField from "../../components/inputField";
import ActionButton from "../../components/actionButton";
import { styleTypes } from '../../constants/actionButtonStyleTypes';
import AddNote from "../../components/addNote";

const Home = () => {

  return (
    <section className="home-page">
      <div className="container">
        <h1 className="page-heading">Notepad Application</h1>
        <div className="page-content">
          <h3 className="notepad-title">Notepad Title</h3>
          <div className="top-row">
            <div>
              <InputField />
            </div>
            <div className="action-buttons">
              <ActionButton
                label="View Stats"
              />
              <ActionButton
                label="Save"
                styleType={styleTypes.typeA}
              />
              <ActionButton
                label="Delete"
                styleType={styleTypes.typeB}
              />
            </div>
          </div>
          <AddNote />
        </div>
      </div>
    </section>
  )
}

export default Home;
