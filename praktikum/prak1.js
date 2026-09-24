// ================= FILTER MENU =================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Menghapus active dari semua tombol
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        // Memberi active pada tombol yang diklik
        button.classList.add("active");
        // Mengambil kategori
        const category = button.getAttribute("data-category");
        // Menampilkan menu sesuai kategori
        menuCards.forEach(function(card) {
            if (
                category === "all" ||
                card.getAttribute("data-category") === category
            ) {
                card.style.display = "grid";
            } else {
                card.style.display = "none";
            }
        });

    });

});

// ================= PESANAN =================
let jumlahPesanan = 0;
const cartCount = document.getElementById("cartCount");
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        jumlahPesanan++;
        cartCount.textContent = jumlahPesanan;
        alert("Menu berhasil ditambahkan!");
    });
});

// ================= TOMBOL KONTAK =================
const contactButton = document.getElementById("contactBtn");
contactButton.addEventListener("click", function() {
    alert("Hubungi Cafe Senja melalui WhatsApp: 0812-3456-7890");
});

// ================= TOMBOL PESANAN =================
const cartButton = document.getElementById("cartBtn");
cartButton.addEventListener("click", function() {
    if (jumlahPesanan === 0) {
        alert("Belum ada menu yang dipilih.");
    } else {
        alert(
            "Jumlah pesanan kamu: " + jumlahPesanan
        );
    }
});