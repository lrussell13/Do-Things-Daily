import React from 'react';
import TodoList from './Components/TodoList/TodoList';
import { todoServices } from './TodoServices';
import './app.css'
import Menu from './Components/Menu/Menu';


class App extends React.Component{
  state = {
    todos: [],
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
    todoServices.getAllTodos().then(todos => this.setState({todos}))
  }

  render(){
    return (
      <main className='App'>
        <Menu />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo}/>
      </main>
    );
  }
}

export default App;
