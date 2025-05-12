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
