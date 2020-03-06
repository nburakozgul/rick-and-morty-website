import React,{ Component} from "react";
import SearchBar from "./SearchBar";
import TextField from "./TextField";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage : 0,
            pages : 0,
            prev : '',
            next : '',
            episodes : []
        };

        this.getPage = this.getPage.bind(this);
    }

    // handleAddNote = text => {
    //     let arr = this.state.episodes;
    //     // eslint-disable-next-line no-unused-expressions
    //     console.log(text);
    //     if (arr.includes(text))
    //         alert("This note already exist!!");
    //     else if (text.length === 0)
    //         alert("Empty String !!");
    //     else {
    //         arr.push(text);
    //         this.setState({episodes: arr});
    //     }
    // };
    //
    // handleOnSearch = filter => {
    //     const searchResult = this.state.episodes.filter(item => item.includes(filter));
    //     this.setState({episodes : searchResult});
    // };
    //
    // handleOnClear = () => this.setState({episodes : this.state.episodes});
    //
    // delete = item => {
    //     let arr = this.state.episodes.filter(items => items !== item);
    //     this.setState({episodes: arr});
    // };

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/episode/')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    activePage : 1,
                    pages : data.info.pages,
                    next : data.info.next,
                    prev : data.info.prev,
                    episodes: data.results});
                console.log(data);
            })
            .catch(console.log)
    };

    getPage = url => {
        if (url.length !== 0)
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        activePage : 1,
                        pages : data.info.pages,
                        next : data.info.next,
                        prev : data.info.prev,
                        episodes: data.results});
                    console.log(this.state);
                })
                .catch(console.log)
    };

    render () {
        return(
            <div>
                <h1 style={{paddingLeft: "38%"}}>Rick And Morty Episodes</h1>
                {/*<SearchBar onSearch={this.handleOnSearch} onClear={this.handleOnClear}*/}
                <ul style={{paddingLeft: "35%"}}>
                    {
                        this.state.episodes.map((item) => <li key={item.id}>{item.name} - {item.episode}  </li>)
                    }
                </ul>
                {/*<TextField onAddNote={this.handleAddNote}/>*/}
                <div style={{paddingLeft: "40%"}}>
                    <input type="button" value="Previous" onClick={e => this.getPage(this.state.prev)}/>
                    <input type="button" value="Next" onClick={e => this.getPage(this.state.next)}/>
                </div>

            </div>
        );
    }

}

export default TodoList;