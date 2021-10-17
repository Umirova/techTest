const cart = new Cart();
cart.load();
cart.render();
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const add3 = document.getElementById("add3");
const finalCart = document.getElementById("carttoappear");

function validation() {
  let name1 = document.getElementById("name1");
  let name2 = document.getElementById("name2");
  let name3 = document.getElementById("name3");
  let quantity1 = document.getElementById("quantity1");
  let quantity2 = document.getElementById("quantity2");
  let quantity3 = document.getElementById("quantity3");
  let total = 0;
  if (quantity1.value > 0) {
    let n = quantity1.value;
    let price = 669;
    let subtotal = n * price;
    cart.addItem(name1.innerHTML, quantity1.value, price, subtotal);
    total += subtotal;
  }
  if (quantity2.value > 0) {
    let n = quantity2.value;
    let price = 669;
    let subtotal = n * 669;
    cart.addItem(name2.innerHTML, quantity2.value, price, subtotal);
    total += subtotal;
  }
  if (quantity3.value > 0) {
    let n = quantity3.value;
    let price = 1119;
    let subtotal = n * 669;
    cart.addItem(name3.innerHTML, quantity3.value, price, subtotal);
    total += subtotal;
  }
  finalCart.style.visibility = "visible";
}

add1.addEventListener("click", validation);
add2.addEventListener("click", validation);
add3.addEventListener("click", validation);
