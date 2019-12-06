let products = [
    { id: 1, name: "CPU", amount: 3, price: 100 },
    { id: 2, name: "GPU", amount: 4, price: 150 },
    { id: 3, name: "HDD", amount: 10, price: 120 },
    { id: 4, name: "SSD", amount: 2, price: 180 }
]


//Adds table to the page
document.addEventListener('DOMContentLoaded', function () {
    fillShoppingCart(products);
});

//Filling the shopping cart
function fillShoppingCart(storage) {
    let priceCart = document.getElementById('priceCart');
    storage.forEach(function (newElement) {

        let tr = document.createElement('tr');
        tr.setAttribute('id', newElement.id);
        let idTD = document.createElement('td');
        let nameTD = document.createElement('td');
        let amountTD = document.createElement('td');
        let priceTD = document.createElement('td');

        idTD.innerHTML = newElement.id;
        nameTD.innerHTML = newElement.name;
        amountTD.innerHTML = newElement.amount;
        priceTD.innerHTML = newElement.price;

        tr.appendChild(idTD);
        tr.appendChild(nameTD);
        tr.appendChild(amountTD);
        tr.appendChild(priceTD);

        priceCart.appendChild(tr);

        tr.addEventListener('click', addCash);
        tr.addEventListener('click', incrementCartRow);

    });
}

//Moves to cart and count the amount
let idNumber = 1;
function incrementCartRow() {
    let findRow = document.getElementById(`products${this.id}`);

    if (this.children[2].innerHTML == 0) {
        alert('No items on the storage');
    }
    else if (findRow) {
        this.children[2].innerHTML--;
        findRow.children[2].innerHTML++;
    }
    else {
        this.children[2].innerHTML--;
        let copyRow = this.cloneNode(true);
        copyRow.setAttribute('id', `products${this.id}`);
        copyRow.children[0].innerHTML = (idNumber++);
        copyRow.children[2].innerHTML = 1;
        shopCart.append(copyRow);
        copyRow.addEventListener('click', decrementCartRow);
        copyRow.addEventListener('click', decrementCash);
    }
}

//Deletes from cart and return items to the storage
function decrementCartRow() {
    let cartRowId = this.id.slice(8);
    storeRow = document.getElementById(`${cartRowId}`);

    if (this.children[2].innerHTML == 1) {
        this.remove();
        storeRow.children[2].innerHTML++;
        idNumber--;
    } else {
        this.children[2].innerHTML--;
        storeRow.children[2].innerHTML++;
    }
}

// Price counter

let counter = document.createElement('p');
let priceCounter = 0;
function addCash() {      //Adds cash to the total price
    if (this.children[2].textContent > 0) {
        priceCounter += parseInt(this.children[3].innerHTML);
        counter.innerHTML = priceCounter;
        payment.append(counter);

    }


}

function decrementCash() {     //Returns cash from the total price
    priceCounter -= parseInt(this.children[3].innerHTML);
    counter.innerHTML = priceCounter;
    payment.append(counter);

}




