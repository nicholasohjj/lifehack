import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import DonationHeader from "../explorer/explorerHeader copy";
import Footer from "../footer"
import { Div } from "atomize";
import Postcards from "../explorer/postcards";
import PersonalForm from "../personaldonation/personalform";

const PersonalDonation = ({setallListings}) => {

    return (
      <>
      <Div bg="background">
      <SignedIn>
      <DonationHeader/>
      <PersonalForm setallListings = {setallListings} />      
      <Footer />
      </SignedIn>
      <SignedOut>
      <meta http-equiv = "refresh" content = "0; url = /" />
      </SignedOut>
      </Div>
      </>
    )
  }

export default PersonalDonation