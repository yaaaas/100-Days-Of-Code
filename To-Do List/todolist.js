var todoList = {
  todos: [],
  
  addTodos: function(todo) {
    this.todos.push({
      task: todo,
      completed: false
    });
    
  },
  changeTodo: function(position, newValue) {
    this.todos[position].task = newValue;
    
  },
  modifyTodo: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
    
  },

  toggleAll: function() {
    var truevalues = this.todos.filter(function(list) {
        return (list.completed === true);
      })
      var trueno = parseInt(truevalues.length);
      todoList.todos.forEach(function(todo){
        //If all are true, change all to false
      
       if (truevalues.length === todoList.todos.length) {
         
          todo.completed=false;
          }
      else{
        //Else convert all to True
        
        todo.completed=true;
      }
       
        
   
  });
}
};

var handlers = {
  toggleAll: function() {

    todoList.toggleAll();
    view.displayList();

  },


  submit: function() {

    var input = document.getElementById("todo")
    todoList.addTodos(input.value);
    input.value = '';
    view.displayList();
  },

  modify: function() {
    var position = document.getElementById("pos").value;
    var newValue = document.getElementById("replace").value;
    todoList.changeTodo(position, newValue);
    view.displayList();

  },

  toggle: function() {
    var position = document.getElementById("toggle").value;
    todoList.modifyTodo(position);
    view.displayList();
  },

  delete: function(position) {
    
    todoList.todos.splice(position, 1);

    view.displayList();
  }
}

var view = {
  displayList: function() {
    var todoUl = document.querySelector("ul");
    todoUl.innerHTML = '';
    todoList.todos.forEach(function(tasks, position) {

      var todoLi = document.createElement("li")
      
      if (tasks.completed === true) {
        todoLi.textContent = "(x)" + tasks.task
        
      } else {
        todoLi.textContent = "( )" + tasks.task
        
      }
      todoLi.id = position;
      todoLi.appendChild(view.deleteButton());
      todoUl.appendChild(todoLi);
      
    })
  },
  deleteButton : function(){
    var deletebutton = document.createElement("Button");
    deletebutton.textContent = "Delete Task!"
    deletebutton.className = "deletebutton";
    return deletebutton;
  },
  
  
}

var todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event){
      
      var position = event.target.parentNode.id;
      handlers.delete(position);
      
    });
