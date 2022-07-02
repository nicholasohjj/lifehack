import React from "react"
import Header from "../header"
import Title from "../frontpage/title"
import Introducing from "../frontpage/introducing"
import Footer from "../footer"
import { Div } from "atomize"

const Frontpage = ({user}) => {
    return (
      <>
      <Div bg="#002f63">
      <Header user = {user}/>
      <Title />
      <Introducing/>
      <Footer />
      </Div>
      </>
    )
  }

export default Frontpage