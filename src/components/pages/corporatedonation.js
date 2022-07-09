import React from "react"
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import DonationHeader from "../explorer/explorerHeader copy";
import Data from "../explorer/data";
import Footer from "../footer"
import { Div } from "atomize";
import Postcards from "../explorer/postcards";
import Form from "../corporatedonation/corporateform";


const CorporateDonation = () => {

    return (
      <>
      <Div bg="background">
      <SignedIn>
      <DonationHeader/>
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