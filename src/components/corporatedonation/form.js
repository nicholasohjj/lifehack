import React, { useState } from "react";
import { Text, Textarea, Container, Input, Icon } from "atomize";
import Formtitle from "./formtitle";

const Form = () => {
    const [newitem, setitem] = useState("")
    const [newdescription, setdescription] = useState("")
    const [newlocation, setlocation] = useState("")


    console.log(newitem)
    return (
        <>
        <Formtitle />
        <Container>
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

        </Container>
        </>
    )
}

export default Form