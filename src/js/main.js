// Event tracking: ad_load
console.log('ad_load');

// App entry point placeholder
// Scenes and logic will be initialized here

import '../scss/style.scss';
import IntroScene from './scenes/IntroScene';
import GalleryScene from './scenes/GalleryScene';
import VideoScene from './scenes/VideoScene';
import OrientationLock from './components/OrientationLock';

const app = document.getElementById('app');
let currentScene = null;
const orientationLock = new OrientationLock();

function showScene(scene) {
  if (currentScene) currentScene.unmount();
  currentScene = scene;
  scene.mount(app);
}

// Orientation lock placeholder
function checkOrientation() {
  orientationLock.check();
}
window.addEventListener('resize', () => {
  console.log('window_resize');
  checkOrientation();
});
window.addEventListener('orientationchange', checkOrientation);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('page_hide');
  }
});

// Scene flow
function startApp() {
  showScene(new IntroScene(() => {
    showScene(new GalleryScene(
      (slideIdx) => {
        showScene(new VideoScene(slideIdx, () => {}));
      },
      () => {
        // CTA click: could show a message or external link
      }
    ));
  }));
}

startApp();
checkOrientation();
