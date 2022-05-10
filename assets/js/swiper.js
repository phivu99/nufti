var swiper =  new Swiper(".mainslider", {
    // autoplay: {
    // delay: 6000,
    // disableOnInteraction: false,
    // },
    slidesPerView: 1,
    loop: true,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper =  new Swiper(".carousel", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper =  new Swiper(".carousel-1", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-2", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 2,
    loop: true, 
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 92,
        },
    },
});

var swiper =  new Swiper(".carousel-3", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    slidesPerView: 3,   
    loop: false,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 74,
        },
    },
});

var swiper =  new Swiper(".carousel-4", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: false,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-5", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: false,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper =  new Swiper(".carousel-blog", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop:false,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
});
