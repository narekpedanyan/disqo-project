import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import InputField from "../../components/inputField";
import ActionButton from "../../components/actionButton";
import { styleTypes } from '../../constants/actionButtonStyleTypes';
import AddNote from "../../components/addNote";
import Gists from "../../components/gists";

const Home = () => {
  const requestData = useRef({
    per_page: 30,
    page: 1
  });
  const [state, setState] = useState({
    data: []
  });
  const { data } = state;

  const getGists = () => {
    fetch(
      `https://api.github.com/users/narekpedanyan/gists`,
    ).then((response) => {
      return response.json();
    }).then((data) => {
      setState((prev) => {
        return ({ ...prev, data })
      });
    });
  };

  useEffect(
    () => {
      getGists();
    },
    []
  );
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
          <AddNote reFetchGists={getGists}/>
          <Gists
            reFetchGists={getGists}
            data={data}
          />
        </div>
      </div>
    </section>
  )
}

export default Home;
