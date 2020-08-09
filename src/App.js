import React from 'react'
import {Provider} from "react-redux"
import store from "./Redux/store"

import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css'
import ToDoList from "./Views/ToDoList/ToDoList"
import AddToDoForm from "./Views/AddToDo/AddToDoForm";
import Container from "reactstrap/es/Container";


function App() {
    return (
        <Provider store={store}>
            <Container>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <ToDoList/>
                        </Route>

                        <Route path='/add'>
                            <AddToDoForm/>
                        </Route>

                        <Route path='/update/:id'>

                        </Route>

                        <Route path='/todo/:id'>

                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </Provider>
    );
}

export default App;
