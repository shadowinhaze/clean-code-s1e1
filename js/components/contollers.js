export default class ToDoAppActions {

  static elementClasses = {
    todoList: 'task-list_todo',
    completedList: 'task-list_comleted',
    listItem: 'task-list__item',
    listItemOnEdit: 'task-list__item_on-edit',
    taskName: 'task-name',
    taskNameInput: 'task-name-input',
    newTaskNameInput: 'task-name-input_add'
  }

  static buttonClasses = {
    add: 'button_add',
    edit: 'button_edit',
    del: 'button_delete',
    check: 'task-checkbox',
    defBut: 'button',
    defCheck: 'task-checkbox'
  }
  
  static buttonTitles = {
    edit: 'Edit task item',
    save: 'Save edited task item',
    del: 'Delete task item'
  }
  
  static buttonInnerTexts = {
    edit: 'Edit',
    save: 'Save'
  }

  constructor(button) {
    this.button = button;
    this.taskItem = button.parentElement;
    this.taskName = this.taskItem.querySelector('.' + ToDoAppActions.elementClasses.taskName);
    this.taskNameInput = this.taskItem.querySelector('.' + ToDoAppActions.elementClasses.taskNameInput);
    this.taskList = this.taskItem.parentElement;
  }

  static createNewTaskElement = (taskName) => {
    const listItem = document.createElement("li");
    listItem.classList.add(ToDoAppActions.elementClasses.listItem);
    listItem.innerHTML = `
        <input type="checkbox" class="task-list__item__checkbox task-checkbox">
        <label class="task-list__item__name task-name">${taskName}</label>
        <input type="text" class="task-list__item__name-input task-name-input" value="${taskName}">
        <button class="button button_edit" title="${ToDoAppActions.buttonTitles.edit}">${ToDoAppActions.buttonInnerTexts.edit}</button>
        <button class="button button_delete" title="${ToDoAppActions.buttonTitles.del}"></button>
    `;
    return listItem;
  }

  addTask() {
    const newTaskName = document.querySelector('.' + ToDoAppActions.elementClasses.newTaskNameInput);
    if (newTaskName.value) {
      const todoList = document.querySelector('.' + ToDoAppActions.elementClasses.todoList);
      todoList.appendChild(ToDoAppActions.createNewTaskElement(newTaskName.value));
      newTaskName.value = '';
    } else {
      return
    }
  }

  editTask() {
    const onEditStatus = this.taskItem.classList.contains(ToDoAppActions.elementClasses.listItemOnEdit);
    if (onEditStatus) {
      this.taskName.innerText = this.taskNameInput.value;
      this.button.innerText = ToDoAppActions.buttonInnerTexts.edit;
      this.button.title = ToDoAppActions.buttonTitles.edit;
    } else {
      this.taskNameInput.value = this.taskName.innerText;
      this.button.innerText = ToDoAppActions.buttonInnerTexts.save;
      this.button.title = ToDoAppActions.buttonTitles.save;
    }
    this.taskItem.classList.toggle(ToDoAppActions.elementClasses.listItemOnEdit);
  }

  completeTask() {
    const inToDo = this.taskList.classList.contains(ToDoAppActions.elementClasses.todoList);
    if (inToDo) {
      const completedList = document.querySelector('.' + ToDoAppActions.elementClasses.completedList);
      completedList.appendChild(this.taskItem);
    } else {
      const todoList = document.querySelector('.' + ToDoAppActions.elementClasses.todoList);
      todoList.appendChild(this.taskItem);
    }
  }

  deleteTask() {
    this.taskList.removeChild(this.taskItem);
  }

}