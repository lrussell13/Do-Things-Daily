import React from 'react';
import Todo from './Todo/Todo';
import './todoList.css';


class TodoList extends React.Component {
  state = {
    name: '',
    todos: [{
      id: 0,
      name: 'Code',
      checked: false
    },{
      id: 1,
      name: 'Read',
      checked: false
    },{
      id: 2,
      name: 'Brush Teeth',
      checked: false
    },{
      id: 3,
      name: 'Something',
      checked: false
    }],
    id: 4
  }

  checkTodo = id => {
    function find(element) {
      return element.id === id
    }
    
    const todosNew = this.state.todos
    const index = todosNew.findIndex(find)
    todosNew[index].checked = !todosNew[index].checked 
    
    this.setState({
      todos: todosNew
    });

    console.log(this.state.todos)
  }

  onChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let currentId = this.state.id

    const todo = {
      id: currentId,
      name: this.state.name,
      checked: false
    }

    let newId = currentId+= 1;

    this.setState({
      todos: [...this.state.todos, todo],
      id: newId,
      name: "",
    });
  }

  render(){
    return (
        <div>
          <h1>Today</h1>
          
          <hr />
          {this.state.todos.map((todo, i) => (
          <Todo key={String(todo.id)} {...todo} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo}/>
        ))}
        </div>
    )
  }
}

export default TodoList;