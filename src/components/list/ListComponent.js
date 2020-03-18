import React, {useEffect, useState} from "react";
import {ListGroup, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import ListItem from "./ListItem";

const ListComponent = props => {
    const [state,setState] = useState({activePage:1});
    const [data,setData] = useState([]);
    const {buttonText} = props;
    let  add = 0;

    const apiCall = () => {
        const url = "https://rickandmortyapi.com/api/"+props.type;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                setState({
                    activePage : state.activePage + add,
                    pages : res.info.pages,
                    prev : res.info.prev,
                    next : res.info.next
                });
                setData(res.results);
                console.log(state);
            })
            .catch(console.log)
    };

    useEffect(()=> {
        apiCall();
    },[props.type]);

    let getPage = action => {
        let url = '';
        if (action === 'next') {
            url = state.next;
            add = 1;
        }else if (action === 'prev') {
            url = state.prev;
            add = -1;
        }
        if (url.length !== 0)
            apiCall();
    };

    if (typeof data === 'undefined')
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
                {data.map(item =>
                    <ListItem item={{title: item.name, desc: item.species + ' - ' + item.status, buttonUrl: item.url , buttonText: buttonText}}/>
                )}
            </ListGroup>
        </div>
    );

 }

 export default ListComponent;