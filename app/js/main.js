// Day 1. Expanding Cards

// const cards = document.querySelectorAll('.day1__item');

// function removeActiveClass() {
//   cards.forEach(item => {
//     item.classList.remove('active');
//   });
// };

// cards.forEach(item => {
//   item.addEventListener('click', () => {
//     removeActiveClass();
//     item.classList.add('active');
//   });
// })


// // day2. Creating The Steps

// // const prev = document.querySelector('#prev');
// // const next = document.querySelector('#next');
// // const items = document.querySelectorAll('.day2__item');

// // let currentActive = 1;

// // console.log(next);
// // next.addEventListener('click', () => {
// //   currentActive++;
// //   if (currentActive > items.length) {
// //     currentActive = items.length;
// //   }; 

// //   update(); 
// // })

// // prev.addEventListener('click', () => {
// //   currentActive--;

// //   if (currentActive < 1) {
// //     currentActive = 1;
// //   };

// //   update(); 
// // });

// // function update(){
// //   items.forEach((item, idx) => {
// //     if (idx < currentActive) {
// //       item.classList.add('active');
// //     } else {
// //       item.classList.remove('active');
// //     }
// //   })

// //   if (currentActive === 1) {
// //   prev.disabled = true;
// //   console.log("prev");
// // } else if (currentActive === items.length) {
// //   next.disabled = true;
// //   console.log("next");
// // } else {
// //   prev.disabled = false;
// //   next.disabled = false;
// // }
// // console.log(currentActive);
// // }


// // day3  Rotating Navigation
// // const openBtn = document.getElementById('open');
// // const closeBtn = document.getElementById('close');
// // const content = document.querySelector('.container-day3');
// // const navDay3 = document.querySelector('.nav-day3');

// // console.log(openBtn);
// // console.log(closeBtn);
// // console.log(content);

// // openBtn.addEventListener('click', () => {
// //   content.classList.add('show-nav');
// //   navDay3.classList.add('show');
// // })

// // closeBtn.addEventListener('click', () => {
// //   content.classList.remove('show-nav');
// //   navDay3.classList.remove('show');
// // })

// //day 4 search btn in header

// const searchBtn = document.querySelector('.search__btn');
// const searchField = document.querySelector('.search');
// const searchInpur = document.querySelector('.search__input');

// searchBtn.addEventListener('click', () => {
//   searchField.classList.toggle('active');
//   searchInpur.focus();
// })


// //day5

// const loadText = document.querySelector('.day5__loading-text');
// const loadBg = document.querySelector('.day5__bg');
// console.log(loadBg);

// let load = 0;
// let int = setInterval(blurring, 30);

// function blurring() {
//   load++;
//   if (load >99) {
//     clearInterval(int)
//   }
//   loadText.innerText = `${load}%`;
//   loadText.style.opacity = scale(load, 0, 100, 1, 0);
//   loadBg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// }

// //day6 

// const boxesDay6 = document.querySelectorAll('.day6__item');

// window.addEventListener('scroll', checkBoxes);

// checkBoxes()

// function checkBoxes() {
//   const triggerBottom = window.innerHeight / 4 * 3;


//   boxesDay6.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }


//day7

// const right = document.querySelector('.day7__item--rigth');
// const left = document.querySelector('.day7__item--left');
// const day7Title = document.querySelector('.day7__title');
// const contentDay7 = document.querySelector('.day7__list');
// console.log(right);
// console.log(left);
// console.log(contentDay7);



//  left.addEventListener('mouseenter', () => {
//   console.log('dhdhjdjd');
//   contentDay7.classList.add('hover-left');
//  });

//  left.addEventListener('mouseleave', () => {
 
//   contentDay7.classList.remove('hover-left');
//  });


//  right.addEventListener('mouseenter', () => {
//   console.log('dhdhjdjd');
//   contentDay7.classList.add('hover-rigth');
//  });

//  right.addEventListener('mouseleave', () => {
 
//   contentDay7.classList.remove('hover-rigth');
//  });


 //day8
const fill = document.querySelector('.day8__fill');
const empties = document.querySelectorAll('.day8__item');
console.log(fill);

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (let empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

 function dragStart() {
  console.log('dragstart');
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0)
 }

 function dragEnd() {
  this.className = 'day8__fill'
 }

 function dragOver(e) {
  e.preventDefault()
 }

 function dragEnter(e) {
   e.preventDefault();
   this.className += ' hovered';
 }

 function dragLeave() {
  this.className += 'day8__fill';
 }
 
 function dragDrop() {
  this.className = 'day8__item';
  this.append(fill);
 }

 



