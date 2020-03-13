import React, {useEffect, useState} from 'react';
import './App.css';
import {
    ListGroup,Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import ListItem from "./components/list/ListItem";
import ListComponent from "./components/list/ListComponent";

function App() {
    return (
        <ListComponent/>
     );
}

export default App;
