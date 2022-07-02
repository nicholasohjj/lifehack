import React, {useState, useEffect} from "react";
import axios from "axios";
import { Text, Anchor } from "atomize";

// const hook = () => {
//     axios
//         .get("")
//         .then(setdata(response.data))
// }


const Data = () => {
    //useEffect(hook,[])
    return (
        <>
        <Text>Useful API Links</Text>
        <Anchor href="https://github.com/public-apis/public-apis">https://github.com/public-apis/public-apis</Anchor>
        https://formidable.com/open-source/victory/
        </>
    )
}

export default Data