import React, {useState} from "react";
import {Button} from "reactstrap";
import ListComponent from "./ListComponent";

const MainScreen = props => {
    const [listType, setListType] = useState('default');

    let listComponent;

    if (listType === 'default')
        listComponent = <a>bos</a>
    else
        listComponent = <ListComponent/>

    return (
        <div>
            <Button color="primary" block>Characters</Button>
            <Button color="primary" block>Episodes</Button>
            <Button color="primary" block>Locations</Button>
        </div>
    );

};

export default MainScreen;