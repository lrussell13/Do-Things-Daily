import React from 'react';
import './todo.css';

function Todo(props) {
    return (
      <div className="todo">
        <div className="todo-items">
        <label className="container">{props.name}
          <input type="checkbox" onClick={() => props.checkTodoNow(props.id)}/>
          <span className="checkmark"></span>
        </label>
        </div>
        <hr/>
      </div>
    );
}

export default Todo;