import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Title from "./components/homepage/title";
import Introducing from "./components/homepage/introducing";
import Footer from "./components/footer";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const Home = () => {
  return (
    <>
    <Header />
    <Title />
    <Introducing/>
    <Footer />
    </>
  )
}

const Login = () => {
  const frontendApi = "clerk.quiet.tuna-4.lcl.dev"
  const navigate = useNavigate();

  return (
    <>
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
    <SignedIn>
    Test
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn/>
    </SignedOut>
    </ClerkProvider>
    </>
  )
}

const Docs = () => {
  return (
    <>
    </>
  )

}

const App = () => {
  return (
    <>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/login" element = {<Login/>} />
      <Route path ="/docs" element={<Docs />} />
    </Routes>

    </>
  )
}

export default App