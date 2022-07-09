// Full Screen Modal
import React, {useState} from "react";
import { Div, Button, Modal, Icon, Text } from "atomize";

const ModalSize = ({ isOpen, onClose, item }) => {
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
                          textSize="subheader"
                          textColor="black"
                          m={{ b: "2rem" }}
                        >
                          {item.item_name}
                        </Text>
                        <Text
                          textColor="black"
                          textSize="paragraph"
                          m={{ b: "1rem" }}
                        >
                          Description: {item.item_description}
                        </Text>
                        <Text
                          textColor="black"
                          textSize="paragraph"
                          m={{ b: "1rem" }}
                        >
                          Location: {item.item_location}
                        </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          Get it!
        </Button>
      </Div>
    </Modal>
  );
};

const ListingModal = ({item}) => {
    const [showModal, setshowModal] = useState(false)

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
          onClose={() => setshowModal(false)}
          item = {item}
        />
      </>
    );
  }

export default ListingModal;