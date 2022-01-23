let values = localStorage.getItem("values");

try {
  values = JSON.parse(values);
  values = values.length ? values : null;
} catch (error) {
  values = null;
}

if (!values) {
  values = [];

  localStorage.setItem("values", JSON.stringify(values));
}

function creatToDo(values) {
  let todoList = document.querySelector("ul");
  todoList.innerHTML = "";

  values.forEach((item, index) => {
    let li = document.createElement("li");
    li.className = item.complete ? "todo-list" : "todo-list-false";

    let text = document.createElement("span");
    text.textContent = item.text;
    text.className = "span-true";
    text.addEventListener("click", () => {
      values[index].complete = !values[index].complete;
      localStorage.setItem("values", JSON.stringify(values));
      creatToDo(values);
    });

    let deleteBtn = document.createElement("a");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", (e) => {
      values.splice(index, 1);
      localStorage.setItem("values", JSON.stringify(values));
      creatToDo(values);
    });

    li.appendChild(text);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.textInput.value);
  if (e.target.textInput.value) {
    values.push({
      text: e.target.textInput.value,
      complete: true,
    });
    localStorage.setItem("values", JSON.stringify(values));
    creatToDo(values);
  }
  e.target.textInput.value = "";
});

creatToDo(values);
