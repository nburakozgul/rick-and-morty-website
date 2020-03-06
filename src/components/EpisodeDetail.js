import React, {Component} from "react";

class EpisodeDetail extends Component{

    constructor(props) {
        super(props);
    };


    render() {
        const styles = {
            width : "500px",
            height : "300px",
            borderColor : "black"
        };

        return (
            <div style={styles}>
                <text>Anan</text>
            </div>

        );
    }



}

export default EpisodeDetail;