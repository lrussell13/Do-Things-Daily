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
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
    }
}

export const todoServices = new TodoServices()