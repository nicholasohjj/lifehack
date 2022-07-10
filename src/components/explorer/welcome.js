import React from "react";
import { Div, Anchor, Icon, Button, Container, Text } from "atomize";
import { WithUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate()
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
              Check out the food listings below! Click on the listing to reserve it.
            </Text>

            <Button
                onClick ={()=>navigate("/personal")}
                  bg="warning700"
                  hoverBg="warning800"
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textColor="black"
                  w={{ xs: "100%", sm: "13rem" }}
                  rounded="lg"
                  style={{ letterSpacing: "-0.5px" }}
                >
Donate your food here!
</Button>
              {/* <Button
                onClick ={()=>navigate("/corporate")}
                  bg="info700"
                  hoverBg="info800"
                  
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textColor="white"
                  w={{ xs: "100%", sm: "11rem" }}
                  rounded="lg"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  Corporate Donation
                </Button> */}
            </Container>
        </Div>
    
        </>
    )
}

export default Welcome