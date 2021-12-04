import React, { useEffect } from 'react';
import {lightTheme} from "./constants/themes";

function App() {
  const setDefaultThemeColors = () => {
    const rootEl = document.getElementsByTagName('html')[0];
    let dynamicVarsStr = '';
    Object.keys(lightTheme).forEach(
      (item) => {
        dynamicVarsStr += `${item}: ${lightTheme[item]}`;
      }
    );
    rootEl.setAttribute('style', dynamicVarsStr);
  }
  useEffect(() => setDefaultThemeColors(), []);
  return (
    <div>Hello world!</div>
  );
}

export default App;
