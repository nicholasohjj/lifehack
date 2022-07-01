import React from "react";
import { useNavigate } from "react-router-dom";
import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";


const Login = () => {
    return (
      <>
      <SignedIn>
      <meta http-equiv = "refresh" content = "0; url = /home" />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      </>
    )
  }

  export default Login