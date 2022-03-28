function onNextClick(){
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += imgWidth;
}

function onPreviousClick(){
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= imgWidth;
}
feather.replace()

const nextEl = document.getElementById('next');
const previousEl = document.getElementById('previous');
const sliderEl = document.getElementById('slider');
const imgWidth = sliderEl.offsetWidth;

nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);