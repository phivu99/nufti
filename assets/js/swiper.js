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

var swiper =  new Swiper(".carousel3", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".seller-slider", {
    slidesPerView: 2,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1070: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 9,
            spaceBetween: 30,
        }
    },
});

var swiper =  new Swiper(".seller-slider2", {
    slidesPerView: 2,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1070: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 9,
            spaceBetween: 30,
        }
    },
});

var swiper =  new Swiper(".carousel4", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel5", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    loop: false, 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel6", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    loop: false, 
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
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



;

var swiper =  new Swiper(".carousel10", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 22,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    spaceBetween: 22,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 22,
        },
    },
});

var swiper =  new Swiper(".carousel11", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 22,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 22,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 22,
        },
    },
});

// var swiper =  new Swiper(".carousel-blog", {
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//         },
//     loop:false,
//     slidesPerView: 3,
//     slidesPerColumn: 2,
//     slidesPerColumnFill: 'row',
//     spaceBetween: 30,
//     navigation: {
//         clickable: true,
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         500: {
//             slidesPerView: 1,
//             slidesPerColumn: 2,
//             spaceBetween: 30,
//         },
//         768: {
//             slidesPerView: 2,
//             slidesPerColumn: 2,
//             spaceBetween: 30,
//         },
//         1024: {
//             slidesPerView: 3,
//             slidesPerColumn: 2,
//             spaceBetween: 30,
//         },
//     },
// });


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
