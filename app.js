// Define variables for product details
var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

// Define variables for displaying cart details
var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

// Function to add orders to the cart and compute total cost
function addOrder() {
  carts.textContent = ""; // Clear previous cart contents

  var totalCost = 0; // Initialize total cost variable

  // Add order for product 1 if quantity is greater than 0
  if (parseFloat(qty1.value) > 0) {
    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + ' ------ ' + product1.textContent + ' ------ Php ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
    carts.textContent += order;
    totalCost += parseFloat(qty1.value) * parseFloat(price1.textContent); // Add to total cost
  }

  // Add order for product 2 if quantity is greater than 0
  if (parseFloat(qty2.value) > 0) {
    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + ' ------ ' + product2.textContent + ' ------ Php ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
    carts.textContent += order;
    totalCost += parseFloat(qty2.value) * parseFloat(price2.textContent); // Add to total cost
  }

  // Display total cost
  total.textContent = "Total: Php " + totalCost.toFixed(2); // Assuming 2 decimal places for currency

  // Calculate change if cash is provided
  if (parseFloat(cash.value) >= totalCost) {
    var amountPaid = parseFloat(cash.value);
    var changeAmount = amountPaid - totalCost;
    change.textContent = "Change: Php " + changeAmount.toFixed(2); // Display change amount
  } else {
    change.textContent = "Insufficient Cash";
  }
}

// Event listeners for input fields to dynamically update cart on keyup
qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", addOrder); // Listen for cash input changes
