// Define variables for product details using an array
const products = [
  { name: "Secret Desire", price: 299.00, qtyInput: document.getElementById("qty1"), priceDisplay: document.getElementById("price1") },
  { name: "Sweet Serenity", price: 299.00, qtyInput: document.getElementById("qty2"), priceDisplay: document.getElementById("price2") },
  { name: "Angel's Dust", price: 199.00, qtyInput: document.getElementById("qty3"), priceDisplay: document.getElementById("price3") },
  { name: "Love Luna", price: 199.00, qtyInput: document.getElementById("qty4"), priceDisplay: document.getElementById("price4") }
];

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

  // Process each product
  products.forEach(product => {
    if (parseFloat(product.qtyInput.value) > 0) {
      const qty = parseFloat(product.qtyInput.value);
      const price = product.price;
      const subtotal = qty * price;
      carts.textContent += `${qty} pc/s x ${price.toFixed(2)} ------ ${product.name} ------ Php ${subtotal.toFixed(2)}\n`;
      totalCost += subtotal;
    }
  });

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
products.forEach(product => {
  product.qtyInput.addEventListener("input", calculateAndDisplay);
});
cashInput.addEventListener("input", calculateAndDisplay);
