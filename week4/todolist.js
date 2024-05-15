document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addTaskButton");
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");

  const todoMap = new Map();

  addButton.addEventListener("click", function () {
    const newTask = input.value;
    if (newTask && !todoMap.has(newTask)) {
      const listItem = document.createElement("li");
      const taskSpan = document.createElement("span");
      taskSpan.textContent = newTask;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          taskSpan.style.textDecoration = "line-through";
          taskSpan.style.color = "grey";
        } else {
          taskSpan.style.textDecoration = "none";
          taskSpan.style.color = "black";
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function () {
        list.removeChild(listItem);
        todoMap.delete(newTask);
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteBtn);

      list.appendChild(listItem);

      todoMap.set(newTask, listItem);

      input.value = "";
      input.focus();
    } else {
      if (todoMap.has(newTask)) {
        alert("이미 추가된 할 일입니다.");
      } else {
        alert("할 일을 입력하세요.");
      }
    }
  });
});
