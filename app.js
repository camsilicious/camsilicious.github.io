// Define variables for product details
const product1 = {
  name: "Secret Desire",
  price: 299.00,
  qtyInput: document.getElementById("qty1"),
  priceDisplay: document.getElementById("price1")
};

const product2 = {
  name: "Sweet Serenity",
  price: 299.00,
  qtyInput: document.getElementById("qty2"),
  priceDisplay: document.getElementById("price2")
};

const product3 = {
  name: "Angel's Dust",
  price: 199.00,
  qtyInput: document.getElementById("qty3"),
  priceDisplay: document.getElementById("price3")
};

const product4 = {
  name: "Love Luna",
  price: 199.00,
  qtyInput: document.getElementById("qty4"),
  priceDisplay: document.getElementById("price4")
};

const product5 = {
  name: "Floral Musk",
  price: 199.00,
  qtyInput: document.getElementById("qty5"),
  priceDisplay: document.getElementById("price5")
};

const product6 = {
  name: "Dreamy Bliss",
  price: 299.00,
  qtyInput: document.getElementById("qty6"),
  priceDisplay: document.getElementById("price6")
};

// Define variables for displaying cart details
const carts = document.getElementById("carts");
const totalDisplay = document.getElementById("total");
const cashInput = document.getElementById("cash");
const changeDisplay = document.getElementById("change");

// Function to calculate total cost and change
function calculateAndDisplay() {
  // Clear previous cart contents
  carts.textContent = "";

  let totalCost = 0;

  // Process product 1
  if (parseFloat(product1.qtyInput.value) > 0) {
    const qty1 = parseFloat(product1.qtyInput.value);
    const price1 = product1.price;
    const subtotal1 = qty1 * price1;
    carts.textContent += `${qty1} pc/s x ${price1.toFixed(2)} ------ ${product1.name} ------ Php ${subtotal1.toFixed(2)}\n`;
    totalCost += subtotal1;
  }

  // Process product 2
  if (parseFloat(product2.qtyInput.value) > 0) {
    const qty2 = parseFloat(product2.qtyInput.value);
    const price2 = product2.price;
    const subtotal2 = qty2 * price2;
    carts.textContent += `${qty2} pc/s x ${price2.toFixed(2)} ------ ${product2.name} ------ Php ${subtotal2.toFixed(2)}\n`;
    totalCost += subtotal2;
  }

 // Process product 3
  if (parseFloat(product3.qtyInput.value) > 0) {
    const qty3 = parseFloat(product3.qtyInput.value);
    const price3 = product3.price;
    const subtotal3 = qty3 * price3;
    carts.textContent += `${qty3} pc/s x ${price3.toFixed(2)} ------ ${product3.name} ------ Php ${subtotal3.toFixed(2)}\n`;
    totalCost += subtotal3;
  }

 // Process product 4
  if (parseFloat(product4.qtyInput.value) > 0) {
    const qty4 = parseFloat(product4.qtyInput.value);
    const price4 = product4.price;
    const subtotal4 = qty4 * price4;
    carts.textContent += `${qty4} pc/s x ${price4.toFixed(2)} ------ ${product4.name} ------ Php ${subtotal4.toFixed(2)}\n`;
    totalCost += subtotal4;
  }

 // Process product 5
  if (parseFloat(product5.qtyInput.value) > 0) {
    const qty5 = parseFloat(product5.qtyInput.value);
    const price5 = product5.price;
    const subtotal5 = qty5 * price5;
    carts.textContent += `${qty5} pc/s x ${price5.toFixed(2)} ------ ${product5.name} ------ Php ${subtotal5.toFixed(2)}\n`;
    totalCost += subtotal5;
  }

 // Process product 6
  if (parseFloat(product6.qtyInput.value) > 0) {
    const qty6 = parseFloat(product6.qtyInput.value);
    const price6 = product6.price;
    const subtotal6 = qty6 * price6;
    carts.textContent += `${qty6} pc/s x ${price6.toFixed(2)} ------ ${product6.name} ------ Php ${subtotal6.toFixed(2)}\n`;
    totalCost += subtotal6;
  }


  // Display total cost
  totalDisplay.value = `Total: Php ${totalCost.toFixed(2)}`;

  // Calculate change if cash tendered is provided
  const cashAmount = parseFloat(cashInput.value);
  if (!isNaN(cashAmount) && cashAmount >= totalCost) {
    const changeAmount = cashAmount - totalCost;
    changeDisplay.value = `Change: Php ${changeAmount.toFixed(2)}`;
  } else {
    changeDisplay.value = "Insufficient Cash";
  }
}

// Event listeners for input fields to dynamically update calculations
product1.qtyInput.addEventListener("input", calculateAndDisplay);
product2.qtyInput.addEventListener("input", calculateAndDisplay);
product3.qtyInput.addEventListener("input", calculateAndDisplay);
product4.qtyInput.addEventListener("input", calculateAndDisplay);
product5.qtyInput.addEventListener("input", calculateAndDisplay);
product6.qtyInput.addEventListener("input", calculateAndDisplay);
cashInput.addEventListener("input", calculateAndDisplay);
