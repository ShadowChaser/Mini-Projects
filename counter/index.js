let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

function changeIncrmentOrDecrement(data) {
  
}

function showIncrementTask() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.sort();
      data.forEach((task) => {
        const markup = `<li>${task.title}</li>`;
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
      });
    });
}
function showDecrementTask() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.reverse();
      data.forEach((task) => {
        const markup = `<li>${task.title}</li>`;
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
      });
    });
}

showTask();
