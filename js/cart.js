const createCartHtml = (id, name, quantity, price, subtotal) => {
  const html = `  
  <tr id="${id}">
<td>${name}</td>
<td>${quantity}</td>
<td>${price}</td>
<td>${subtotal}</td>
<td><img class="delete-button" id="bin" src="./images/bin.png" ></td>
</tr>`;
  return html;
};

class Cart {
  constructor() {
    this.items = [];
  }
  addItem(id, name, quantity, price, subtotal) {
    //if we already have similar item in the cart
    if (this.items.some((i) => i.id == id)) {
      let matchingItem = this.items.find((it) => it.id == id);
      matchingItem.name = name;
      let a = Number(matchingItem.quantity);
      let b = Number(quantity);
      matchingItem.quantity= a+b;
      (matchingItem.price = price),
        (matchingItem.subtotal = matchingItem.quantity * matchingItem.price);
    }
    // if this item is new
    else {
      let item = {
        id,
        name: name,
        quantity: quantity,
        price: price,
        subtotal: subtotal,
      };
      this.items.push(item);
    }

    // adding new item
  }

  render() {
    let itemsHtmlList = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const itemHtml = createCartHtml(
        item.id,
        item.name,
        item.quantity,
        item.price,
        item.subtotal
      );
      itemsHtmlList.push(itemHtml);
      console.log(itemsHtmlList);
    }
    const itemsHtml = itemsHtmlList.join("\n");
    console.log(itemsHtml);
    const itemList = document.getElementById("mycart");

    itemList.innerHTML = itemsHtml;
  }

  save() {
    let itemsJson = JSON.stringify(this.items);
    localStorage.setItem("items", itemsJson);
  }
  load() {
    if (localStorage.getItem("items")) {
      let itemsJson = localStorage.getItem("items");
      this.items = JSON.parse(itemsJson);
    }
  }

  deleteItem(itemId) {
    let newItems = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.id !== itemId) {
        newItems.push(item);
      }
    }
    this.items = newItems;
  }
}

