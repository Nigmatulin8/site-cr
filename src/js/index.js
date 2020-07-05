// let slides = document.querySelectorAll("img[alt=slide]");
// let btnRight = document.querySelector(".btnRight");
// let btnLeft = document.querySelector(".btnLeft");

// let i = 0;

// btnRight.addEventListener("click", () => {
//     ++i;

//     if (i >= slides.length) {
//         slides[i-1].classList.remove("block");
//         i = 0;
//         slides[i].classList.add("block");
//     } 
//     else {
//         slides[i-1].classList.remove("block");
//         slides[i].classList.add("block");
//     }
// });

// btnLeft.addEventListener("click", () => {
//     --i;

//     if (i < 0) {
//         slides[i+1].classList.remove("block");
//         i = slides.length - 1;
//         slides[i].classList.add("block");
//     } 
//     else {
//         slides[i+1].classList.remove("block");
//         slides[i].classList.add("block");
//     }
// })

// //Смена фона в заголовке
// let header = document.querySelector(".header");
// let headerActive = document.querySelectorAll(".roof");

// headerActive.forEach(item => {
//     item.addEventListener('mouseover', e => {
//         if(item.dataset.part == 'roof') {
//             header.classList.remove('header__facade__active');
//             header.classList.remove('header__fence__active');

//             header.classList.add('header__roof__active');
//         }

//         if(item.dataset.part == 'facade') {
//             header.classList.remove('header__roof__active');
//             header.classList.remove('header__fence__active');

//             header.classList.add('header__facade__active');
//         }

//         if(item.dataset.part == 'fence') {
//             header.classList.remove('header__roof__active');
//             header.classList.remove('header__facade__active');

//             header.classList.add('header__fence__active');
//         }
//     });

//     item.addEventListener('mouseout', e => {
//         header.classList.remove('header__facade__active');
//         header.classList.remove('header__fence__active');
//         header.classList.remove('header__roof__active');
//     });

//     console.log(header);
// });


//Кнопка вверх
// function backToTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -20);
//         setTimeout(backToTop, 0);
//     }
// }

// let goTopBtn = document.querySelector('#goUP');
// goTopBtn.addEventListener('click', backToTop);