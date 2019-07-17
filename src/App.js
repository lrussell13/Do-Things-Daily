import React from 'react';
import TodoList from './TodoList/TodoList';
import { todoServices } from './TodoServices';
import './app.css'


class App extends React.Component{
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
      <main className='App'>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo}/>
      </main>
    );
  }
}

export default App;