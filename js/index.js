angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    // initialize variables
    var todoList = this;
    //var idCounter = 100;

    todoList.todoText = "";
    todoList.todos = [];

    firebase.database().ref().on('value', function(snapshot) {
      var i = 0;
      todoList.todos = [];
      snapshot.forEach(function(todo) {
        todoList.todos[i] = todo.val();
        todoList.todos[i].key = todo.key;
        i++;
      })
      if(!$scope.$$phase) {
        $scope.$apply();
      }
    });

    // load data from localStorage if data is there
    /*if (localStorage.getItem('todoList') != null) {
      todoList.todos = JSON.parse(localStorage.getItem('todoList') );
      idCounter = JSON.parse(localStorage.getItem('todoListIdCounter'));
    }*/

    todoList.addTodo = function() {
      if (todoList.todoText == "") {
        todoList.todoText = "empty task";
      }

      firebase.database().ref().push({
        text: todoList.todoText,
        done: false
      });

      /*todoList.todos.push({
        id:idCounter,
        timeStamp: new Date(),
        text:todoList.todoText,
        done:false,
        editing:false
      });*/
      //idCounter++;
      //todoList.updateLocalStorage();

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

      reference = firebase.database().ref('/' + todoList.todos[index].key + '/text');
      reference.set(todoList.todos[index].text);
    }

    todoList.deleteTodo = function(index) {
      firebase.database().ref('/' + todoList.todos[index].key).remove();
      //todoList.todos.splice(index, 1);
      //todoList.updateLocalStorage();*/
    }

    todoList.updateLocalStorage = function() {
      /*firebase.database().ref().push({
        text: "hello",
        done: false
      });*/
    }

  });
