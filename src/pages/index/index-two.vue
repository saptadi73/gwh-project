<template>
    <tagline />
    <navbar :menuLight="'nav-light'" :tagLine="'tagline-height'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section class="swiper-slider-hero relative block h-screen" id="home">
        <div class="swiper-container absolute end-0 top-0 w-full h-full">
            <swiper class="swiper-wrapper" :modules="modules" :autoplay="true" :pagination="{ type: 'fraction', }">
                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;"
                        :style="{ 'background-image': 'url(' + require('../../assets/images/bg/2.jpg') + ')' }">
                        <div class="absolute inset-0 bg-black/70"></div>
                        <div class="container relative">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <img src="../../assets/images/map-plane.png" class="mx-auto w-[300px]" alt="">
                                    <h1
                                        class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                                        Find Your Best <br> Travels Package</h1>
                                    <p class="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will
                                        organize your trip with the best places and within best budget!</p>

                                    <div class="mt-6">
                                        <a href=""
                                            class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">See
                                            More</a>
                                    </div>
                                </div>
                            </div><!--end grid-->
                        </div><!--end container-->
                    </div><!-- end slide-inner -->
                </swiper-slide> <!-- end swiper-slide -->

                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;"
                        :style="{ 'background-image': 'url(' + require('../../assets/images//bg/3.jpg') + ')' }">
                        <div class="absolute inset-0 bg-black/70"></div>
                        <div class="container relative">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <img src="../../assets/images/map-plane.png" class="mx-auto w-[300px]" alt="">
                                    <h1
                                        class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                                        Find Next Best <br> Place To Visit</h1>
                                    <p class="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will
                                        organize your trip with the best places and within best budget!</p>

                                    <div class="mt-6">
                                        <a href=""
                                            class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">See
                                            More</a>
                                    </div>
                                </div>
                            </div><!--end grid-->
                        </div><!--end container-->
                    </div><!-- end slide-inner -->
                </swiper-slide> <!-- end swiper-slide -->
            </swiper>
            <!-- end swiper-wrapper -->

            <!-- swipper controls -->
            <div class="swiper-pagination"></div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <!-- Start -->
    <section class="relative py-16 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid grid-cols-1">
                <selectdate />
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <agency />
    <Packages />
    <users />
    <blogs />
    <section class="relative md:mt-24 mt-16 overflow-hidden">
        <fooTer />
        <switcher :switcherBack=true />
    </section>
</template>

<script>
import tagline from '@/components/tagline.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import navbar from '@/components/navbar.vue';
import agency from '@/components/agency.vue';
import Packages from '@/components/tour-packages/tour-packages.vue';
import users from '@/components/users.vue';
import blogs from '@/components/blogs.vue'
import fooTer from '@/components/footer.vue';
import selectdate from '@/components/selected-date.vue'
import switcher from '@/components/switcher.vue'

export default {
    name: 'indexTwo',
    data() {
        return {
            data() {
                return {

                }
            },

        }
    },
    components: {
        navbar,
        Swiper,
        SwiperSlide,
        tagline,
        agency,
        Packages,
        users,
        blogs,
        fooTer,
        selectdate,
        switcher

    },
    mounted() {
        this.scrollToTop()
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },

    setup() {
        return {
            modules: [Navigation, Autoplay, Pagination],
        };
    },
}
</script>

<style lang="scss" scoped></style>