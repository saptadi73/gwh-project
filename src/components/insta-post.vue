<template>
  <div class="container-fluid relative">
    <div class="grid grid-cols-1 relative">
      <div class="tiny-twelve-item">
        <div v-for="(item, index) in images" :key="index" class="tiny-slide p-0">
          <a @click="showLightbox(index)" class="lightbox cursor-pointer d-inline-block" title="">
            <img :src="item" class="sm:size-40 object-cover" alt="">
          </a>
        </div>
      </div>

      <div class="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center">
        <a href="https://www.instagram.com/shreethemes/" target="_blank"
          class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><i
            data-feather="instagram" class="size-4"></i></a>
      </div>
    </div><!--end grid-->
  </div><!--end container-->
  <!-- Insta Post End -->
  <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import feather from 'feather-icons';
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import image from '../assets/images/listing/1.jpg';
import image2 from '../assets/images/listing/2.jpg';
import image3 from '../assets/images/listing/3.jpg';
import image4 from '../assets/images/listing/4.jpg';
import image5 from '../assets/images/listing/5.jpg';
import image6 from '../assets/images/listing/6.jpg';
import image7 from '../assets/images/listing/7.jpg';
import image8 from '../assets/images/listing/8.jpg';
import image9 from '../assets/images/listing/9.jpg';
import image10 from '../assets/images/listing/10.jpg';
import image11 from '../assets/images/listing/11.jpg';
import image12 from '../assets/images/listing/12.jpg';
export default {
  name: 'instaPost',
  data() {
    return {
      images: [
      image,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image5,
        image8,
        image4,
      ],
      visibleRef: false,
      imgsRef: [],
      indexRef: 0
    }
  },
  components: {
    VueEasyLightbox
  },
  setup() {
    onMounted(() => {
      tns({
        container: '.tiny-twelve-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
          1025: {
            items: 12
          },

          992: {
            items: 8
          },

          767: {
            items: 6
          },

          575: {
            items: 5
          },

          420: {
            items: 3
          },

          320: {
            items: 2
          },
        },

      });
      feather.replace();
    });
  },
  methods: {
    showLightbox(index) {
      this.imgsRef = this.images
      this.indexRef = index
      this.visibleRef = true
    },
    onHide() {
      this.visibleRef = false
    }
  },

}
</script>

<style lang="scss" scoped></style>