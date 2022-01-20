let values;

// TAG Form ( give text)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // create object  (unique id)
  storageValue = {
    id: "num" + Math.floor(Math.random() * (1000, 9000)),
    text: e.target.elements.textInput.value,
  };

  try {
    values = JSON.parse(localStorage.getItem("values")) ?? [];
  } catch {
    values = [];
  }
  //create Array for save to localStorage
  values.push({ storageValue });
  localStorage.setItem("values", JSON.stringify(values));

  //create Tags
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "chk-box");
  input.setAttribute("id", `${storageValue.id}`);

  let label = document.createElement("label");
  label.textContent = `${storageValue.text}`;
  label.setAttribute("for", `${storageValue.id}`);
  label.setAttribute("class", "chk-label");

  const btnDeleted = document.createElement("button");
  btnDeleted.setAttribute("class", "btn-delete");
  btnDeleted.textContent = "X";
  btnDeleted.addEventListener("click", () => {
    div.remove();
  });

  const div = document.createElement("div");
  div.setAttribute("class", "inputGroup");
  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(btnDeleted);

  document.querySelector(".container-center").appendChild(div);

  e.target.elements.textInput.value = "";
});

//localStorage.clear();
// if (e.target.elements.textInput.value === "") {
//   alert("please write do to");
// } else {

// }
