import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const containerElement = document.querySelector('.experience_box');
let timer = null;

const handleScroll = () => {
  if (timer !== null) {
    clearTimeout(timer);
  }

  if (containerElement.classList.contains('on-scrollbar') === false) {
    containerElement.classList.add('on-scrollbar');
  }

  timer = setTimeout(() => {
    containerElement.classList.remove('on-scrollbar');
  }, 800);
};

containerElement.addEventListener('scroll', handleScroll);


