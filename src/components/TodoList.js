import React, {Component, useEffect, useState} from "react";
import { Route,Switch, Link, BrowserRouter as Router } from "react-router-dom";
import EpisodeDetail from "./EpisodeDetail";
import SearchBar from "./SearchBar";


function TodoList()  {

    const [state, setState] = useState({
        activePage : 0,
        pages : 0,
        prev : '',
        next : '',
        episodes : []
    });

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

     useEffect(() => {
         fetch('https://rickandmortyapi.com/api/episode/')
             .then(res => res.json())
             .then((data) => {
                 setState({
                     activePage: 1,
                     pages: data.info.pages,
                     next: data.info.next,
                     prev: data.info.prev,
                     episodes: data.results
                 });
                 console.log(state);
             })
             .catch(console.log)
    }, []);

     let getPage = url => {
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
    };

    return(
        <div>
            <h1 style={{paddingLeft: "38%"}}>Rick And Morty Episodes</h1>
            {/*<SearchBar onSearch={this.handleOnSearch} onClear={this.handleOnClear}*/}
            <Router>
                <ul style={{paddingLeft: "35%"}}>
                    {
                        state.episodes.map((item) => <li key={item.id}>
                            <Link to="/episode">
                                {item.name} - {item.episode}
                            </Link>
                        </li>)
                    }
                </ul>
                <Switch>
                    <Route exact path="/" component={SearchBar} />
                    <Route exact path="/" component={EpisodeDetail} />
                </Switch>
            </Router>
            {/*<TextField onAddNote={this.handleAddNote}/>*/}
            <div style={{paddingLeft: "40%"}}>
                <input type="button" value="Previous" onClick={e => getPage(state.prev)}/>
                <input type="button" value="Next" onClick={e => getPage(state.next)}/>
            </div>

        </div>
    );


}

export default TodoList;