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
import Flow from "../explorer/flow";


const ExplorerHome = () => {

    return (
      <>
      <SignedIn>
      <ExplorerHeader/>
      <Welcome />
      <Data />
      <Flow />
      <Footer />
      </SignedIn>
      <SignedOut>
      <meta http-equiv = "refresh" content = "0; url = /" />
      </SignedOut>
      </>
    )
  }

export default ExplorerHome