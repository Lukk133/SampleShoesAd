export default class VideoScene {
  constructor(slideIndex, onMount) {
    this.slideIndex = slideIndex;
    this.onMount = onMount;
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
      <video class="video-player ${posClass}" src="assets/video.mp4" autoplay loop muted playsinline></video>
    `;
    parent.appendChild(this.el);
    if (this.onMount) this.onMount();
    console.log('scene_change:video');
  }

  unmount() {
    this.el.remove();
  }
} 