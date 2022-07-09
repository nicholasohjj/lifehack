import React, {useState, useEffect} from "react";
import { Div, Text, Row, Col, Container, Image } from "atomize"
import logo from "../../images/logo.png"
import listingservice from "../../services/listingservice";
import ListingModal from "./listingmodal";

const Postcards = () => {
  const [listings, setlistings] = useState([])

  const hook = () => {
    listingservice
      .getAll()
      .then(response=>setlistings(response))
      console.log(listings)
  }

  
  useEffect(hook,[])

    return (
    <>
    <Div tag="section" id="features" p={{ t: "3rem" }}>
        <Container>
          <Div
            p={{ b: "3rem" }}
            border={{ b: "1px solid" }}
            borderColor="white"
          >
            <Row>
              {listings.map(item => (
                <Col size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Div m={{ b: { xs: "1rem", lg: "0" } }}>
                    <Div
                      border="1px solid"
                      // bg={item.background}
                      borderColor="gray200"
                      h="100%"
                      d="flex"
                      flexDir="column"
                      p="2rem"
                      shadow="3"
                      rounded="xl"
                    >
                      <Div flexGrow="1">
                        <Text
                          textSize="subheader"
                          textColor="primary"
                          m={{ b: "2rem" }}
                        >
                          {item.item_name}
                        </Text>
                        <Text
                          textColor="primary"
                          textSize="paragraph"
                          m={{ b: "1rem" }}
                        >
                          Description: {item.item_description}
                        </Text>
                        <Text
                          textColor="primary"
                          textSize="paragraph"
                          m={{ b: "1rem" }}
                        >
                          Location: {item.item_location}
                        </Text>
                        <ListingModal item ={item}/>
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

export default Postcards