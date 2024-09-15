const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  sliderItems.forEach(item => {
    item.style.transform = `translateX(${offset}%)`;
  });
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();
