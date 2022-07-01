import React from "react"
import Header from "../header"
import Title from "../frontpage/title"
import Introducing from "../frontpage/introducing"
import Footer from "../footer"

const Frontpage = ({user}) => {
    return (
      <>
      <Header user = {user}/>
      <Title />
      <Introducing/>
      <Footer />
      </>
    )
  }

export default Frontpage