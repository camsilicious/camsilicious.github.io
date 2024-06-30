document.addEventListener('DOMContentLoaded', function() {
  const qtyInputs = document.querySelectorAll('.qty-input');
  const priceLabels = document.querySelectorAll('[id^="price"]');
  const cartsTextarea = document.getElementById('carts');
  const totalInput = document.getElementById('total');
  const cashInput = document.getElementById('cash');
  const changeInput = document.getElementById('change');

  // Update cart and total when quantity changes
  qtyInputs.forEach((input, index) => {
    input.addEventListener('input', function() {
      updateCartAndTotal();
    });
  });

  // Update change calculation when cash tendered changes
  cashInput.addEventListener('input', function() {
    updateCartAndTotal();
  });

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

    const cashTendered = parseFloat(cashInput.value) || 0;
    const change = cashTendered - totalPrice;
    changeInput.value = change.toFixed(2);
  }
});
