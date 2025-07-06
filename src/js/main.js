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
  console.log('showScene called with:', scene.constructor.name);
  
  if (currentScene) {
    console.log('Cross-fading from:', currentScene.constructor.name, 'to:', scene.constructor.name);
    
    // Mount new scene first (but keep it hidden)
    scene.mount(app);
    scene.el.style.opacity = '0';
    scene.el.style.pointerEvents = 'none';
    
    // Start fade out of current scene
    currentScene.el.classList.add('fade-out');
    
    // After fade out completes, show new scene and cleanup old one
    setTimeout(() => {
      // Fade in new scene
      scene.el.style.opacity = '1';
      scene.el.style.pointerEvents = 'auto';
      scene.el.classList.add('active');
      
      // Remove old scene
      if (currentScene && currentScene.unmount) {
        currentScene.unmount();
      }
      currentScene = scene;
    }, 400); // Match CSS transition duration
    
  } else {
    // First scene - just show it
    console.log('Showing first scene:', scene.constructor.name);
    currentScene = scene;
    scene.mount(app);
    scene.el.classList.add('active');
  }
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
  const introScene = new IntroScene(() => {
    showScene(new GalleryScene(
      (slideIdx) => {
        showScene(new VideoScene(slideIdx));
      },
      () => {
        // CTA click: could show a message or external link
      }
    ));
  });
  showScene(introScene);
}

startApp();
checkOrientation();
