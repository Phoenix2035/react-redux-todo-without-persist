import React from 'react';
import {connect} from "react-redux";

import ToDoCard from "../../Components/ToDoCard/ToDoCard";


function ToDoList({toDoList}) {

    return (
        <div>
            {
                toDoList.map(item =>
                    <ToDoCard
                        key={item.id}
                        toDo={item}/>
                )
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        toDoList: state.todo.toDoList
    }
}

export default connect(mapStateToProps, {})(ToDoList)