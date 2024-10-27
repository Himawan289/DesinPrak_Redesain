document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Simpan pengaduan ke dalam localStorage (contoh sederhana)
    var complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    complaints.push({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
    localStorage.setItem('complaints', JSON.stringify(complaints));

    // Tampilkan notifikasi berhasil
    document.querySelector('.notification').style.display = 'block';

    // Redirect ke halaman daftar pengaduan setelah 2 detik
    setTimeout(function() {
        window.location.href = 'daftarpengaduan.html'; // Ganti dengan path halaman daftar pengaduan
    }, 2000);
});
