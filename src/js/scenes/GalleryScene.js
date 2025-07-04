import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class GalleryScene {
  constructor(onSlideClick, onCtaClick) {
    this.onSlideClick = onSlideClick;
    this.onCtaClick = onCtaClick;
    this.el = document.createElement('div');
    this.el.className = 'scene scene-gallery';
    this.swiper = null;
  }

  mount(parent) {
    this.el.innerHTML = `
      <div class="gallery-bg"></div>
      <div class="swiper gallery-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="assets/shoe1.png" alt="Shoe 1" /></div>
          <div class="swiper-slide"><img src="assets/shoe2.png" alt="Shoe 2" /></div>
          <div class="swiper-slide"><img src="assets/shoe3.png" alt="Shoe 3" /></div>
          <div class="swiper-slide"><img src="assets/shoe4.png" alt="Shoe 4" /></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <img src="assets/cta.png" alt="CTA" class="cta-btn" />
    `;
    parent.appendChild(this.el);
    this.swiper = new Swiper('.gallery-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 32,
        }
      }
    });
    this.el.querySelectorAll('.swiper-slide').forEach((slide, idx) => {
      slide.addEventListener('click', () => {
        console.log(`user_interaction:slide_click:${idx+1}`);
        this.onSlideClick(idx);
      });
    });
    this.el.querySelector('.cta-btn').addEventListener('click', () => {
      console.log('user_interaction:cta_click');
      this.onCtaClick();
    });
    console.log('scene_change:gallery');
  }

  unmount() {
    if (this.swiper) this.swiper.destroy();
    this.el.remove();
  }
} 