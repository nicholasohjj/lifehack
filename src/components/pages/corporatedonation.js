import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import ExplorerHeader from "../explorer/explorerHeader";
import Data from "../explorer/data";
import Footer from "../footer"
import { Div } from "atomize";
import Postcards from "../explorer/postcards";
import Form from "../corporatedonation/form";


const CorporateDonation = () => {

    return (
      <>
      <Div bg="background">
      <SignedIn>
      <ExplorerHeader/>
      <Form />      
      <Footer />
      </SignedIn>
      <SignedOut>
      <meta http-equiv = "refresh" content = "0; url = /" />
      </SignedOut>
      </Div>
      </>
    )
  }

export default CorporateDonation