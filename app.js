document.addEventListener('DOMContentLoaded', (event) => {
    const price1 = 10000.00;
    const price2 = 5000.00;

    const qty1Input = document.getElementById('qty1');
    const qty2Input = document.getElementById('qty2');
    const totalInput = document.getElementById('total');
    const cashInput = document.getElementById('cash');
    const changeInput = document.getElementById('change');
    const cartsTextarea = document.getElementById('carts');

    function updateCart() {
        const qty1 = parseInt(qty1Input.value) || 0;
        const qty2 = parseInt(qty2Input.value) || 0;

        const total = (qty1 * price1) + (qty2 * price2);
        totalInput.value = total.toFixed(2);

        let cartText = '';
        if (qty1 > 0) {
            cartText += Infinix Hot40Pro - Quantity: ${qty1}, Price: ${(qty1 * price1).toFixed(2)}\n;
        }
        if (qty2 > 0) {
            cartText += Infinix smart8 - Quantity: ${qty2}, Price: ${(qty2 * price2).toFixed(2)}\n;
        }

        cartsTextarea.value = cartText.trim();
    }

    function calculateChange() {
        const total = parseFloat(totalInput.value) || 0;
        const cash = parseFloat(cashInput.value) || 0;
        const change = cash - total;
        changeInput.value = change.toFixed(2);
    }

    qty1Input.addEventListener('input', updateCart);
    qty2Input.addEventListener('input', updateCart);
    cashInput.addEventListener('input', calculateChange);
});
