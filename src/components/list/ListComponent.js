import React, {useEffect, useState} from "react";
import {ListGroup, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import ListItem from "./ListItem";

const ListComponent = props => {
    const [state,setState] = useState({});
    let buttonText = 'Character Details'; // this is gonna be a prop

    useEffect(()=> {
        const url = "https://rickandmortyapi.com/api/character/";
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setState({
                    activePage: 1,
                    pages : data.info.pages,
                    prev : data.info.prev,
                    next : data.info.next,
                    data:data.results,
                });
                console.log(state);
            })
            .catch(console.log)
    },[]);

    let getPage = action => {
        let url = '';
        let  add = 0;
        if (action === 'next') {
            url = state.next;
            add = 1;
        }else if (action === 'prev') {
            url = state.prev;
            add = -1;
        }
        if (url.length !== 0)
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    setState({
                        activePage : state.activePage + add,
                        pages : data.info.pages,
                        next : data.info.next,
                        prev : data.info.prev,
                        data: data.results});
                    console.log(state);
                })
                .catch(console.log)
    };

    if (typeof state.data === 'undefined')
        return <div>
            <a>
                yukleniyor
            </a>
        </div>;

    return(
        <div>
            <Pagination size="lg">
                <PaginationItem >
                    <PaginationLink previous onClick={() => {getPage('prev')}} href="" />
                </PaginationItem>
                <PaginationItem>
                    <a>{state.activePage}</a>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next onClick={() => { getPage('next')}}  href="" />
                </PaginationItem>
            </Pagination>
            <ListGroup>
                {state.data.map(item =>
                    <ListItem item={{title: item.name, desc: item.species + ' - ' + item.status, buttonUrl: item.url , buttonText: buttonText}}/>
                )}
            </ListGroup>
        </div>
    );

 }

 export default ListComponent;