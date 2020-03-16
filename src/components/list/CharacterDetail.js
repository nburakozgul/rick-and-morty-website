import React, {useState} from "react";
import {
    Button,
    ButtonDropdown,
    Card,
    CardImg, DropdownItem, DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import ListItem from "./ListItem";

const CharacterDetails = props => {
    const {modal,toggle} = props.button;
    const {title,decs, location,episode, imgUrl} = props.params;

    const [dropdownOpen, setOpen] = useState(false);

    const buttonToggle = () => setOpen(!dropdownOpen);
    let locButton;

    const getImg = url => {
        if (typeof imgUrl !== "undefined" )
            fetch(url)
                .then(res => res.blob())
                .then((data) => {

                })
                .catch(console.log);
    };



    if(typeof location !== 'undefined')
        locButton = <Button color="primary" src={location.url}>Location</Button>

    return(
      <div>
          <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle}>{title}</ModalHeader>
              <ModalBody>
                  <Card>
                      <CardImg src={imgUrl} loading="lazy"/>
                  </Card>
              </ModalBody>
              <ModalFooter>
                  {locButton}
                  <ButtonDropdown isOpen={dropdownOpen} toggle={buttonToggle} >
                      <DropdownToggle caret>
                          Episodes
                      </DropdownToggle>
                      <DropdownMenu>
                          {typeof episode !== "undefined" && episode.map(item => <DropdownItem>{item}</DropdownItem>)}
                      </DropdownMenu>
                  </ButtonDropdown>
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
      </div>
    );
};

export default CharacterDetails;