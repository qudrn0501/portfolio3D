<template>
 <section class="contact scroll">
    <article class="contact_container">
      <div class="contact_text">
        <h2>Contact Me</h2>
        <p>지속적으로 경험과 기술을 습득하여<br>
          <span>성장하는 모습이 보이는</span> 개발자가 되겠습니다.<br>
          아래의 버튼을 클릭하여 연락처를 확인해주세요.</p>
        <div class="contact_btn" @click="contact = true">
            연락처를 확인하세요!
        </div>
        <div class="contact_on" v-if="contact == true">
          <div class="contact_close" @click="contact = false"></div>
          E-mail : qudrn0501@naver.com<br>
          Mobile : 010-8709-5900<br>
          <a onclick="window.open('https://github.com/qudrn0501');" style="cursor: pointer;"> github : https://github.com/qudrn0501</a>
        </div>
      </div>
      <!-- <div class="contact_img"></div> -->
      <div class="contact_3dpositon" ref="sceneContainer"></div>
    </article>
  </section>
</template>

<script>
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
let mixer1;
let mixer2;
let mixer3;
let mixer4;
let mixer5;
let mixer6;
let mixer7;
let mixer8;
let mixer9;
let mixer10;
const clock = new THREE.Clock();

export default {
  name: 'contact-page',
  mounted() {
    this.initThree();
    this.loadGLBModel1();
    this.loadGLBModel2();
    this.loadGLBModel3();
    this.loadGLBModel4();
    this.loadGLBModel5();
    this.loadGLBModel6();
    this.loadGLBModel7();
    this.loadGLBModel8();
    this.loadGLBModel9();
    this.loadGLBModel10();
    this.animate = this.animate.bind(this);
  },
  methods: {
    initThree() {
      // Scene
      this.scene = new THREE.Scene();

      // Camera
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 5;

      // Renderer
      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize(window.innerWidth/1.6, window.innerHeight/1.6);
      this.renderer.setClearColor(0x000000, 0);
      this.$refs.sceneContainer.appendChild(this.renderer.domElement);

      // Light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      this.scene.add(directionalLight);

      // Resizing
      window.addEventListener("resize", () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth/1.6, window.innerHeight/1.6);

      });
    },

    loadGLBModel1() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(0, 0, 0);
        this.model.position.set(0, 0, 0);

        mixer1 = new THREE.AnimationMixer(gltf.scene);
        let ani1 = gltf.animations;
        for (let a = 0; a < ani1.length; a++){
          mixer1.clipAction(ani1[a]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel2() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(0, 0, 1);
        this.model.position.set(4, -2, 1);

        mixer2 = new THREE.AnimationMixer(gltf.scene);
        let ani2 = gltf.animations;
        for (let b = 0; b < ani2.length; b++){
          mixer2.clipAction(ani2[b]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel3() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(0, 1, 0);
        this.model.position.set(-4, -2, 0);

        mixer3 = new THREE.AnimationMixer(gltf.scene);
        let ani3 = gltf.animations;
        for (let c = 0; c < ani3.length; c++){
          mixer3.clipAction(ani3[c]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel4() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(1, 0, 0);
        this.model.position.set(3, 3, 0);

        mixer4 = new THREE.AnimationMixer(gltf.scene);
        let ani4 = gltf.animations;
        for (let d = 0; d < ani4.length; d++){
          mixer4.clipAction(ani4[d]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel5() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(1, 1, 0);
        this.model.position.set(-2, 3, -2);

        mixer5 = new THREE.AnimationMixer(gltf.scene);
        let ani5 = gltf.animations;
        for (let e = 0; e < ani5.length; e++){
          mixer5.clipAction(ani5[e]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel6() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(0, 1, 1);
        this.model.position.set(1, -2, 1);

        mixer6 = new THREE.AnimationMixer(gltf.scene);
        let ani6 = gltf.animations;
        for (let f = 0; f < ani6.length; f++){
          mixer6.clipAction(ani6[f]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel7() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(1, 1, 1);
        this.model.position.set(-1, -1, 3);

        mixer7 = new THREE.AnimationMixer(gltf.scene);
        let ani7 = gltf.animations;
        for (let g = 0; g < ani7.length; g++){
          mixer7.clipAction(ani7[g]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel8() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(2, 1, 1);
        this.model.position.set(2, 1, 1);

        mixer8 = new THREE.AnimationMixer(gltf.scene);
        let ani8 = gltf.animations;
        for (let h = 0; h < ani8.length; h++){
          mixer8.clipAction(ani8[h]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel9() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(1, 2, 1);
        this.model.position.set(1, 2, 1);

        mixer9 = new THREE.AnimationMixer(gltf.scene);
        let ani9 = gltf.animations;
        for (let i = 0; i < ani9.length; i++){
          mixer9.clipAction(ani9[i]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    loadGLBModel10() {
      const loader = new GLTFLoader();
      loader.load('/model/butterfly.glb', (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1, 1, 1);
        this.model.rotation.set(1, 1, 2);
        this.model.position.set(2, -2, 2);

        mixer10 = new THREE.AnimationMixer(gltf.scene);
        let ani10 = gltf.animations;
        for (let j = 0; j < ani10.length; j++){
          mixer10.clipAction(ani10[j]).play();
        }
        this.animate();
        this.scene.add(this.model);
      });
    },
    animate() {
      const delta = clock.getDelta();
       // Check if each mixer exists and update them if they do
      if (mixer1) {
        mixer1.update(delta);
      }
      if (mixer2) {
        mixer2.update(delta);
      }
      if (mixer3) {
        mixer3.update(delta);
      }
      if (mixer4) {
        mixer4.update(delta);
      }
      if (mixer5) {
        mixer5.update(delta);
      }
      if (mixer6) {
        mixer6.update(delta);
      }
      if (mixer7) {
        mixer7.update(delta);
      }
      if (mixer8) {
        mixer8.update(delta);
      }
      if (mixer9) {
        mixer9.update(delta);
      }
      if (mixer10) {
        mixer10.update(delta);
      }
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
  },
  components: {

  },
  data() {
    return {
      contact: false,
    }
  }
}
</script>

