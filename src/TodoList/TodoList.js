import React from 'react';
import Todo from './Todo/Todo';
import ProgressBar from './ProgressBar/ProgressBar';
import './todoList.css';
import { todoServices } from '../TodoServices';


class TodoList extends React.Component {
  state = {
    name: '',
    todos: [],
    id: 4
  }

  checkTodo = id => {

    function find(element) {
      return element.id === id
    }
    
    const todosNew = this.state.todos;
    const index = todosNew.findIndex(find);
    const checked = !todosNew[index].checked;
    const data = {"checked": checked};

    todoServices.checkTodos(data, id)
    .then(() => todoServices.fetchTodos()
    .then(todos => this.setState({todos})));
  }

  componentWillMount(){
    todoServices.fetchTodos().then(todos => this.setState({todos}))
  }

  render(){
    return (
        <div>
          <h1>Today</h1>
          <ProgressBar todos={this.state.todos}/>
          <hr id="main-hr"/>
          {this.state.todos.map((todo, i) => (
          <Todo key={String(todo.id)} {...todo} deleteTodo={this.deleteTodo} checkTodoNow={this.checkTodo}/>
        ))}
        </div>
    )
  }
}

export default TodoList;