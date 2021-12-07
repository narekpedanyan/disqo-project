import React, { useEffect, useState } from 'react';
import {lightTheme} from "../../constants/themes";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "../home";
import UserNotification from "../../components/userNotification";
import {initialValue, UIContext} from "../../context/uiContext";

function App() {
  const [ctxData, setCtxData] = useState(initialValue);
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
    <UIContext.Provider value={{ data: ctxData, setData: setCtxData }}>
      <main className="application">
        <UserNotification />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </UIContext.Provider>
  );
}

export default App;
