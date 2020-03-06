import React,{ Component } from "react";
import '../styles/Button.css';
import '../styles/TextArea.css'

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.textRef = React.createRef();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const text = this.textRef.current.value;
        this.props.onAddNote(text);
        //this.setState({value : this.textRef.current.value});
    }

    render() {
        return (
            <form style={{paddingLeft: "31%"}}>
                <label >Add To-Do : </label><br/>
                <textarea ref={this.textRef} id="note" rows="4" cols="50" /><br/>
                <input type="button" value="Add"  onClick={this.handleClick}/>
            </form>
        );
    }

}

export default TextField;