import React from "react";
import './todo-list-item.css'

const TodoListItem = ( {label, important = false} ) => {

    let classNames = 'todo-list-item';
    if (important) {
        classNames += ' important';
    }
     return (
         <span className={classNames}>
              <span
                  className="todo-list-item-label" >
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right" >
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right" >
          <i className="fa fa-trash-o" />
        </button>
         </span>
         )
}

export default TodoListItem;
