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
cashInput.addEventListener("input", calculateAndDisplay);
