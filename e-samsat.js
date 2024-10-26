// script.js

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Menangani pembukaan dan penutupan modal
function toggleModal(modalId, display) {
    const modal = document.getElementById(modalId);
    modal.style.display = display;
}

// Event listener untuk tombol bayar pajak
document.getElementById('payment-button').addEventListener('click', () => {
    toggleModal('payment-form', 'flex');
});

// Event listener untuk tombol riwayat pembayaran
document.getElementById('history-button').addEventListener('click', () => {
    displayPaymentHistory();
    toggleModal('payment-history', 'flex');
});

// Event listener untuk penutupan modal
document.querySelectorAll('.close').forEach(element => {
    element.addEventListener('click', () => {
        toggleModal('payment-form', 'none');
        toggleModal('payment-history', 'none');
    });
});

// Menangani pengiriman formulir pembayaran
document.getElementById('vehicle-registration').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const vehicleNumber = document.getElementById('vehicle-number').value;
    const ownerName = document.getElementById('owner-name').value;

    showNotification(`Pembayaran untuk kendaraan ${vehicleNumber} atas nama ${ownerName} berhasil!`);
    
    // Menyimpan riwayat pembayaran
    savePaymentHistory(vehicleNumber, ownerName);
    
    // Menutup modal setelah berhasil
    toggleModal('payment-form', 'none');
});

// Riwayat pembayaran
const paymentHistory = [];

function savePaymentHistory(vehicleNumber, ownerName) {
    paymentHistory.push({ vehicleNumber, ownerName });
}

function displayPaymentHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Clear previous history

    if (paymentHistory.length === 0) {
        historyList.innerHTML = '<li>Tidak ada riwayat pembayaran.</li>';
        return;
    }

    paymentHistory.forEach(payment => {
        const li = document.createElement('li');
        li.textContent = `Kendaraan: ${payment.vehicleNumber}, Pemilik: ${payment.ownerName}`;
        historyList.appendChild(li);
    });
}
