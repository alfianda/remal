// Tambahkan script JavaScript untuk membuat slider
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevButton'); // Add a button with id 'prevButton' for manual navigation
const nextButton = document.getElementById('nextButton'); // Add a button with id 'nextButton' for manual navigation
let isSliding = false;

function slideNext() {
    if (!isSliding) {
        isSliding = true;
        slider.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            slider.appendChild(slider.firstElementChild);
            slider.style.transform = 'translateX(0)';
            isSliding = false;
        }, 800);
    }
}

function slidePrev() {
    if (!isSliding) {
        isSliding = true;
        slider.style.transform = 'translateX(100%)';
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        setTimeout(() => {
            slider.style.transform = 'translateX(0)';
            isSliding = false;
        }, 800);
    }
}

setInterval(slideNext, 3000); // Automatic sliding every 3 seconds (as before)

// Optional: Add event listeners for manual navigation
if (prevButton && nextButton) {
    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);
}
</script>
