const cart = new Cart();
const finalCart = document.getElementById("carttoappear");

function validation() {
  let name1 = document.getElementById("name1");
  let name2 = document.getElementById("name2");
  let name3 = document.getElementById("name3");
  let quantity1 = document.getElementById("quantity1");
  let quantity2 = document.getElementById("quantity2");
  let quantity3 = document.getElementById("quantity3");
  let id1 = document.getElementById("id1");
  let id2 = document.getElementById("id2");
  let id3 = document.getElementById("id3");

  let total = 0;

  if (quantity1.value > 0) {
    const id = 1;
    let n = quantity1.value;
    let price = 669;
    let subtotal = n * price;
    cart.addItem(id, name1.innerText, quantity1.value, price, subtotal);
  }
  if (quantity2.value > 0) {
    let id = 2;
    let n = quantity2.value;
    let price = 669;
    let subtotal = n * 669;
    cart.addItem(id, name2.innerText, quantity2.value, price, subtotal);
  }
  if (quantity3.value > 0) {
    id = 3;
    let n = quantity3.value;
    let price = 1119;
    let subtotal = n * 1119;
    cart.addItem(id, name3.innerText, quantity3.value, price, subtotal);
  }
  finalCart.style.visibility = "visible";
  cart.render();
  //   cart.save();

  if (quantity1.value > 0) {
    quantity1.value = "";
  }
  if (quantity2.value > 0) {
    quantity2.value = "";
  }
  if (quantity3.value > 0) {
    quantity3.value = "";
  }
}

const itemList = document.getElementById("itemList");
itemList.addEventListener("click", (event) => {
  if (event.target.classList.contains("addbutton")) {
    validation();
  }
  if (event.target.classList.contains("delete-button")){
    let parentItem = event.target.parentElement.parentElement;
    const itemId = Number(parentItem.dataset.itemName);;
    cart.deleteItem(itemId);
    cart.save();
    cart.render();
  }
});

