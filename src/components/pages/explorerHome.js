import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    useUser
  } from "@clerk/clerk-react";
import ExplorerHeader from "../explorer/explorerHeader";
import Welcome from "../explorer/welcome";



const ExplorerHome = () => {

    return (
      <>
      <SignedIn>
      <ExplorerHeader/>
      <Welcome />
      </SignedIn>
      <SignedOut>
      <meta http-equiv = "refresh" content = "0; url = /" />
      </SignedOut>
      </>
    )
  }

export default ExplorerHome