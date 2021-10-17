
const createCartHtml = (
    name,
    quantity,
    price,
    subtotal
) =>{
const html = 
`  <tr>
<td>${name}</td>
<td>${quantity}</td>
<td>${price}</td>
<td>${subtotal}</td>
</tr>`
return html;
};


class Cart{
    constructor(){
        this.items = [];
    }
    addItem(name, quantity, price, subtotal){
        let item = {
            name: name,
            quantity: quantity,
            price: price,
            subtotal: subtotal,
        }
        this.items.push(item);
        console.log(this.items);
    }
    render(){
        let itemsHtmlList = [];
        for (let i=0; i<this.items.length; i++){
            const item = this.items[i];
            const itemHtml = createCartHtml(
                item.name,
                item.quantity,
                item.price,
                item.subtotal
            );
            itemsHtmlList.push(itemHtml);
        }
        const itemsHtml = itemsHtmlList.join("\n");
        const itemList = document.getElementById("mycart");
        itemList.innerHTML = itemsHtml;
    }
}




