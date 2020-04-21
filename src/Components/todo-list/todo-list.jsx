import React from "react";
import TodoListItem from "./todo-list-item";
import './todo-list.css'

const TodoList = ({ todos }) => {

    let elements = todos.map(item => {
        let {id, ...itemProps} = item
        return (
            <li key={id} className={'list-group-item'}> <TodoListItem { ...itemProps }/>
            </li>

        )
    })

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
}

export default TodoList;
