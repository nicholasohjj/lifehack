import React from "react";
import { Div, Text, Row, Col, Container, Image, Icon, Tag } from "atomize"
import logo from "../../images/logo.png"
const list = [
    {
      icon: "Add",
      heading: "Donate",
      subheading: "Have extra food? Don't let it go to waste! Donate your food for the greater cause right now!",
    },
    {
      icon: "Edit",
      heading: "Request",
      subheading: "We hear you, and we are here to help. Request for any food put up for donation!",
    },
  
    {
      icon: "Bag",
      heading: "Earn credits",
      subheading: "Donate your food to earn credits that can be spent in our participating stores.",
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
            Food wastage in Singapore
          </Text>
          <Text
            textSize="subheader"
            textColor="primary"
            fontFamily="primary"
            maxW="30rem"
            m={{ b: "3rem" }}
          >
            Do you know that food waste accounts for 12 per cent of total waste generated in Singapore? Every day, 2 bowls of rice are wasted per person, and this number is on a rise. If you find yourself having excess food that you cannot finish, donate your food to those in need!

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
                      <Icon
          name={item.icon}
          color="white"
          cursor="pointer"
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