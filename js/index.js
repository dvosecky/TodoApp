angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {

    var todoList = this;
    todoList.todoText = "";

    // connect and listen to the database
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

    todoList.addTodo = function() {
      if (todoList.todoText == "") {
        todoList.todoText = "empty task";
      }

      firebase.database().ref().push({
        text: todoList.todoText,
        done: false
      });

      todoList.todoText = "";
      document.getElementById("addTodoElement").focus();
    }

    todoList.checkTodo = function(index) {
      var reference = firebase.database().ref('/' + todoList.todos[index].key + '/done');
      reference.set(todoList.todos[index].done);
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
      var reference = firebase.database().ref('/' + todoList.todos[index].key + '/text');
      reference.set(todoList.todos[index].text);
    }

    todoList.deleteTodo = function(index) {
      firebase.database().ref('/' + todoList.todos[index].key).remove();
    }

  });
