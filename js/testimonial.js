 document.addEventListener('DOMContentLoaded', () => {
      new Swiper('.testimonial-slider', {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
      });
    });