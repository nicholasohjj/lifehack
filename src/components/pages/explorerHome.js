import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import ExplorerHeader from "../explorer/explorerHeader";



const ExplorerHome = () => {

    return (
      <>
      <SignedIn>
      <ExplorerHeader/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      </>
    )
  }

export default ExplorerHome