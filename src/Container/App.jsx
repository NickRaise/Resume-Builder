import React, { Suspense } from 'react'
import {Routes , Route} from "react-router-dom"
import {Home , Authentication,Signup} from "../Pages"


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="Signup" element={<Signup/>}/>
      </Routes>
    </Suspense>
  );
};

export default App