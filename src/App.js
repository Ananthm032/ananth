import React from "react"
import Root from "./route/Root"
import {Routes,Route} from 'react-router-dom'


export default function App (){
    return(
  <div>
  
  <Routes>
<Route exact path="/" element={<Signin/>} />
</Routes>

</div>
    )
}
