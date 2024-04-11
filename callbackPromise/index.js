const datas = [
  { name: "Abhishek", profession: "Software Engineer" },
  { name: "Sourav", profession: "Software Engineer" },
];

function getData() {
  let body = document.querySelector("body");
  let ul = document.createElement("ul");
  body.appendChild(ul);
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    ul.innerHTML = output;
  }, 2000);
}

getData();
