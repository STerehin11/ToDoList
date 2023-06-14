const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value == "") {
    alert("You must write somethink");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let completeButton = document.createElement("span");
    completeButton.className = "completeButton";
    completeButton.innerHTML = "✓";
    li.appendChild(completeButton);

    let closeButton = document.createElement("span");
    closeButton.className = "closeButton";
    closeButton.innerHTML = "\u00d7";
    li.appendChild(closeButton);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.className == "completeButton") {
      e.target.parentElement.classList.toggle("checked");
    } else if (e.target.className == "closeButton") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
