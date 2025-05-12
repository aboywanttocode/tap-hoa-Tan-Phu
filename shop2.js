// Biến lưu trữ số lượng giỏ hàng
let cartCount = 0;

// Lắng nghe sự kiện thêm vào giỏ hàng
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productName = event.target.getAttribute('data-product');
    const productPrice = event.target.getAttribute('data-price');

    // Cập nhật giỏ hàng
    cartCount++;

    // Cập nhật giao diện giỏ hàng
    document.getElementById('cartBtn').innerHTML = `Giỏ hàng (${cartCount})`;
    alert(`Đã thêm ${productName} vào giỏ hàng!`);
  });
});
let cart = [];

// Lắng nghe sự kiện thêm vào giỏ hàng
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productName = event.target.getAttribute('data-product');
    const productPrice = parseInt(event.target.getAttribute('data-price'));

    // Thêm sản phẩm vào giỏ hàng
    cart.push({ name: productName, price: productPrice });

    // Cập nhật giỏ hàng
    updateCart();
  });
});

// Cập nhật giỏ hàng trên giao diện
function updateCart() {
  // Hiển thị sản phẩm trong giỏ hàng
  const cartItemsDiv = document.getElementById('cartItems');
  cartItemsDiv.innerHTML = '';

  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `${item.name} - ${item.price}đ`;
    cartItemsDiv.appendChild(itemDiv);

    total += item.price;
  });

  // Hiển thị tổng tiền
  document.getElementById('totalPrice').innerHTML = `Tổng tiền: ${total}đ`;

  // Cập nhật số sản phẩm trong giỏ hàng
  document.getElementById('cartBtn').innerHTML = `Giỏ hàng (${cart.length})`;
}

// Xóa giỏ hàng
document.getElementById('clearCart').addEventListener('click', () => {
  cart = [];
  updateCart();
});
