import React from 'react';
import Todo from './Todo/Todo';
import ProgressBar from './ProgressBar/ProgressBar';
import './todoList.css';


function TodoList(props) {
    return (
        <div>
          <h1>Today</h1>
          <ProgressBar todos={props.todos}/>
          <hr id="main-hr"/>
          {props.todos.map((todo, i) => (
          <Todo key={String(todo.id)} {...todo} deleteTodo={props.deleteTodo} checkTodoNow={props.checkTodo}/>
        ))}
        </div>
    )
}


export default TodoList;