import React, {useState} from "react";
import { Div, Image, Container, Icon, Anchor, Button, scrollTo, Text } from "atomize"
import logo from "../../images/logo.png"
import { UserButton } from "@clerk/clerk-react/dist/components";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const DonationHeader = () => {
   const navigate = useNavigate()
    const [showMobileHeaderMenu, setshowMobileHeaderMenu] = useState(false)

    const {signOut} = useClerk()

    const ToggleHeaderMenu = value => {
        setshowMobileHeaderMenu(value)
        setTimeout(() => {
          window.scrollTo(0, window.scrollY + 1)
        }, 400)
      }
    return (
        <>
        <Div
            tag="header"
            pos="fixed"
            top="0"
            transition
            left="0"
            right="0"
            zIndex="100"
            p={{ y: { xs: "1.5rem", md: "1rem" } }}
        >
            <Div
                pos="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="white"
                opacity="1"
                zIndex="-1"
          ></Div>
            <Container d="flex" align="center" justify="space-between">
            <Div cursor="pointer">

            <Anchor href="/home" >
              Back to Marketplace
            </Anchor>
              
              
            
            </Div>
            

            {/* Icon For Mobile */}

            <Div
              d={{ xs: "flex", md: "none" }}
              flexDir="column"
              onClick={() => ToggleHeaderMenu(!showMobileHeaderMenu)}
            >
              <Div
                h="2px"
                w="1rem"
                bg="black"
                rounded="lg"
                style={{
                  transform: `translateY(${
                    showMobileHeaderMenu ? "1" : "-2"
                  }px)rotate(${showMobileHeaderMenu ? "135" : "0"}deg)`,
                }}
                transition
              ></Div>
              <Div
                h="2px"
                w="1rem"
                bg="black"
                rounded="lg"
                style={{
                  transform: `translateY(${
                    showMobileHeaderMenu ? "-1" : "2"
                  }px)rotate(${showMobileHeaderMenu ? "45" : "0"}deg)`,
                }}
                transition
              ></Div>
            </Div>

            {/* Links for Desktop */}
            <Div
              d="flex"
              onClick={() => ToggleHeaderMenu(false)}
              bg={{ xs: "white", md: "transparent" }}
              align={{ xs: "strech", md: "center" }}
              flexDir={{ xs: "column", md: "row" }}
              pos={{ xs: "absolute", md: "static" }}
              p={{
                t: { xs: "6rem", md: "0" },
                b: { xs: "2rem", md: "0" },
                x: { xs: "1.5rem", md: "0" },
              }}
              top="0"
              left="0"
              right="0"
              zIndex={{ xs: "-1", md: "0" }}
              shadow={{ xs: "4", md: "0" }}
              opacity={{
                xs: showMobileHeaderMenu ? "1" : "0",
                md: "1",
              }}
              transform={{
                xs: `translateY(${showMobileHeaderMenu ? "0" : "-100%"})`,
                md: "none",
              }}
              transition
            >
              <Button
                onClick ={()=>navigate("/listings")}
                  bg="brand700"
                  hoverBg="brand800"
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textColor="black"
                  textSize="subheader"
                  w={{ xs: "100%", sm: "11rem" }}
                  rounded="lg"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  My Listings
                </Button>
              <Button
                onClick ={()=>navigate("/personal")}
                  bg="warning700"
                  hoverBg="warning800"
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textColor="black"
                  textSize="subheader"
                  w={{ xs: "100%", sm: "13rem" }}
                  rounded="lg"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  Donate your food!
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
              <Button
                onClick ={()=>signOut()}
                  bg="success700"
                  hoverBg="environment"
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textColor="white"
                  w={{ xs: "100%", sm: "8.5rem" }}
                  rounded="lg"
                  textSize="subheader"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  Sign Out
                </Button>
                <UserButton/>
            </Div>
            
          </Container>
        </Div>
        </>
    )

}

export default DonationHeader