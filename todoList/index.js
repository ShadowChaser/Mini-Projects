let items = [];
const itemsDiv = document.querySelector("#items");
const input = document.querySelector("#itemInput");
const storageKey = "items";

function renderItems() {
  itemsDiv.innerHTML = null;
  items.map((item, idx) => {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";

    const text = document.createElement("p");
    text.style.display = "inline";
    text.style.marginRight = "10px";
    const button = document.createElement("button");

    button.textContent = "Delete";
    text.textContent = item;
    button.onclick = () => removeItem(idx);

    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  });
}
renderItems();

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) {
    items = JSON.parse(oldItems);
  }
  renderItems();
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function addItem() {
  const value = input.value;
  if (!value) {
    alert("You can't add an emty Item");
    return;
  }
  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);
