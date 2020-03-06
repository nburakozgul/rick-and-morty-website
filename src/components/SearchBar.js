import React, {Component} from "react";
import '../styles/Button.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event){
        event.preventDefault();
        const filter = this.searchRef.current.value;
        this.props.onSearch(filter);
    };

    render() {
        return (
            <div style={{paddingLeft: "31%"}}>
                <input ref={this.searchRef} type="text" placeholder="Search.."/>
                <input type="button" value="Enter" onClick={this.handleSearch}/>
                <input type="button" value="Clear" onClick={e => this.props.onClear()}/>
            </div>
        );
    }
}

export default SearchBar;