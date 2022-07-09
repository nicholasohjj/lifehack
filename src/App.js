import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import ExplorerHome from "./components/pages/explorerHome";
import Frontpage from "./components/pages/frontpage";
import Docs from "./components/pages/docs"; 
import CorporateDonation from "./components/pages/corporatedonation";
import {
  ClerkProvider,
} from "@clerk/clerk-react";
import PersonalDonation from "./components/pages/personaldonation";
import listingservice from "./services/listingservice";

const App = () => {
  const [allListings, setallListings] = useState([])
  const hook = () => {
    listingservice
      .getAll()
      .then(response=>setallListings(response))
  }

  
  useEffect(hook,[])

  const frontendApi = "clerk.quiet.tuna-4.lcl.dev"
  return (
    
    <>
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
    <Routes>
      <Route path ="/login" element = {<Login/>} />
      <Route path ="/docs" element={<Docs />} />
      <Route path = "/home" element = {<ExplorerHome />} />
      <Route path = "/corporate" element = {<CorporateDonation />} />
      <Route path = "/personal" element = {<PersonalDonation setallListings = {setallListings} />} />
      <Route path ="/" element ={<Frontpage/>}/>
    </Routes>
    </ClerkProvider>

    </>
  )
}

export default App