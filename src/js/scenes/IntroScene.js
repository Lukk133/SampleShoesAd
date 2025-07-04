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
      <img src="assets/headline.png" alt="Headline" class="intro-headline" />
    `;
    parent.appendChild(this.el);
    this.timer = setTimeout(() => {
      this.onFinish();
    }, 8000);
    console.log('scene_change:intro');
  }

  unmount() {
    clearTimeout(this.timer);
    this.el.remove();
  }
} 