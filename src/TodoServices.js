const baseURL = "http://localhost:8000"

class TodoServices {
  getAllTodos = () => {
      return fetch(`${baseURL}/api/todos`)
      .then(response => response.json())
  }
}

export const todoServices = new TodoServices()