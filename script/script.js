// Mengambil elemen HTML berdasarkan ID
const button = document.getElementById('action-btn');
const title = document.getElementById('text-title');

// Menambahkan fungsi klik pada tombol
button.addEventListener('click', function() {
    title.innerText = "Keren! Kode JS Berhasil!";
    title.style.color = "#28a745"; // Mengubah warna teks menjadi hijau
    button.innerText = "Selesai ✨";
    button.style.backgroundColor = "#28a745";
});
