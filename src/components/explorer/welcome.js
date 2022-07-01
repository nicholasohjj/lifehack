import React from "react";
import { Div, Anchor, Icon, Button, Container, Text } from "atomize";

const Welcome = () => {
    return (
        <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
            <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              m={{ b: "1rem" }}
            >
              Welcome Back!
            </Text>
            </Container>
        </Div>
    
        </>
    )
}

export default Welcome