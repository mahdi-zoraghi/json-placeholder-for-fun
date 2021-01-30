import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import GlobalStyle from "./GlobalStyle"
import App from "./App"
import store from "./redux/store"

ReactDOM.render(
  <GlobalStyle>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </GlobalStyle>,
  document.getElementById("root")
)
