import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import ExplorerHeader from "../explorer/donationHeader";
import ListingsWelcome from "../mylistings/welcome";
import Footer from "../footer"
import { Div } from "atomize";
import MyPostcards from "../mylistings/myPostcards";
import DonationHeader from "../explorer/explorerHeader copy";


const MyListings = () => {

    return (
      <>
      <Div bg="background">
      <SignedIn>
      <ListingsWelcome />
      <DonationHeader />
      <MyPostcards />
      <Footer />
      </SignedIn>
      <SignedOut>
      <meta http-equiv = "refresh" content = "0; url = /" />
      </SignedOut>
      </Div>
      </>
    )
  }

export default MyListings