<template>
    <NavbarGwh />
    <div class="container relative md:mt-24 mt-16">
               <div class="grid grid-cols-1 pb-6 text-center">
                   <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Rumah/Apartement yang terpilih</h3>

                   <p class="text-slate-400 max-w-xl mx-auto">Berikut apartemen dan rumah yang bisa kamu pilih sesuai dengan kriteria waktu dan jenis kebutuhanmu.</p>
               </div><!--end grid-->

   <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
       <div v-for="item in blogs" :key="item" class="group relative overflow-hidden">
           <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
               <img :src="item.image" class="group-hover:scale-110 group-hover:rotate-3 duration-500"
                   alt="">
               <div class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                   <span v-if="item.travel === 'Bisnis'"  class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Bisnis</span>
                   <span v-if="item.travel === 'Wisata'"
                       class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Wisata</span>
                   <span v-if="item.travel === 'Hangout'" class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Hangout</span>
               </div>
           </div>

           <div class="mt-6">
               <div class="flex mb-4">
                   <span class="flex items-center text-slate-400 text-sm"><i data-feather="clock"
                           class="size-4 text-slate-900 dark:text-white me-1.5"></i>5 min read</span>
                   <span class="text-slate-400 text-sm ms-3">by <a href=""
                           class="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">Kahuripan</a></span>
               </div>

               <router-link to="/blog-detail" class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{{ item.title }}</router-link>
               <p class="text-slate-400 mt-2">{{ item.desc }}
               </p>

               <div class="mt-3">
                   <router-link to="/blog-detail" class="hover:text-red-500 inline-flex items-center">Read More <i
                           data-feather="chevron-right" class="size-4 ms-1"></i></router-link>
               </div>
           </div>
       </div><!--end content-->
   </div><!--end grid-->
   </div>

   <!-- End -->
   <FooTerGwh />
   <switcher :switcherBack=true />
</template>

<script>
import NavbarGwh from './NavbarGwh.vue';
import FooTerGwh from '@/components/FooterGwh.vue';
import switcher from '@/components/switcher.vue'

export default {
   name: 'blogCompo',
   components: {NavbarGwh,FooTerGwh,switcher},
   data() {
       return {
           blogs: [
               {
                   image: require('../assets/images/blog/blog_1.jpg'),
                   title: '1 Kamar luas ukuran 4x3, Wifi, Lemari, Bathtub, Brankas Digital, Meja Tulis Kerja',
                   desc: 'Sangat sesuai untuk melakukan kerja di rumah tanpa terkendala akses internet.',
                   travel: 'Bisnis'
               },
               {
                   image: require('../assets/images/blog/blog_2.jpg'),
                   title: 'Kamar ukuran studio tapi dilengkapi dengan TV dan akses internet cepat dengan twin beds',
                   desc: 'Jika ingin fasilitas penginapan yang murah tetapi cukup untuk istirahat dan melepas lelah',
                   travel: 'Bisnis'
               },
               {
                   image: require('../assets/images/blog/blog_3.jpg'),
                   title: 'Fasilitas kamar yang luas, spring bed nyaman sekali bak hotel bintang lima, dan pemandangan yang indah',
                   desc: 'Kamar mandi sower, TV, bed cover, AC dingin, pemandangan luar menarik sangat sesuai untuk relaksasi',
                   travel: 'Wisata'
               },

           ]

       }
   },
}
</script>

<style lang="scss" scoped></style>