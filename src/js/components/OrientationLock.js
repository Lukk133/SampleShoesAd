export default class OrientationLock {
  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'orientation-lock';
    this.el.innerHTML = `
      <div class="orientation-lock__overlay">
        <p>Please rotate your device to portrait mode.</p>
      </div>
    `;
    this.visible = false;
  }

  show() {
    if (!this.visible) {
      document.body.appendChild(this.el);
      this.visible = true;
    }
  }

  hide() {
    if (this.visible) {
      this.el.remove();
      this.visible = false;
    }
  }

  check() {
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    if (isMobile && isLandscape) {
      this.show();
      document.getElementById('app').style.display = 'none';
    } else {
      this.hide();
      document.getElementById('app').style.display = '';
    }
  }
} 