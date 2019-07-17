const baseURL = "http://localhost:3000"

class TodoServices {
    path = "todos"
    
    fetchTodos(){
        return fetch(`${baseURL}/${this.path}`).then(res => res.json())
        
    }

    checkTodos(data, id){
        return fetch(`${baseURL}/${this.path}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
    }
}

export const todoServices = new TodoServices()