import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { gsap } from 'gsap';
import shoe1 from '../../../assets/shoe1.png';
import shoe2 from '../../../assets/shoe2.png';
import shoe3 from '../../../assets/shoe3.png';
import shoe4 from '../../../assets/shoe4.png';
import ctaImg from '../../../assets/cta.png';
import shadowImg from '../../../assets/shadow.png';

const shoeImages = [shoe1, shoe2, shoe3, shoe4];

export default class GalleryScene {
  constructor(onSlideClick, onCtaClick) {
    this.onSlideClick = onSlideClick;
    this.onCtaClick = onCtaClick;
    this.el = document.createElement('div');
    this.el.className = 'scene scene-gallery';
    this.swiper = null;
  }

  mount(parent) {
    const slides = shoeImages.map((shoe, i) => `
      <div class="swiper-slide">
        <img alt="Shoe ${i + 1}" class="shoe-img" src="${shoe}" />
        <img alt="Shadow" class="shoe-shadow" src="${shadowImg}" />
      </div>
    `).join('');

    this.el.innerHTML = `
      <div class="gallery-bg"></div>
      <div class="swiper gallery-swiper">
        <div class="swiper-wrapper">${slides}</div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <img alt="CTA" class="cta-btn" src="${ctaImg}" />
    `;
    parent.appendChild(this.el);
    
    const swiperEl = this.el.querySelector('.gallery-swiper');
    const cta = this.el.querySelector('.cta-btn');
    
    gsap.set([swiperEl, cta], { y: 50, opacity: 0 });
    gsap.to(swiperEl, { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out",
      delay: 0.2
    });
    gsap.to(cta, { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out",
      delay: 0.4
    });
    
    this.swiper = new Swiper(swiperEl, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
      loop: false,
      direction: 'horizontal',
      allowTouchMove: true,
      initialSlide: 0,
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
        console.log(`user_interaction:slide_click:${idx + 1}`);
        this.onSlideClick(idx);
      });
    });

    cta.addEventListener('click', () => {
      console.log('user_interaction:cta_click');
      gsap.to(cta, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
      this.onCtaClick();
    });
  }

  unmount() {
    if (this.swiper) this.swiper.destroy();
    this.el.remove();
  }
} 