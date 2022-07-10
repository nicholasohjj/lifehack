import React from "react";
import { Div, Anchor, Icon, Button, Container, Text } from "atomize";
import { SignedIn, SignedOut } from "@clerk/clerk-react/dist/components";

const Title = () => {
    return (
        <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
            <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textColor="primary"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="primary"
              m={{ b: "1rem" }}
            >
              foodise
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
              Making the wise decision about your extra food.
            </Text>
            <Div
              d="flex"
              w="100%"
              justify="center"
              flexDir={{ xs: "column", sm: "row" }}
            >
                <a href="/login">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "13rem" }}
                  bg="success700"
                  hoverBg="environment"
                  rounded="lg"
                  textSize="subheader"
                  m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                >
                  <SignedIn>
                    Go to Marketplace
                  </SignedIn>
                  <SignedOut>
                    Get Started
                  </SignedOut>
                </Button>
              </a>
              <Anchor
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                {/* <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="gray200"
                  border="1px solid"
                  borderColor="gray400"
                  textColor="primary"
                  hoverBorderColor="gray600"
                  rounded="lg"
                  p={{ l: "0.5rem", r: "1rem" }}
                  prefix={
                    <Icon
                      name="Play"
                      size="18px"
                      m={{ r: "0.5rem" }}
                      color="black400"
                    />
                  }
                >
                  Watch Video
                </Button> */}
              </Anchor>
            </Div>
            </Container>
        </Div>
    
        </>
    )
}

export default Title