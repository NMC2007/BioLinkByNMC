 export function initsider (options) {
    // slider
    const swiper = new Swiper('.swiper', {
        spaceBetween: 70,
        loop: false,
        speed: 600,

        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2,
        },
        preloadImages: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            850: {
                slidesPerView: 2
            },
            1550: {
                slidesPerView: 3
            },
        }
    })
} 