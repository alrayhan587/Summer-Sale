// I will make this code reusable later

let i = 1;
// this section is for total calculated price information
const totalPriceField = document.getElementById('total-price');
const totalPriceString = totalPriceField.innerText;
let totalPrice = parseFloat(totalPriceString);

const discountPriceField = document.getElementById('discount-price');
// const discountPriceString = discountPriceField.innerText;
// let discountPrice = parseFloat(discountPriceString);

const totalPayableField = document.getElementById('total-payable');

function getProductList(inputID, productID, priceID, listID) {

    const productno = document.getElementById(inputID);
    const Nameno = document.getElementById(productID);
    const NameValue = Nameno.innerText;






    productno.addEventListener("click", function () {
        // This section is for price information
        const priceValueField = document.getElementById(priceID);
        const priceValueString = priceValueField.innerText;
        let priceValue = parseFloat(priceValueString);

        const listContainer = document.getElementById(listID);
        const p = document.createElement("p");
        p.innerText = i + ". " + NameValue;
        listContainer.appendChild(p);
        i++;
        totalPrice = totalPrice + priceValue;
        totalPriceField.innerText = parseFloat(totalPrice).toFixed(2) + " TK";


        totalPayableField.innerText=parseFloat(totalPrice).toFixed(2) + " TK";



    })
}


getProductList("product-1", "Name-1", "price-1", "list-container");
getProductList("product-2", "Name-2", "price-2", "list-container");
getProductList("product-3", "Name-3", "price-3", "list-container");
getProductList("product-4", "Name-4", "price-4", "list-container");
getProductList("product-5", "Name-5", "price-5", "list-container");
getProductList("product-6", "Name-6", "price-6", "list-container");
getProductList("product-7", "Name-7", "price-7", "list-container");
getProductList("product-8", "Name-8", "price-8", "list-container");
getProductList("product-9", "Name-9", "price-9", "list-container");



// step 1:add product to the cart   list
// step 2:add their price to the totalPrice
// step 3:find the discount value(20%Off)
//step 4:find the total payable price
//step 5:coupon apply will activate the discount
// step 6:alert for right promocode
// step 7: make purchase and a congratulation message

document.getElementById("discount-button").addEventListener("click", function () {

    promoCodeField = document.getElementById("promo-code");
    promoCode = promoCodeField.value;

    if (promoCode == "SELL200") {
        var discountPrice = parseFloat((20 / 100) * totalPrice).toFixed(2);
        discountPriceField.innerText = discountPrice + "Tk";

        var totalPayable = totalPrice - discountPrice;
        totalPayableField.innerText = parseFloat(totalPayable).toFixed(2) + " TK";
    }

    else {
        alert("Please enter a valid Promo Code");
        var discountPrice = 0.00;
        discountPriceField.innerText = parseFloat(discountPrice).toFixed(2) + " Tk";

        
    }
})



