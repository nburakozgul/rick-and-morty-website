import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";
import ListComponent from "./ListComponent";

const MainScreen = props => {
    const [state, setState] = useState({listType: 'default', buttonText:''});

    const handleButtonClick = ev => {
        switch (ev.target.id) {
            case "1":
                setState({listType: 'character', buttonText: 'Character Details'});
                break;
            case "2":
                setState({listType: 'episode', buttonText: 'Characters In This Episode'});
                break;
            case "3":
                setState({listType: 'location', buttonText: 'Residents'});
                break;
            default:
                break;

        }
    };

    let listComponent;
    if (state.listType !== 'default')
        listComponent = <ListComponent buttonText={state.buttonText} type={state.listType}/>

    return (
        <div>
            <Button id='1' color="primary" block onClick={ev => handleButtonClick(ev)}>Characters</Button>
            <Button id='2' color="primary" block onClick={ev => handleButtonClick(ev)}>Episodes</Button>
            <Button id='3' color="primary" block onClick={ev => handleButtonClick(ev)}>Locations</Button>
            {listComponent}
        </div>
    );

};

export default MainScreen;