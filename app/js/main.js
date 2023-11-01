// Day 1. Expanding Cards

const cards = document.querySelectorAll('.day1__item');

function removeActiveClass() {
  cards.forEach(item => {
    item.classList.remove('active');
  });
};

cards.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveClass();
    item.classList.add('active');
  });
})