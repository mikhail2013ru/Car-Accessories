//Slider

//slideIndex - слайд в текущий момент
let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

    console.log(prev);

showSlides(slideIndex);

function showSlides(n) {

    if(n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    
    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }

    slideIndex++;
    if (slideIndex > slides.length) { 
       slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
    //dots[slideIndex-1].className+= " active";
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function minusSlides(n) {
    showSlides(slideIndex -= n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});