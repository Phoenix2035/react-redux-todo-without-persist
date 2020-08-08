import React from 'react'
import {Provider} from "react-redux"
import store from "./Redux/store"

import './App.css'
import ToDoList from "./Views/ToDoList"


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ToDoList/>
            </div>
        </Provider>
    );
}

export default App;
