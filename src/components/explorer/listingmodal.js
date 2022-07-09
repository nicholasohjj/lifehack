// Full Screen Modal
import React, {useState} from "react";
import { Div, Button, Modal, Icon, Text, Image, Container} from "atomize";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react/dist/hooks";
import listingservice from "../../services/listingservice";

const ModalSize = ({ isOpen, onClose, item, onReserve }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="0"
      maxW="100vw"
      m="0"
      h="100vh"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

        <Text
                          textSize="heading"
                          textColor="black"
                          m={{ b: "2rem" }}
                        >
                          {item.item_name}
                        </Text>
                        <Image src={item.item_image} maxH="20rem" maxW ="20rem"
/>
<Text
                          textColor="black"
                          textSize="subheader"
                          m={{ b: "1rem" }}
                        >
                          Posted by: {item.user_name}
                        </Text>
                        <Text
                          textColor="black"
                          textSize="subheader"
                          m={{ b: "1rem" }}
                        >
                          Description: {item.item_description}
                        </Text>
                        <Text
                          textColor="black"
                          textSize="subheader"
                          m={{ b: "1rem" }}
                        >
                          Location: {item.item_location}
                        </Text>
                        <Text
                          textColor="black"
                          textSize="subheader"
                          m={{ b: "1rem" }}
                        >
                          Reserve Status: {item.item_reserved ? `Item has been reserved` : "Not Reserved"} 
                        </Text>
                        
      <Div d="flex" justify="flex-end">
        {item.item_reserved ?
                <Button onClick={onClose} bg="info700">
                Close
              </Button>
              : <Button onClick={onReserve} bg="info700">
              Reserve this item!
            </Button>
        }

      </Div>
    </Modal>
  );
};

const ListingModal = ({item}) => {
  const { user } = useUser();
    console.log(user.username)
    const [showModal, setshowModal] = useState(false)

    const Handleclose = () => {

      const newListing = {
        user_id: item.user_id,
        user_type: item.user_type,
        user_name: item.user_name,
        item_name: item.item_name,
        item_image: item.item_image,
        item_description: item.item_description,
        item_location: item.item_location,
        item_reserved: true,
        item_reserved_person: user.fullName ? user.fullName : "nil",
        item_reserved_person_email: user.emailAddresses ? user.emailAddresses[0].emailAddress : "nil"
    }
    setshowModal(!showModal)
    listingservice
      .update(item.id,newListing)
      .then()
          setshowModal(false)
          location.reload()


    }

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() => setshowModal(true)
          }
        >
          Details
        </Button>
        <ModalSize
          isOpen={showModal}
          onReserve = {Handleclose}
          onClose={()=> {setshowModal(false)}}
            
          item = {item}
        />
      </>
    );
  }

export default ListingModal;