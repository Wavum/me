import React from "react";
import ReactDOM from "react-dom";
import SmoothScroll from "smooth-scroll";
import App from "./components";
import Context from "./store";
import { ThemeProvider, theme } from "./theme";
import data from "./store/data.json";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render((
    <Context.Provider value={data}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Context.Provider>
  ), document.getElementById("root"));

serviceWorker.unregister();

new SmoothScroll("[href*=\"#\"]", {
  speed: 400,
  updateURL: false
});