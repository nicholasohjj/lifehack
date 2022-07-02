import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import ExplorerHeader from "../explorer/explorerHeader";
import Welcome from "../explorer/welcome";
import Data from "../explorer/data";
import Footer from "../footer"
import Introducing from "../frontpage/introducing";
import { Div } from "atomize";


const ExplorerHome = () => {

    return (
      <>
      <Div bg="background">
      <SignedIn>
      <ExplorerHeader/>
      <Welcome />
      <Data />
      <Introducing />
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