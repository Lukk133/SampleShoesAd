import { gsap } from 'gsap';
import video from '../../../assets/video.mp4';

export default class VideoScene {
  constructor(slideIndex) {
    this.slideIndex = slideIndex;
    this.el = document.createElement('div');
    this.el.className = 'scene scene-video';
  }

  mount(parent) {
    const positions = [
      'top-left', 'top-right', 'bottom-left', 'bottom-right'
    ];
    const posClass = positions[this.slideIndex] || 'top-left';
    this.el.innerHTML = `
      <div class="video-bg"></div>
      <video class="video-player ${posClass}" src="${video}" autoplay loop muted playsinline></video>
    `;
    parent.appendChild(this.el);
    
    const videoPlayer = this.el.querySelector('.video-player');
    gsap.set(videoPlayer, { scale: 0, rotation: 10 });
    gsap.to(videoPlayer, {
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.2
    });
    
    videoPlayer.addEventListener('mouseenter', () => {
      gsap.to(videoPlayer, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    
    videoPlayer.addEventListener('mouseleave', () => {
      gsap.to(videoPlayer, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  }

  unmount() {
    this.el.remove();
  }
} 