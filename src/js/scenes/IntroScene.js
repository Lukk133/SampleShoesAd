import headlineImg from '../../../assets/headline.png';
import { gsap } from 'gsap';

export default class IntroScene {
  constructor(onFinish) {
    this.onFinish = onFinish;
    this.el = document.createElement('div');
    this.el.className = 'scene scene-intro';
    this.timer = null;
  }

  mount(parent) {
    this.el.innerHTML = `
      <div class="intro-bg"></div>
      <img alt="Headline" class="intro-headline" />
    `;
    parent.appendChild(this.el);
    
    const headline = this.el.querySelector('.intro-headline');
    headline.src = headlineImg;
    
    gsap.set(headline, { y: 50, opacity: 0, scale: 0.8 });
    gsap.to(headline, { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      duration: 1.2, 
      ease: "back.out(1.7)",
      delay: 0.3
    });
    
    gsap.to(headline, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5
    });
    
    this.timer = setTimeout(() => {
      // No need for exit animation - let the cross-fade handle it
      this.onFinish();
    }, 8000); // Full 8 seconds as specified
  }

  unmount() {
    clearTimeout(this.timer);
    this.el.remove();
  }
} 