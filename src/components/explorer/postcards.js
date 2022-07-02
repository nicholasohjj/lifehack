import React, {useState, useEffect} from "react";
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import logo from "../../images/logo.png"
import axios from "axios";

const Postcards = () => {
  const [carbonData, setcarbonData] = useState([])

  const hook = () => {
    axios
      .get('https://api.openaq.org/v2/countries?limit=200&page=1&offset=0&sort=asc&country=SG&order_by=country')
      .then(response=> setcarbonData(response.data.results[0]))

  }
  
  useEffect(hook,[])

  

  const list = [


    {
      icon: logo,
      subheading: `Current Air Quality (PM 2.5): ${carbonData.count}`,
      background: "white"
    },
    {
      icon: logo,
      subheading: "Equipped with a 20MW charging port, we promise to charge your ship fully within the shortest possible time.",
      background: "white"

    },
  
    {
      icon: logo,
      subheading: "Find our charging platforms easily and view your charge status in real time.",
      background: "white"

    },
  
    {
      icon: logo,
      subheading: "Better control to make the app responsive.",
      background: "white"

    },
  ]
  console.log(JSON.stringify(carbonData))


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
              {list.map(item => (
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
                          {item.subheading}
                        </Text>
                        <Text
                          textColor="primary"
                          textSize="paragraph"
                          m={{ b: "1rem" }}
                        >
                          {item.footnote}
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

export default Postcards