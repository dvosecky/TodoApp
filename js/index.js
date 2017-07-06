angular.module('todoApp', [])
  .controller('TodoListController', function() {
    // initialize variables
    var todoList = this;
    var idCounter = 100;

    todoList.todoText = "";
    todoList.todos = [];

    // load data from localStorage if data is there
    if (localStorage.getItem('todoList') != null) {
      todoList.todos = JSON.parse(localStorage.getItem('todoList') );
      idCounter = JSON.parse(localStorage.getItem('todoListIdCounter'));
    }

    todoList.addTodo = function() {
      if (todoList.todoText == "") {
        todoList.todoText = "empty task";
      }

      todoList.todos.push({
        id:idCounter,
        timeStamp: new Date(),
        text:todoList.todoText,
        done:false,
        editing:false
      });
      idCounter++;
      todoList.updateLocalStorage();

      todoList.todoText = "";
      document.getElementById("addTodoElement").focus();
    }

    todoList.editTodo = function(index) {
      todoList.todos[index].editing=true;
      elementId = "editTodoElement" + index;
      document.getElementById(elementId).select();
    }

    todoList.doneEditing = function(index) {
      todoList.todos[index].editing=false;
      if (todoList.todos[index].text == "") {
        todoList.todos[index].text = "empty task";
      }

      todoList.updateLocalStorage();
    }

    todoList.deleteTodo = function(index) {
      todoList.todos.splice(index, 1);
      todoList.updateLocalStorage();
    }

    todoList.updateLocalStorage = function() {
      localStorage.setItem('todoList', JSON.stringify(todoList.todos));
      localStorage.setItem('todoListIdCounter', JSON.stringify(idCounter));
    }

  });
