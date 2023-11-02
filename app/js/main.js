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


// day2. Creating The Steps

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const items = document.querySelectorAll('.day2__item');

let currentActive = 1;

console.log(next);
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > items.length) {
    currentActive = items.length;
  }; 

  update(); 
})

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  };

  update(); 
});

function update(){
  items.forEach((item, idx) => {
    if (idx < currentActive) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })

  if (currentActive === 1) {
  prev.disabled = true;
  console.log("prev");
} else if (currentActive === items.length) {
  next.disabled = true;
  console.log("next");
} else {
  prev.disabled = false;
  next.disabled = false;
}
console.log(currentActive);
}

