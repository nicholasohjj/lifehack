import React, { useState } from "react";
import { Text, Textarea, Container, Input, Icon, Button } from "atomize";
import PersonalFormtitle from "./personalformtitle";
import { useUser } from "@clerk/clerk-react/dist/hooks";
import listingservice from "../../services/listingservice";
import {useNavigate} from 'react-router-dom'
const PersonalForm = ({setallListings}) => {
    const [newitem, setitem] = useState("")
    const [newdescription, setdescription] = useState("")
    const [newlocation, setlocation] = useState("")

    const { user } = useUser();
    const navigate = useNavigate()

    const Handlesubmit = () => {
      const newCorporateListing = {
        user_id: `${user.id}`,
        user_type: "personal",
        item_name: newitem ? newitem: "nil",
        item_description: newdescription ? newdescription: "Not Specified",
        item_location: newlocation ? newlocation: "Not specified"
      }

      console.log(newCorporateListing)

      return (
        listingservice
          .addNew(newCorporateListing)
          .then(allListings => {
            setallListings(allListings)
            navigate("/home")
          })
      )
    }


    console.log(newitem)
    return (
        <>
        <Container>
        <PersonalFormtitle />

        <Text textColor="white">
        </Text>
        <Input
        onChange = {(event) => setitem(event.target.value)}
                        m={{ t: "2rem", b: { xs: "1rem", md: "0" } }}
        value={newitem}
      placeholder="Item"
      p={{ x: "2.5rem" }}
      prefix={
        <Icon
          name="Bag"
          color="warning800"
          size="16px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
        />
      }
    />
            <Textarea
                            m={{ t: "2rem", b: { xs: "1rem", md: "0" } }}

      placeholder="Description"
      value ={newdescription}
      onChange = {(event) => setdescription(event.target.value)}
      p={{ x: "2.5rem" }}
      prefix={
        <Icon
          name="Edit"
          color="warning800"
          size="16px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
        />
      }
    />
            <Input
                m={{ t: "2rem", b: { xs: "1rem", md: "0" } }}
        
      placeholder="Location"
      onChange = {(event) => setlocation(event.target.value)}
      value = {newlocation}
      p={{ x: "2.5rem" }}
      prefix={
        <Icon
          name="Location"
          color="warning800"
          size="16px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
        />
      }
    />
    <Button 
    onClick = {Handlesubmit}
    m={{ t: "2rem", b: { xs: "1rem", md: "0" } }}>
      Upload Listing!
    </Button>

        </Container>
        </>
    )
}

export default PersonalForm