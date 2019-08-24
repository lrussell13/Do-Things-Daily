import React from 'react';
import TodoList from './Components/TodoList/TodoList';
import { todoServices } from './TodoServices';
import './app.css'
import Menu from './Components/Menu/Menu';
//import Calendar from './Components/Calendar/Calendar';
//import { Route, Switch } from 'react-router-dom';


class App extends React.Component{
  state = {
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
    //todoServices.fetchTodos().then(todos => this.setState({todos}))
  }

  render(){
    return (
      <main className='App'>
        <Menu />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo}/>
      {/* <Calendar /> */}
      </main>
    );
  }
}

export default App;

/* 
login/info
Sunday-todos
Monday-todos
Tuesday-todos
...
2 table
1 for user
1 for the todos
*/