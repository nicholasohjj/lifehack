import React from "react";
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import logo from "../../images/logo.png"
const list = [
    {
      icon: logo,
      heading: "Donate",
      subheading: "Have extra food? Don't let it go to waste! Donate your food for the greater cause right now!",
    },
    {
      icon: logo,
      heading: "Request",
      subheading: "We hear you, and we are here to help. Request for any food put up for donation!",
    },
  
    {
      icon: logo,
      heading: "Earn credits",
      subheading: "Donate your food to earn credits that can be exchanged in other stores!",
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
            What is foodise?
          </Text>
          <Text
            textSize="subheader"
            textColor="primary"
            fontFamily="primary"
            maxW="30rem"
            m={{ b: "3rem" }}
          >
            foodise is a free to use bulletin board for food donors and receivers. Do you know that food waste is one of the biggest waste streams in Singapore? Around 2 bowls of rice person are wasted daily. The second best strategy to reduce food wastage is by redistributing excess food. Contribute to this great cause now by donating your excess food!

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