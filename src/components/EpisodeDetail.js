import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function EpisodeDetail(props){
    const [state, setState] = useState({});

    let {id} = useParams();

    const styles = {
        width : "500px",
        height : "300px",
        borderColor : "black"
    };

    useEffect( id => {
        let url = 'https://rickandmortyapi.com/api/episode/' + id;
        if (url.length !== 0)
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    setState({
                        activePage : 1,
                        pages : data.info.pages,
                        next : data.info.next,
                        prev : data.info.prev,
                        episodes: data.results});
                    console.log(this.state);
                })
                .catch(console.log)
    });

    return(
        <div style={styles}>
            {/*<text>{state.name} - {state.episode}</text>*/}
            <text>{props.match.params.id}</text>
            <ul style={{paddingLeft: "35%"}}>
                {
                    // this.state.characters.map((item) => <li key={item}> {item}</li>)
                }
            </ul>
        </div>
    );
}

export default EpisodeDetail;