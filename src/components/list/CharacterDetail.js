import React, {useState} from "react";
import {Button, Card, CardImg, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const CharacterDetails = props => {
    const {modal,toggle} = props.button;
    const {title,decs, location,episode, imgUrl} = props.params;
    let image = null;

    const getImg = url => {
        if (typeof imgUrl !== "undefined" )
            fetch(url)
                .then(res => res.blob())
                .then((data) => {
                    image = data;
                })
                .catch(console.log);
    };

    getImg(imgUrl);

    return(
      <div>
          <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle}>{title}</ModalHeader>
              <ModalBody>
                  <Card>
                      <CardImg src={image}/>
                  </Card>
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" >Do Something</Button>{' '}
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
      </div>
    );
};

export default CharacterDetails;