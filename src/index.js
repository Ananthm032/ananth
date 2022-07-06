import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { StyledEngineProvider } from "@mui/material"
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render((
<StyledEngineProvider>
 <BrowserRouter>
      <App />
      </BrowserRouter>
</StyledEngineProvider>),document.getElementById('root'));
