import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import ExplorerHeader from "../explorer/donationHeader";
import Welcome from "../explorer/welcome";
import Footer from "../footer"
import { Div } from "atomize";
import Postcards from "../explorer/postcards";


const ExplorerHome = () => {

    return (
      <>
      <Div bg="background">
      <SignedIn>
      <ExplorerHeader/>
      <Welcome />
      <Postcards />
      <Footer />
      </SignedIn>
      <SignedOut>
      <meta http-equiv = "refresh" content = "0; url = /" />
      </SignedOut>
      </Div>
      </>
    )
  }

export default ExplorerHome