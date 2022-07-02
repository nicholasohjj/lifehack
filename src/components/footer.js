import React from "react"
import { Div, Text, Row, Col, Container, Anchor, Icon } from "atomize"


const mediaLinks = [
  {
    icon: "Github",
    link: "https://github.com/nicholasohjj",
  },
  {
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/nicholasohjj/",
  },
]

const Footer = () => {
  return (
    <Div
      tag="footer"
      p={{ t: { xs: "12rem", md: "8rem" }, b: { xs: "4rem", md: "5rem" } }}
      pos="relative"
    >
      <Container>

        <Div d="flex" align="center" justify="center" flexDir="column">
        <Text
            tag="h2"
            textColor="primary"
            textWeight="400"
            textSize="body"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            A Project by Kai Xuan, Wen Kai, Sutong and Nicholas
          </Text>
          <Text
            tag="h2"
            textColor="primary"
            textWeight="400"
            textSize="body"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            Developed by Nicholas Oh
          </Text>
          <Div d="flex" align="center" justify="center">
            {mediaLinks.map((link, index) => (
              <Anchor href={link.link} target="_blank">
                <Icon
                  name={link.icon}
                  size="20px"
                  hoverColor="white"
                  m={{ r: index !== mediaLinks.length - 1 && "1rem" }}
                  cursor="pointer"
                />
              </Anchor>
            ))}
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Footer
