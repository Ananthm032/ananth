import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { StyledEngineProvider } from "@mui/material"

ReactDOM.render((
<StyledEngineProvider>
  <App/>
</StyledEngineProvider>),document.getElementById('root'));