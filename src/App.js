import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import ExplorerHome from "./components/pages/explorerHome";
import Frontpage from "./components/pages/frontpage";
import Docs from "./components/pages/docs"; 
import {
  ClerkProvider,
} from "@clerk/clerk-react";

const App = () => {
  const frontendApi = "clerk.quiet.tuna-4.lcl.dev"
  return (
    
    <>
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
    <Routes>
      <Route path ="/login" element = {<Login/>} />
      <Route path ="/docs" element={<Docs />} />
      <Route path = "/home" element = {<ExplorerHome />} />
      <Route path ="/" element ={<Frontpage/>}/>
    </Routes>
    </ClerkProvider>


    </>
  )
}

export default App