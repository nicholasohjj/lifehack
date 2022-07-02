import React from "react";
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import logo from "../../images/logo.png"
const list = [
    {
      icon: logo,
      heading: "Plug In",
      subheading: "Charge automatically - simply plug in to our charging platforms after registering with us.",
    },
    {
      icon: logo,
      heading: "Fast Charging",
      subheading: "Equipped with a 20MW charging port, we promise to charge your ship fully within the shortest possible time.",
    },
  
    {
      icon: logo,
      heading: "Monitor",
      subheading: "Find our charging platforms easily and view your charge status in real time.",
    },
  
    {
      icon: logo,
      heading: "Responsive",
      subheading: "Better control to make the app responsive.",
      link: "/docs/react/responsive",
    },
  ]

const Introducing = () => {
    return (
    <>
    <Div tag="section" id="features" p={{ t: "8rem" }}>
        <Container>
        <Text
            textSize="display1"
            textWeight="500"
            textColor="primary"
            fontFamily="primary"
            m={{ b: "1rem" }}
          >
            Why use Product Name?
          </Text>
          <Text
            textSize="subheader"
            textColor="primary"
            fontFamily="primary"
            maxW="30rem"
            m={{ b: "3rem" }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

          </Text>
          <Div
            p={{ b: "6rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Row>
              {list.map(item => (
                <Col size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Div m={{ b: { xs: "1rem", lg: "0" } }}>
                    <Div
                      border="1px solid"
                      borderColor="gray200"
                      h="100%"
                      d="flex"
                      flexDir="column"
                      p="2rem"
                      shadow="3"
                      rounded="xl"
                    >
                      <Div flexGrow="1">
                        <Image
                          src={item.icon}
                          m={{ t: "1rem", b: "2rem" }}
                          w="auto"
                          h="2rem"
                        />
                        <Text
                          textSize="title"
                          textColor="primary"
                          textWeight="500"
                          m={{ b: "1rem" }}
                        >
                          {item.heading}
                        </Text>
                        <Text
                          textSize="subheader"
                          textColor="primary"
                          m={{ b: "2rem" }}
                        >
                          {item.subheading}
                        </Text>
                      </Div>
                    </Div>
                  </Div>
                </Col>
              ))}
            </Row>
          </Div>
          </Container>
    </Div>

    </>
    )
}

export default Introducing