document.addEventListener('DOMContentLoaded', function() {
  const qtyInputs = document.querySelectorAll('.qty-input');
  const priceLabels = document.querySelectorAll('[id^="price"]');
  const cartsTextarea = document.getElementById('carts');
  const totalInput = document.getElementById('total');
  const cashInput = document.getElementById('cash');
  const changeInput = document.getElementById('change');

  // Event listener for quantity inputs
  qtyInputs.forEach((input, index) => {
    input.addEventListener('input', function() {
      updateCartAndTotal();
    });
  });

  // Function to update cart and total
  function updateCartAndTotal() {
    let cartContent = '';
    let totalPrice = 0;

    qtyInputs.forEach((input, index) => {
      const quantity = parseInt(input.value) || 0;
      const price = parseFloat(priceLabels[index].textContent);

      if (quantity > 0) {
        const productName = document.querySelector(`label[for="product${index + 1}"]`).textContent;
        const subtotal = quantity * price;
        cartContent += `${productName} x ${quantity} = ${subtotal.toFixed(2)}\n`;
        totalPrice += subtotal;
      }
    });

    cartsTextarea.value = cartContent;
    totalInput.value = totalPrice.toFixed(2);

    // Calculate change
    const cashTendered = parseFloat(cashInput.value) || 0;
    const change = cashTendered - totalPrice;
    changeInput.value = change.toFixed(2);
  }

  // Event listener for cash input
  cashInput.addEventListener('input', function() {
    updateCartAndTotal();
  });
});
