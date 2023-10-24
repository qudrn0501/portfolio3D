<template>
  
  <header>
    <div class="logo">bkKim.</div>
    <div class="btn_nav" @click="menu = true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  
    <nav class="mapsite" v-if="menu == true" @click="menu = false"> <!--mapsite menu-->
      <div class="mapsite_content">
        <div class="btn_close" @click="menu = false"></div>
        <ul>
          <li v-on:click="gotointro">Home</li>
          <li v-on:click="gotoprofile">Introduce</li>
          <li v-on:click="gotostack">Tech Stack</li>
          <li v-on:click="gotoproject">Projects</li>
          <li v-on:click="gotowebclone">Web Clone</li>
          <li v-on:click="gotocontact">Contact</li>
        </ul>
      </div>
    </nav>
  </header>
  <intro></intro>
  <stack></stack>
  <project></project>
  <webclone id="webclone"></webclone>
  <contact id="contact"></contact>
  <div id="container" class="topbtn" v-on:click="gotointro">TOP</div>
</template>

<script>
import intro from './components/intro.vue';
import stack from './components/stack.vue';
import project from './components/project.vue';
import webclone from './components/webclone.vue';
import contact from './components/contact.vue';
import test from '../public/js/test';
// import { value, method } from '../public/js/test'


// import * as THREE from 'three';


export default {
  name: 'App',
  data() {
    return {
      menu : false,
    }
  },
  setup() {
    console.log(test.value)
    test.method('hello!')
  },
  /* setup() {
    console.log(test.value)
    test.method('hello!')
  } */
  
  methods: {
    gotointro() {
      const contact = document.getElementById('intro')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoprofile() {
      const contact = document.getElementById('profile')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotostack() {
      const contact = document.getElementById('stack')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproject() {
      const contact = document.getElementById('project')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotowebclone() {
      const contact = document.getElementById('webclone')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotocontact() {
      const contact = document.getElementById('contact')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
  },
  components: {
    intro,
    stack,
    project,
    webclone,
    contact,
  },

}

</script>
