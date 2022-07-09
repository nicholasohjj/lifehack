import React from "react";
import { Div, Anchor, Icon, Button, Container, Text } from "atomize";
import { WithUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const ListingsWelcome = () => {
  const navigate = useNavigate()
    return (
        <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
            <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h2"
              textWeight="400"
              maxW="36rem"
              textSize="subheader"
              textAlign="center"
              fontFamily="primary"
              textColor="primary"
              m={{ b: "2.5rem" }}
            >
              You may find your listings below!
            </Text>
            </Container>
        </Div>
    
        </>
    )
}

export default ListingsWelcome