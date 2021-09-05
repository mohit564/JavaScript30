const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
const uncheckAll = document.querySelector(".uncheck-all");
const checkAll = document.querySelector(".check-all");
const deleteAll = document.querySelector(".delete-all");

function addItem(event) {
  event.preventDefault();
  const text = this.querySelector("input[name='item']").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
      <label for="item${i}">${plate.text}</label> 
    </li>
    `;
    })
    .join("");
}

function toggleDone(event) {
  // Skip if it is not checkbox
  if (!event.target.matches("input[type=checkbox]")) return;

  const index = event.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAllItems(event) {
  items.forEach((item) => {
    item.done = false;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAllItems(event) {
  items.forEach((item) => {
    item.done = true;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteAllItems(event) {
  items.length = 0;
  localStorage.removeItem("items");
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

uncheckAll.addEventListener("click", uncheckAllItems);
checkAll.addEventListener("click", checkAllItems);
deleteAll.addEventListener("click", deleteAllItems);

populateList(items, itemsList);
