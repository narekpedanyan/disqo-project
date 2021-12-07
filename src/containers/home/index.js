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
    data: [],
    loading: 'initial',
    error: false
  });
  const { data, loading, error } = state;


  const getGists = () => {
    setState((prev) => {
      return (
        { loading: 'loading' }
      )
    });
    fetch(
      `https://api.github.com/users/narekpedanyan/gists`,
    ).then((response) => {
      const { ok } = response;
      if (ok) {
        setState((prev) => {
          return (
            { loading: 'fulfilled' }
          )
        });
      }
      return response.json();
    }).then((data) => {
      setState((prev) => {
        return ({ data })
      });
    });
  }
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
          <AddNote />
          <Gists data={data} />
        </div>
      </div>
    </section>
  )
}

export default Home;
