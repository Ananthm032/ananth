import React from "react"
import Signin from "./route/Signin"
import {Routes,Route} from 'react-router-dom'


export default function App (){
    return(
  <div>
  <Routes>
<Route exact path="/signin" element={<Signin/>} />
</Routes>
</div>
    )
}
