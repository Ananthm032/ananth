import React from "react"
import Write from "./route/ Write"
import {Routes,Route} from 'react-router-dom'


export default function App (){
    return(
  <div>
  
  <Routes>
<Route exact path="/" element={< Write/>} />
</Routes>

</div>
    )
}
