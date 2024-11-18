<template>
    <tagline />
    <navbar :menuLight="'nav-light'" :tagLine="'tagline-height'" :navLight=true :searchMenu="'text-white'" />
    <!-- Hero Start -->
    <section class="relative py-36  bg-cover jarallax"
        :style="{ backgroundImage: `url(${backgroundImagePath})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }"
        data-jarallax data-speed="0.5">
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container relative">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-6">
                <div class="lg:col-span-7">
                    <h5 class="text-3xl font-dancing text-white">Kahuripan Lestari</h5>
                    <h4 class="font-bold text-white lg:leading-normal leading-normal text-3xl lg:text-6xl mb-6 mt-5">
                        Hunian dan<br/> Tempat Usaha<br> Pilihan Anda</h4>
                    <p class="text-white/70 text-xl max-w-xl">Banyak pilihan tempat sewa rumah, indekos, lapak, ruko, kantor, dan ruang apartemen yang sesuai dengan kebutuhan anda!</p>

                    <div class="mt-6">
                        <a href=""
                            class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Tempat yang ditawarkan</a>
                        <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                            class="size-10 cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-red-500 bg-red-500 text-white ms-1 lightbox"><i
                                data-feather="video" class="h-4 w-4"></i></a><span
                            class="font-semibold ms-1 align-middle"></span>
                    </div>
                </div>

                
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <div class="relative">
        <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0">
            <a @click="scrollToBottom" class="cursor-pointer"><i
                    class="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></a>
        </div>

        <div
            class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Hero End -->
     <!-- iframe start  -->
     <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe  src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500" frameborder="0"></iframe>
        </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
     <!-- iframe end  -->
    <section class="relative md:py-24 py-16 overflow-hidden">
        <destinations :Destinations=false />
        <packages />
        <users />
        <askedquestions />
    </section>
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import tagline from '@/components/tagline.vue';
import navbar from '@/components/NavbarGwh.vue';
import destinations from '@/components/destinations/destinations-slider.vue';
import packages from '@/components/tour-packages/tour-packages-8item.vue';
import users from '@/components/UsersGwh.vue'
import askedquestions from '@/components/asked-questions.vue';
import fooTer from '@/components/FooterGwh.vue';

import '@vuepic/vue-datepicker/dist/main.css'
import backgroundImagePath from '../../assets/images/bg/bg_6.jpg'
import switcher from '@/components/switcher.vue'
export default {
    name: 'indexFour',
    data() {
        return {
            isActive: false,
            date: null,
            date2: null,
            backgroundImagePath
        }
    },
    components: {
        tagline,
        navbar,
        destinations,
        packages,
        users,
        askedquestions,
        fooTer,
        
        switcher
    },
    mounted() {
        this.scrollToTop()
    },

    methods: {
        toggle() {
            if (!this.isActive) {
                this.isActive = true;
            } else {
                this.isActive = false;
            }
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        scrollToBottom() {
            window.scrollTo({ top: 700, behavior: "smooth" });
        }
    },
}
</script>

<style lang="scss" scoped></style>