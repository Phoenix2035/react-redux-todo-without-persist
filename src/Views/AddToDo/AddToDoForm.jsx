import React, {useState} from 'react'
import {
    Form,
    Input,
    FormGroup,
    Button,
    Label
} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {addToDo} from '../../Redux/ToDo/ToDo.action'
import {connect} from "react-redux";

function AddToDoForm({addToDo}) {
    let history = useHistory()
    const [todo, setTodo] = useState({
        title: '',
        text: '',

    })

    const [checkItems, setCheckItems] = useState([
        {
            id: 1,
            text: '',
            status: false

        }]
    )

    const addItem = () => {
        setCheckItems([...checkItems, {id: 1, text: '', status: false}])
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setTodo({
            ...todo,
            [name]: value
        })
    }


    const handleChangeCheck = (e, id) => {
        setCheckItems(checkItems.map(item => item.id === id ? {...item, text: e.target.value} : item))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addToDo({
            id: 3,
            ...todo,
            checkList: checkItems
        })
        history.push('/')
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='title'>Title</Label>
                    <Input
                        onChange={handleChange}
                        value={todo.title}
                        name='title'
                        id='title'/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='text'>Text</Label>
                    <Input
                        onChange={handleChange}
                        value={todo.text}
                        name='text'
                        id='text'/>
                </FormGroup>

                {
                    checkItems.map(item =>
                        <FormGroup key={item.id}>
                            <Label htmlFor={item.text}>Check Item</Label>
                            <Input
                                onChange={(e) => handleChangeCheck(e, item.id)}
                                name={item.text}
                                value={item.text}
                                id={item.id}/>
                        </FormGroup>
                    )
                }

                <Button type='button' onClick={addItem}>Add check Item</Button>{' '}
                <Button>Save</Button>

            </Form>
        </div>
    );
}

export default connect(null, {addToDo})(AddToDoForm);