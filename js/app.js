import ToDoAppActions from './components/contollers.js';

document.addEventListener('click', e => {
  const eClass = e.target.classList;
  if (eClass.contains(ToDoAppActions.buttonClasses.defBut) || eClass.contains(ToDoAppActions.buttonClasses.defCheck)) {
    const button = new ToDoAppActions(e.target);
    switch (true) {
      case eClass.contains(ToDoAppActions.buttonClasses.edit):
        button.editTask();
        break;
      case eClass.contains(ToDoAppActions.buttonClasses.del):
        button.deleteTask();
        break;
      case eClass.contains(ToDoAppActions.buttonClasses.add):
        button.addTask();
        break;
      case eClass.contains(ToDoAppActions.buttonClasses.check):
        button.completeTask();
        break;
    }
  }
})