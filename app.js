const submit = document.getElementById("submit");
const task = document.getElementById("task");
const tasks = document.getElementById("tasks");
const clearTask = document.getElementById("clear-task");
const all = document.getElementById("all-task");
const active = document.getElementById("active-task");
const completed = document.getElementById("completed-task");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const changeIcon = document.querySelector(".change-theme-icon");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (task.value === "") {
    return alert("add a task");
  }

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const check = document.createElement("a");
  ul.className = "sia";
  check.className = "checkItem";
  ul.appendChild(check);
  const checkLogo = document.createElement("i");
  checkLogo.className = "fa-solid fa-check hidden";
  check.appendChild(checkLogo);
  li.className = "item";
  ul.appendChild(li);
  li.appendChild(document.createTextNode(task.value));
  const link = document.createElement("a");
  link.className = "delete-item";
  ul.appendChild(link);

  tasks.appendChild(ul);
  task.value = "";

  check.addEventListener("click", () => {
    li.classList.toggle("done");
    checkLogo.classList.toggle("hidden");
  });

  link.addEventListener("click", () => {
    ul.classList.add("hidden");
  });
  all.addEventListener("click", () => {
    if (li.classList.contains("item")) {
      ul.classList.remove("hidden");
    }
  });
  active.addEventListener("click", () => {
    if (li.classList.contains("done")) {
      ul.classList.add("hidden");
    }
  });

  completed.addEventListener("click", () => {
    if (!li.classList.contains("done")) {
      ul.classList.add("hidden");
    }
  });
});
clearTask.addEventListener("click", (e) => {
  e.preventDefault();
  tasks.innerHTML = "";
  // while (tasks.firstChild) {
  //   tasks.removeChild(tasks.firstChild);
  // }
  task.value = "";
});

changeIcon.addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
});

// moon.addEventListener("click", () => {
//   let sia = document.querySelectorAll(".sia");
//   moon.classList.add("hidden");
//   sun.classList.remove("hidden");
//   header.style.background =
//     'url("./images/bg-desktop-dark.jpg") no-repeat center/cover ';
//   body.style.background = "hsl(235, 21%, 11%)";
//   task.style.background = "hsl(235, 24%, 19%)";
//   sia.forEach((item) => (item.style.background = "hsl(235, 24%, 19%)"));
//   sia.forEach((item) => (item.style.color = "hsl(234, 39%, 85%)"));
//   task.style.color = "#fff";
//   buttons.forEach((button) => (button.style.background = "hsl(235, 24%, 19%)"));
// });
