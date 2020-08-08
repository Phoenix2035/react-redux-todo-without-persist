import React from 'react';

function ToDoCard({toDo}) {
    return (
        <React.Fragment key={toDo.id}>
            <p>{toDo.text}</p>
            <ul>
                {
                    toDo.checkList.map(check =>
                        <li key={`${toDo.id}${check.id}`}>
                            {check.status ? <del>{check.text}</del> : check.text}
                        </li>
                    )
                }
            </ul>
        </React.Fragment>
    );
}

export default ToDoCard;