<template>
    <NavbarGwh :menuLight="'nav-light'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/bg_2.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="text-3xl leading-normal tracking-wider font-semibold text-white">Apartemen di Menteng Jakarta Selatan</h3>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/index">Kahuripan</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                        class="mdi mdi-chevron-right"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">Apartement</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->

    <!-- Start -->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div class="lg:col-span-8 md:col-span-7">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="md:col-span-8 col-span-7">
                            <div class="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/listing_1.jpg"
                                    class="w-full lg:h-60 md:h-44 h-48 object-cover" alt="">
                                <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                </div>
                                <div
                                    class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                    <a @click="showMultiple(0)"
                                        class="inline-flex cursor-pointer justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><i
                                            data-feather="camera" class="size-4 align-middle"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="md:col-span-4 col-span-5">
                            <div class="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/listing_2.jpg"
                                    class="w-full lg:h-60 md:h-44 h-48 object-cover" alt="">
                                <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                </div>
                                <div
                                    class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                    <a @click="showMultiple(1)"
                                        class="inline-flex cursor-pointer justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><i
                                            data-feather="camera" class="size-4 align-middle"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="md:col-span-4 col-span-5">
                            <div class="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/listing_3.jpg"
                                    class="w-full lg:h-60 md:h-44 h-48 object-cover" alt="">
                                <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                </div>
                                <div
                                    class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                    <a @click="showMultiple(2)"
                                        class="inline-flex cursor-pointer justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><i
                                            data-feather="camera" class="size-4 align-middle"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="md:col-span-8 col-span-7 mb-4">
                            <div class="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/listing_4.jpg"
                                    class="w-full lg:h-60 md:h-44 h-48 object-cover" alt="">
                                <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                </div>
                                <div
                                    class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                    <a @click="showMultiple(3)"
                                        class="inline-flex cursor-pointer justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><i
                                            data-feather="camera" class="size-4 align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                     <ApartementDetail />
                </div>
               <toursidebar />
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    <FooterGwh />
    <switcher :switcherBack=true />
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import switcher from '@/components/switcher.vue';
import image from '../../../../assets/images/listing/1.jpg';
import image2 from '../../../../assets/images/listing/2.jpg';
import image3 from '../../../../assets/images/listing/3.jpg';
import image4 from '../../../../assets/images/listing/4.jpg';
import ApartementDetail from '@/components/tour-detail/ApartemenDetail.vue';
import toursidebar from '@/components/tour-detail/tour-sidebar.vue'
import NavbarGwh from '@/components/NavbarGwh.vue';
import FooterGwh from '@/components/FooterGwh.vue';
export default {
    name: 'detailOne',
    data() {
        return {
            activeIndex: 1,
            datas: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use TRAVOSY  ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 3,
                    title: 'What do I need to do to start selling ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 4,
                    title: 'What happens when I receive an order ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
            ],
            images: [
                image,
                image2,
                image3,
                image4
            ],
            visibleRef: false,
            imgsRef: [],
            indexRef: 0,
        }
    },

    components: {
        NavbarGwh,
        VueEasyLightbox,
        FooterGwh,
        switcher,
        ApartementDetail,
        toursidebar
    },
    mounted() {
        this.scrollToTop()
    },

    methods: {
        handleclick(id) {
            this.activeIndex = id
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        showMultiple(index) {
            this.indexRef = index,
                this.imgsRef = this.images,
                this.visibleRef = true
        },
        onHide() {
            this.visibleRef = false
        },
    }
}
</script>

<style lang="scss" scoped></style>