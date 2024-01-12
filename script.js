// Tambahkan script JavaScript untuk membuat slider
const slider = document.querySelector('.slider');
let isSliding = false;

function slideNext() {
    if (!isSliding) {
        isSliding = true;
        slider.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            slider.appendChild(slider.firstElementChild);
            slider.style.transform = 'translateX(0)';
            isSliding = false;
        }, 500);
    }
}

setInterval(slideNext, 3000); // Ganti gambar setiap 3 detik (sesuaikan dengan kebutuhan)

// Tambahkan fungsi untuk efek hover pada kartu anggota
function addHoverEffect(element) {
    element.classList.add('hover-effect');
}

function removeHoverEffect(element) {
    element.classList.remove('hover-effect');
}

// ... (kode sebelumnya)
