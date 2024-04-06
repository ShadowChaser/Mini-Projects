const ul = document.querySelector("#ul");

async function showList(item) {
  let data = null;
  let url = "https://fakestoreapi.com/users";

  item == "desc" ? (url = url + "?sort=" + item) : url;

  let value1 = await fetch(url);
  data = await value1.json();

  let ul = document.getElementById("ulId");
  ul.innerHTML = "";
  data.map((item) => {
    let li = document.createElement("li");
    li.innerHTML = item.username;
    ul.appendChild(li);
  });
}
