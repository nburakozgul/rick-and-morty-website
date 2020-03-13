import React, {useState} from "react";
import {
    Card, CardText,CardTitle,
} from 'reactstrap';
import Button from "reactstrap/lib/Button";
import CharacterDetails from "./CharacterDetail";

const ListItem = props => {
    const {title,desc,buttonUrl,buttonText} = props.item;
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});

    const toggle = () => setModal(!modal);

    const getPage = url => {
        if (url.length !== 0)
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    setData({
                        imgUrl : data.image,
                        location : data.location,
                        episode: data.episode});
                    // console.log(data);
                })
                .catch(console.log);
        toggle();
    };


    return (
        <div style={{innerWidth : "400px"}}>
            <Card body>
                <CardTitle>{title}</CardTitle>
                <CardText>{desc}</CardText>
                <Button size="sm" onClick={() => {getPage(buttonUrl)}}>{buttonText}</Button>
            </Card>
            <CharacterDetails
                button={{modal: modal, toggle : () => {toggle()}}}
                params={{title: title, desc : desc,
                    location: data.location, episode: data.episode,
                    imgUrl : data.imgUrl}}/>
        </div>
    );
};

export default ListItem;