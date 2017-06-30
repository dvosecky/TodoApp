angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todoText = "";
    todoList.todos = [
      {text:'test todo 1', done:true},
      {text:'test todo 2', done:false}
    ];

    todoList.addTodo = function() {
      if (todoList.todoText == "") {
        todoList.todoText = "empty task";
      }
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = "";
    }

    todoList.deleteTodo = function(index) {
      todoList.todos.splice(index, 1);
    }

  });

/*
// initialization code
var list = [];
var idCounter = 100;

if (localStorage.getItem('todoList') != null) {
  list = JSON.parse(localStorage.getItem('todoList') );
  idCounter = JSON.parse(localStorage.getItem('todoListIdCounter'))
}
refreshList();



function addItem() {
  const newTaskElement = document.getElementById('newTask')
  const newItem = {
                    id: idCounter,
                    timeStamp: new Date(),
                    task:newTaskElement.value,
                    completed:false,
                    editingMode:false
                  };
  idCounter++;
  localStorage.setItem('todoListIdCounter', JSON.stringify(idCounter) );

  if (newItem.task == "") {
    newItem.task = "empty task";
  }

  list.push(newItem);
  // alert("id: " + newItem.id + " time: " + newItem.timeStamp);
  refreshList();
  newTaskElement.value = "";
  newTaskElement.focus();
}

function editItem(itemIndex) {
  list[itemIndex].editingMode = true;
  refreshList();
  document.getElementById('edit' + itemIndex).focus();
}

function finishedEditing(itemIndex) {
  list[itemIndex].timeStamp = new Date();
  list[itemIndex].editingMode = false;

  var editedTaskValue = document.getElementById('edit' + itemIndex).value;
  if (editedTaskValue == "") {
    editedTaskValue = "empty task";
  }
  list[itemIndex].task = editedTaskValue;
  // alert("updated id: " + list[itemIndex].id + " at " + list[itemIndex].timeStamp);
  refreshList();
}

function removeItem(itemIndex) {
  list.splice(itemIndex, 1);
  refreshList();
}

function checkItem(isChecked, itemIndex) {
  list[itemIndex].completed = !list[itemIndex].completed;
  refreshList();
}

function refreshList() {
  // refresh the list html
  const listLength = list.length;
  var completeNewHTML = "";

  for (var i = 0; i < listLength; i++) {
    const currentItemHTML = constructHTMLCodeForItem(i);
    completeNewHTML += currentItemHTML;
  }
  document.getElementById('list').innerHTML = completeNewHTML;

  // update the localStorage object
  localStorage.setItem('todoList', JSON.stringify(list));
}

function constructHTMLCodeForItem(itemIndex) {
  // some parts of the html code to be constructed depend on the
  // current state of the item. these variables store the appropriate
  // html code to be inserted into the newHTML variable below
  var checkedOrUnchecked;
  var crossedOutTaskOrNot;
  var inEditingModeOrNot;

  if (list[itemIndex].completed == true) {
    checkedOrUnchecked = "checked";
    crossedOutTaskOrNot = "visible";
  } else {
    checkedOrUnchecked = "";
    crossedOutTaskOrNot = "hidden";
  }

  if (list[itemIndex].editingMode == true) {
    inEditingModeOrNot =
      // editing textfield
      '<input type="text" id="edit' + itemIndex +
      '" class="editTextField" placeholder="Editing task..." value="' + list[itemIndex].task + '" ' +
      'onblur="finishedEditing(this.parentNode.id)"/>\n' +
      // 'done editing' button
      '<button class="doneEditingButton" onclick="finishedEditing(this.parentNode.id)">Done</button>\n';
  }
  else {
    // not in editing mode
    inEditingModeOrNot =
      // task label with strikethrough
      '<div class="labelWithStrikethrough">\n' +
      '<hr class="strikethrough" style="visibility: ' + crossedOutTaskOrNot + '">\n' +
      '<label onclick="editItem(this.parentNode.parentNode.id)">' + list[itemIndex].task + '</label>\n' +
      '</div>' +
      // delete button
      '<button class="deleteButton" onclick="removeItem(this.parentNode.id)"></button>\n';
  }

  var newHTML =
    '<div id="' + itemIndex + '" class="item">\n' +
    // checkbox
    '<input type="checkbox" id="box' + itemIndex + '" ' + checkedOrUnchecked + ' ' +
    'onclick="checkItem(this.checked, this.parentNode.id)">\n' +
    '<label for="box' + itemIndex + '"></label>\n' +
    // red lines
    '<hr class="redLine"><hr class="redLine">\n' +
    inEditingModeOrNot +
    '</div>\n' +
    '<hr>';
  //alert(newHTML);
  return newHTML;
}*/
