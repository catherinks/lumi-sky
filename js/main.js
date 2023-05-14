// Слайдер Swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        effect: 'cube',
        fadeEffect: {
            crossFade : true
        },
  });
  // Условие: Когда пользователь прокрутит вниз 1200 pх, кнопочка должна появиться.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById('mybtn').style.display = "block";
    } else {
        document.getElementById('mybtn').style.display  = "none";
    }
}

// Нажатие кнопки
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


