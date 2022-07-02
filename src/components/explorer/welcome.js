import React from "react";
import { Div, Anchor, Icon, Button, Container, Text } from "atomize";
import { WithUser } from "@clerk/clerk-react";
const Welcome = () => {
    return (
        <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
            <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display2"
              textColor = "primary"
              fontFamily="primary"
              m={{ b: "1rem" }}
            >
              <WithUser>
        {(user) => (
          <div>
            {user.firstName 
              ? `Hello, ${user.firstName}!` 
              : "Hello there!"}
          </div>
        )}
      </WithUser>
            </Text>
            </Container>
        </Div>
    
        </>
    )
}

export default Welcome