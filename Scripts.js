// Scripts.js

// Function to show SweetAlert popup for purchase
function showPurchasePopup() {
  Swal.fire({
    title: 'Pembelian Berhasil!',
    text: 'Terima kasih telah berbelanja di toko kami.',
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#a58863',
  });
}


// Function to show SweetAlert popup for adding to cart
function showAddToCartPopup() {
  Swal.fire({
    title: 'Produk Ditambahkan ke Keranjang!',
    text: 'Produk berhasil ditambahkan ke keranjang belanja Anda.',
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#a58863',
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  const buyNowButtons = document.querySelectorAll(".buyNowBtn");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Produk berhasil ditambahkan ke keranjang.',
        showConfirmButton: false,
        timer: 1500
      });
    });
  });

  buyNowButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Pembelian produk berhasil dilakukan.',
        showConfirmButton: false,
        timer: 1500
      });
    });
  });
});

// Attach event listeners to all buttons with the class 'buyNowBtn'
document.querySelectorAll('.buyNowBtn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (navigation)
    showPurchasePopup();
  });
});

// Attach event listeners to all buttons with the class 'addToCartBtn'
document.querySelectorAll('.addToCartBtn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (navigation)
    showAddToCartPopup();
  });
});

// Attach event listeners to all buttons with the class 'promoBuyNowBtn'
document.querySelectorAll('.promoBuyNowBtn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (navigation)
    showPurchasePopup();
  });
});
