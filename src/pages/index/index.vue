<template>
    <tagline />
    <navbar :menuLight="'nav-light'" :tagLine="'tagline-height'" :navLight=true :searchMenu="'text-white'" />
    <!-- Hero Start -->
    <section
        class="relative md:pt-72 md:pb-60 py-36 table w-full items-center bg-[url('../../assets/images/bg/1.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                    <h5 class="text-3xl font-dancing text-white">Beauty of Discover</h5>
                    <h4 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                        Let's Leave The Road, <br> And Take The Travosy</h4>
                    <p class="text-white/70 text-xl max-w-xl">Planning for a trip? We will organize your trip with the
                        best places and within best budget!</p>
                </div>

                <div class="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                    <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                        class="cursor-pointer lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-red-500 text-red-500 hover:text-white duration-500 ease-in-out mx-auto">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                    </a>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <div class="container relative -mt-16 z-1">
        <div class="grid grid-cols-1">
            <selecteddate />
        </div><!--end grid-->
    </div><!--end container-->
    <!-- End Hero -->
   
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
        <destinations :Destinations=true />
        <tourspackages />
        <agency />
        <users />
        <blogs />
    </section>
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import tagline from '@/components/tagline.vue';
import navbar from '@/components/navbar.vue';
import destinations from '@/components/destinations/destinations-slider.vue';
import tourspackages from '@/components/tour-packages/tour-packages-slider.vue';
import agency from '@/components/agency.vue';
import users from '@/components/users.vue';
import blogs from '@/components/blogs.vue';
import fooTer from '@/components/footer.vue';
import selecteddate from '@/components/selected-date.vue'
import switcher from '@/components/switcher.vue';


export default {
    name: 'indexOne',
    data() {
        return {
            isActive: false,
        }
    },
    components: {
        tagline,
        navbar,
        destinations,
        tourspackages,
        agency,
        users,
        blogs,
        fooTer,
        selecteddate,
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
        }
    },
}
</script>

<style lang="scss" scoped></style>