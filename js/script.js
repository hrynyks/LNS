const slides = [...document.querySelectorAll('.partners__slide')]
const btns = [...document.querySelectorAll('.partners__button')];
const btnContainer = document.querySelector('.partners__circle')
const prevBtn = document.querySelector('#partners__prev-btn')
const nextBtn = document.querySelector('#partners__next-btn')

let activeIndex = 0;

prevBtn.addEventListener('click', () => {
    let index = activeIndex;

    if(index === 0) {
        index = btns.length-1
    } else index--

    switchSlide(index)
})

nextBtn.addEventListener('click', () => {
    let index = activeIndex;

    if(index === btns.length-1) {
        index = 0
    } else index++

    switchSlide(index)
})

btnContainer.addEventListener('click',({target}) => {
     let btn = null;
     if(target.classList.contains('partners__button')) {
         btn = target
     } else if (target.closest('.partners__button')) {
         btn = target.closest('.partners__button')
     }

if (btn) {
    const indexBtn = btns.findIndex(el => el === btn);
    switchSlide(indexBtn)
}

})

function switchSlide(indexBtn) {
    console.log(indexBtn);
    
   btns[activeIndex].classList.remove('active-btn');
   btns[indexBtn].classList.add('active-btn');

   slides[activeIndex].setAttribute('hidden', true);
   slides[indexBtn].removeAttribute('hidden');

   activeIndex = indexBtn;
}