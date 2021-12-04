import React, { useEffect } from 'react';
import {lightTheme} from "../../constants/themes";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "../home";

function App() {
  const setDefaultThemeColors = () => {
    const rootEl = document.getElementsByTagName('html')[0];
    let dynamicVarsStr = '';
    Object.keys(lightTheme).forEach(
      (item) => {
        dynamicVarsStr += `${item}: ${lightTheme[item]};`;
      }
    );
    rootEl.setAttribute('style', dynamicVarsStr);
  }
  useEffect(() => setDefaultThemeColors(), []);
  return (
    <main className="application">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
