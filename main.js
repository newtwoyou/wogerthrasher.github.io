let carts = document.querySelectorAll('.add-cart');

let products = [ 
    {
        name: "FloralPink",
        tag: "floralpink",
        price: 40,
        inCart: 0
    },
    {
        name: "2",
        tag: "2",
        price: 20,
        inCart: 0
    },
    {
        name: "3",
        tag: "3",
        price: 15,
        inCart: 0
    },
    {
        name: "4",
        tag: "4",
        price: 20,
        inCart: 0
    },
	{
        name: "5",
        tag: "5",
        price: 15,
        inCart: 0
    },
	{
        name: "6",
        tag: "6",
        price: 20,
        inCart: 0
    },
	{
        name: "7",
        tag: "7",
        price: 20,
        inCart: 0
    },
	{
        name: "8",
        tag: "8",
        price: 20,
        inCart: 0
    },
	{
        name: "9",
        tag: "9",
        price: 20,
        inCart: 0
    },
	{
        name: "10",
        tag: "10",
        price: 20,
        inCart: 0
    },
	{
        name: "11",
        tag: "11",
        price: 20,
        inCart: 0
    },
	{
        name: "12",
        tag: "12",
        price: 20,
        inCart: 0
    },
	{
        name: "13",
        tag: "13",
        price: 20,
        inCart: 0
    },
	{
        name: "14",
        tag: "14",
        price: 20,
        inCart: 0
    },
	{
        name: "15",
        tag: "15",
        price: 20,
        inCart: 0
    },
	{
        name: "16",
        tag: "16",
        price: 20,
        inCart: 0
    },
	{
        name: "17",
        tag: "17",
        price: 20,
        inCart: 0
    },
	{
        name: "18",
        tag: "18",
        price: 20,
        inCart: 0
    },
	{
        name: "19",
        tag: "19",
        price: 20,
        inCart: 0
    },
	{
        name: "20",
        tag: "20",
        price: 20,
        inCart: 0
    },
	{
        name: "21",
        tag: "21",
        price: 20,
        inCart: 0
    },
	{
        name: "22",
        tag: "22",
        price: 20,
        inCart: 0
    },
	{
        name: "23",
        tag: "23",
        price: 20,
        inCart: 0
    },
	{
        name: "24",
        tag: "24",
        price: 20,
        inCart: 0
    },
	{
        name: "25",
        tag: "25",
        price: 20,
        inCart: 0
    },
	{
        name: "26",
        tag: "26",
        price: 20,
        inCart: 0
    },
	{
        name: "27",
        tag: "27",
        price: 20,
        inCart: 0
    },
	{
        name: "28",
        tag: "28",
        price: 20,
        inCart: 0
    },
	{
        name: "29",
        tag: "29",
        price: 20,
        inCart: 0
    },
	{
        name: "30",
        tag: "30",
        price: 20,
        inCart: 0
    },
	{
        name: "31",
        tag: "31",
        price: 20,
        inCart: 0
    },
	{
        name: "32",
        tag: "32",
        price: 20,
        inCart: 0
    },
	{
        name: "33",
        tag: "33",
        price: 20,
        inCart: 0
    },{
        name: "34",
        tag: "34",
        price: 20,
        inCart: 0
    },
	{
        name: "35",
        tag: "35",
        price: 20,
        inCart: 0
    },
	{
        name: "36",
        tag: "36",
        price: 20,
        inCart: 0
    },
	{
        name: "37",
        tag: "37",
        price: 20,
        inCart: 0
    },
	{
        name: "38",
        tag: "38",
        price: 20,
        inCart: 0
    },
	{
        name: "39",
        tag: "39",
        price: 20,
        inCart: 0
    },
	{
        name: "40",
        tag: "40",
        price: 20,
        inCart: 0
    },
	{
        name: "41",
        tag: "41",
        price: 20,
        inCart: 0
    },
	{
        name: "42",
        tag: "42",
        price: 20,
        inCart: 0
    },
	{
        name: "43",
        tag: "43",
        price: 20,
        inCart: 0
    },
	{
        name: "44",
        tag: "44",
        price: 20,
        inCart: 0
    },
	{
        name: "45",
        tag: "45",
        price: 20,
        inCart: 0
    },
	{
        name: "46",
        tag: "46",
        price: 20,
        inCart: 0
    },
	{
        name: "47",
        tag: "47",
        price: 20,
        inCart: 0
    },
	{
        name: "48",
        tag: "48",
        price: 20,
        inCart: 0
    },
	{
        name: "49",
        tag: "49",
        price: 20,
        inCart: 0
    },
	{
        name: "50",
        tag: "50",
        price: 20,
        inCart: 0
    },
	{
        name: "51",
        tag: "51",
        price: 20,
        inCart: 0
    },
	{
        name: "52",
        tag: "52",
        price: 20,
        inCart: 0
    },
	{
        name: "53",
        tag: "53",
        price: 20,
        inCart: 0
    },
	{
        name: "54",
        tag: "54",
        price: 20,
        inCart: 0
    },
	{
        name: "55",
        tag: "55",
        price: 20,
        inCart: 0
    },
	{
        name: "56",
        tag: "56",
        price: 20,
        inCart: 0
    },
	{
        name: "57",
        tag: "57",
        price: 20,
        inCart: 0
    },
	{
        name: "58",
        tag: "58",
        price: 20,
        inCart: 0
    },
	{
        name: "59",
        tag: "59",
        price: 20,
        inCart: 0
    },
	{
        name: "60",
        tag: "60",
        price: 20,
        inCart: 0
    },
	{
        name: "61",
        tag: "61",
        price: 20,
        inCart: 0
    },
	{
        name: "62",
        tag: "62",
        price: 20,
        inCart: 0
    },
	{
        name: "63",
        tag: "63",
        price: 20,
        inCart: 0
    },
	{
        name: "64",
        tag: "64",
        price: 20,
        inCart: 0
    },
	{
        name: "65",
        tag: "65",
        price: 20,
        inCart: 0
    },
	{
        name: "66",
        tag: "66",
        price: 20,
        inCart: 0
    },
	{
        name: "67",
        tag: "67",
        price: 20,
        inCart: 0
    },
	{
        name: "68",
        tag: "68",
        price: 20,
        inCart: 0
    },
	{
        name: "69",
        tag: "69",
        price: 20,
        inCart: 0
    },
	{
        name: "70",
        tag: "70",
        price: 20,
        inCart: 0
    },
	{
        name: "71",
        tag: "71",
        price: 20,
        inCart: 0
    },
	{
        name: "72",
        tag: "72",
        price: 20,
        inCart: 0
    },
	{
        name: "73",
        tag: "73",
        price: 20,
        inCart: 0
    },
	{
        name: "74",
        tag: "74",
        price: 20,
        inCart: 0
    },
	{
        name: "75",
        tag: "75",
        price: 20,
        inCart: 0
    },
	{
        name: "76",
        tag: "76",
        price: 20,
        inCart: 0
    },
	{
        name: "77",
        tag: "77",
        price: 20,
        inCart: 0
    },
	{
        name: "78",
        tag: "78",
        price: 20,
        inCart: 0
    },
	{
        name: "79",
        tag: "79",
        price: 20,
        inCart: 0
    },
	{
        name: "80",
        tag: "80",
        price: 20,
        inCart: 0
    },
	{
        name: "81",
        tag: "81",
        price: 20,
        inCart: 0
    },
	{
        name: "82",
        tag: "82",
        price: 20,
        inCart: 0
    },
	{
        name: "83",
        tag: "83",
        price: 20,
        inCart: 0
    },
	{
        name: "84",
        tag: "84",
        price: 20,
        inCart: 0
    },
	{
        name: "85",
        tag: "85",
        price: 20,
        inCart: 0
    },
	{
        name: "86",
        tag: "86",
        price: 20,
        inCart: 0
    },
	{
        name: "87",
        tag: "87",
        price: 20,
        inCart: 0
    },
	{
        name: "88",
        tag: "88",
        price: 20,
        inCart: 0
    },
	{
        name: "89",
        tag: "89",
        price: 20,
        inCart: 0
    },
	{
        name: "90",
        tag: "90",
        price: 20,
        inCart: 0
    },
	{
        name: "91",
        tag: "91",
        price: 20,
        inCart: 0
    },
	{
        name: "92",
        tag: "92",
        price: 20,
        inCart: 0
    },
	{
        name: "93",
        tag: "93",
        price: 20,
        inCart: 0
    },
	{
        name: "94",
        tag: "94",
        price: 20,
        inCart: 0
    },
	{
        name: "95",
        tag: "95",
        price: 20,
        inCart: 0
    },
	{
        name: "96",
        tag: "96",
        price: 20,
        inCart: 0
    },
];

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    // let productNumbers = localStorage.getItem('cartNumbers');
    // productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><ion-icon name="close-circle"></ion-icon>
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">$${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">$${item.inCart * item.price},00</div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cart},00</h4>
            </div>`

        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();

function clear() {
        localStorage.clear();
      }
