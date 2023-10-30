<template>
  <section class="intro scroll" id="intro">
    <article class="intro_container">
      <div class="intro_text">
        <h1>Possibliity<br>Shines<br>Here!</h1>
        <ul class="intro_count">
          <div>PROJECT <span>2</span></div>
          <div>CLONE <span>3</span></div>
        </ul>
      </div>
      <div class="intro_3dpositon" ref="sceneContainer"></div>
      <!-- <div class="intro_img"></div> -->
    </article>
  </section>

  <section class="intro2 scroll" id="profile">
    <article class="intro2_container">
      <div class="intro2_left">
        <div class="title">
          <div>
            <span>C</span>
            <h1>urriculum</h1>
          </div>
          <h2>Vitae</h2>
        </div>
      </div>
      <div class="intro2_right">
        <div class="subject">
          재사용성, 유지 보수를 생각한<br>
          <span>설계 중심</span>의 코드를 지향합니다
        </div>
        <div style="display: flex">
          <ul>
            <li>
              <div class="subtitle_first">
                <h3 class="subtitle">Profile</h3>
                <div class="subtitle_box">
                  <h4 class="item">Name</h4>
                </div>
                <p>김병구 / Byung Koo Kim</p>
                <div class="subtitle_box">
                  <h4 class="item">Birth</h4>
                </div>
                <p>1994년 5월 1일</p>
              </div>
            </li>
            <li>
              <div>
                <h3 class="subtitle">Education</h3>
                <div class="subtitle_box">
                  <h4 class="item">국립 한밭대학교</h4>
                  <span>13.03 ~ 19.02</span>
                </div>
                <p>공과대학 기계공학과</p>
                <p>&nbsp;-&nbsp;3.5 / 4.5</p>
                <div class="subtitle_box" style="margin-top: ;">
                  <h4 class="item">서울 서라벌고등학교</h4>
                  <span>10.03 ~ 13.02</span>
                </div>
              </div>
            </li>
          </ul>
          <ul class="experience">
            <li>
              <div class="subtitle_first">
                <h3 class="subtitle">Experience</h3>
                <div class="experience_box">
                  <div class="experience_list">
                    <div class="subtitle_box">
                      <h4 class="item">INFOIN</h4>
                      <span>22.09 ~ 23.07</span>
                    </div>
                    <p>개발본부 3D엔진팀</p><br>
                    <div class="workpjt_box">
                      <ul class="workpjt_ul">
                        <li>
                          <p>한국항공우주(KAI)</p>
                          <p>&nbsp;-&nbsp;3D 스마트팩토리 프론트엔드</p>
                          <p>&nbsp;-&nbsp;React / Three.js</p>
                          <p>&nbsp;-&nbsp;Tailwind CSS / Javascript</p>
                        </li>
                        <li>
                          <p>코오롱 베니트</p>
                          <p>&nbsp;-&nbsp;BPO플랫폼 웹전환 퍼블리싱</p>
                          <p>&nbsp;-&nbsp;JSP / CSS / Javascript</p>
                        </li>
                        <li>
                          <p>UPTTEN 셀프 스튜디오</p>
                          <p>&nbsp;-&nbsp;캐논 카메라 API 활용 무인 키오스크 프론트엔드</p>
                          <p>&nbsp;-&nbsp;HTML / CSS / Javascript / Node.js</p>
                        </li>
                        <li>
                          <p>COEA 스마트 봉제 플랫폼</p>
                          <p>&nbsp;-&nbsp;스마트 봉제 OP(태블릿) 및 WEB 퍼블리싱</p>
                          <p>&nbsp;-&nbsp;HTML / CSS / Javascript / jQuery</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>

  <section class="intro2 scroll">
    <article class="intro2_container">
      <div class="intro2_left">
        <div class="title">
          <div>
            <span>O</span>
            <h1>ther</h1>
          </div>
          <h2>Careers</h2>
        </div>
      </div>
      <div class="intro2_right">
        <div class="subject">
          다양한 현장에서의 경험과 지식으로<br> 
          <span>새로운 시너지</span>를 만듭니다
        </div>
        <div style="display: flex;">
          <ul>
            <li>
              <div class="subtitle_first">
                <div class="subtitle_box">
                  <h3 class="subtitle">Sports2i</h3>
                  <span>21.07 ~ 21.12</span>
                </div>
                <p>마케팅부 인프라사업팀</p>
                <br>
                <div class="workpjt_box">
                  <ul class="workpjt_ul">
                    <li>
                      <p>2021 신한 SOL KBO리그</p>
                      <p>&nbsp;-&nbsp;PTS(투구), HTS(타구) 트래킹 시스템 운영</p>
                      <p>&nbsp;-&nbsp;KBO 생중계 PTS 그래픽(가상 S-Zone) 운영</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="subtitle_box">
                    <h3 class="subtitle">Dareun Korea</h3>
                    <span>19.01 ~ 19.02</span>
                </div>
                <p>메이커스페이스 기구설계팀(인턴)</p>
                <br>
                <div class="workpjt_box">
                  <ul class="workpjt_ul">
                    <li>
                      <p>3D 프린터 장비 운영 및 모델링</p>
                      <p>&nbsp;-&nbsp;3D 모델링 기초 설계</p>
                      <p>&nbsp;-&nbsp;3D 프린터 유지 보수 및 적층 환경 관리</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="subtitle_first">
                <div class="subtitle_box">
                  <h3 class="subtitle">Eastpower</h3>
                  <span>20.03 ~ 21.03</span>
                </div>
                <p>기술연구소 설계개발팀</p>
                <br>
                <div class="workpjt_box">
                  <ul class="workpjt_ul">
                    <li>
                      <p>한국남부발전 남제주 복합화력발전소</p>
                      <p>&nbsp;-&nbsp;기술문서 관리, CAD 기구설계</p>
                    </li>
                    <li>
                      <p>한국전력공사 긴급 발전차량</p>
                      <p>&nbsp;-&nbsp;기술문서 관리, CAD 기구설계, BOM 문서 관리</p>
                    </li>
                    <li>
                      <p>삼성물산, 롯데건설, LH, 중흥건설, 현대엔지니어링 등</p>
                      <p>&nbsp;-&nbsp;건축물 발전기실 BUSDUCT 설계</p>
                      <p>&nbsp;-&nbsp;BUSDUCT 라인, 상배열 설계</p>
                      <p>&nbsp;-&nbsp;발전기 동체, BED, 연료탱크 설계</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </article>
  </section>

