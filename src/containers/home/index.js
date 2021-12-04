import React from 'react';
import './index.scss';
import InputField from "../../components/inputField";

const Home = () => {
  return (
    <section className="home-page">
      <div className="container">
        <h1 className="page-heading">Notepad Application</h1>
        <div className="page-content">
          <div className="top-row">
            <div>
              <InputField />
            </div>
            <div>
              <button type="button">View Stats</button>
              <button type="button">Save</button>
              <button type="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
