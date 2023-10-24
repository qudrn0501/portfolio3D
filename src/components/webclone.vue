<template>
  <section class="clone scroll">
    <article class="clone_container">
      <h1>Web Clones</h1>
      <swiper
        :navigation="true"
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="clone_box"
      >
        <swiper-slide>
          <div class="clone_img">
            <img src="../../public/img/singhouse.png" alt="">
          </div>
          <div class="clone_content">
            <h3>싱그러운 집</h3>
            <p>HTML5 / CSS3 / JavaScript / jQuery</p>
            <button onclick="window.open('http://qudrn0501.dothome.co.kr/singhouse/singhouse_main.html');">Page Link</button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="clone_img">
            <img src="../../public/img/pollexzone.png" alt="">
          </div>
          <div class="clone_content">
            <h3>POLLEXZONE</h3>
            <p>HTML5 / CSS3 / JavaScript / jQuery</p>
            <button onclick="window.open('http://qudrn0501.dothome.co.kr/pollexzone/pollexzone_main.html');">Page Link</button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="clone_img">
            <img src="../../public/img/dcaf.png" alt="">
          </div>
          <div class="clone_content">
            <h3>대전문화재단</h3>
            <p>HTML5 / CSS3 / JavaScript / jQuery</p>
            <button onclick="window.open('http://qudrn0501.dothome.co.kr/dcaf/dcaf.html');">Page Link</button>    
          </div>
        </swiper-slide>
      </swiper>
      <!-- <ul class="clone_box">
        <li>
          <img src="../../public/img/singhouse.png" alt="">
        </li>
        <li>
          <img src="../../public/img/pollexzone.png" alt="">
        </li>
        <li>
          <img src="../../public/img/dcaf.png" alt="">
        </li>
      </ul> -->
      <!-- <ul class="clone_content">
        <li>
          <h3>싱그러운 집</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery</p>
          <button onclick="window.open('http://qudrn0501.dothome.co.kr/singhouse/singhouse_main.html');">Page Link</button>
        </li>
        <li>
          <h3>POLLEXZONE</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery</p>
          <button onclick="window.open('http://qudrn0501.dothome.co.kr/pollexzone/pollexzone_main.html');">Page Link</button>
        </li>
        <li>
          <h3>대전문화재단</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery</p>
          <button onclick="window.open('http://qudrn0501.dothome.co.kr/dcaf/dcaf.html');">Page Link</button>
        </li>
      </ul> -->
    </article>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';


export default {
  name: 'webclone-page',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
        console.log(swiper);
      };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  }
}

</script>