</template>

<script>
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
let mixer;
const clock = new THREE.Clock();

export default {
  name: 'intro-page',
  mounted() {
    this.initThree();
    this.loadGLBModel();
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
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.renderer.setClearColor(0x000000, 0);
      this.$refs.sceneContainer.appendChild(this.renderer.domElement);

      // Light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
      directionalLight.position.set(1, 1, 3);
      this.scene.add(directionalLight);

      // Resizing
      window.addEventListener("resize", () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      });
    },

    loadGLBModel() {

      const loader = new GLTFLoader();
      loader.load('/model/whale.glb', (gltf) => {
        this.model = gltf.scene;
        if(window.innerWidth <= 480) {
          this.model.scale.set(0.6, 0.6, 0.6);
          this.model.rotation.set(1, -1.1, 0.8);
          this.model.position.set(0.5, -1.15, -1.2);
        } else if(window.innerWidth <= 767) {
          this.model.scale.set(0.7, 0.7, 0.7);
          this.model.rotation.set(1, -1.1, 0.8);
          this.model.position.set(1, -0.15, -1.5);
        } else if(window.innerWidth <= 989) {
          this.model.scale.set(1, 1, 1);
          this.model.rotation.set(1, -1.1, 0.8);
          this.model.position.set(1, -0.15, -1.5);
        } else if(window.innerWidth <= 1366) {
          this.model.scale.set(1, 1, 1);
          this.model.rotation.set(1, -1.1, 0.8);
          this.model.position.set(1, -0.15, -1.5);
        } else if(window.innerWidth <= 1600) {
          this.model.scale.set(1, 1, 1);
          this.model.rotation.set(1, -1.1, 0.8);
          this.model.position.set(1, -0.15, -1.5);
        } else {
          this.model.scale.set(1, 1, 1);
          this.model.rotation.set(1, -1.1, 0.8);
          this.model.position.set(1, -0.15, -1.5);
        }

        mixer = new THREE.AnimationMixer(gltf.scene);
        let ani = gltf.animations;
        for (let i = 0; i < ani.length; i++){
          mixer.clipAction(ani[i]).play();
        }
        this.animate();

        this.scene.add(this.model);

      });
    },
    animate() {
      const delta = clock.getDelta();
      mixer.update(delta);
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
  },
  components: {

  },
}

</script>

