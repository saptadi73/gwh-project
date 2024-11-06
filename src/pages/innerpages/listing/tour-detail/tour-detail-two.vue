<template>
    <navbar />
    <section class="relative md:pb-24 pb-16 mt-20">
        <div class="container-fluid relative">
            <div class="md:flex mt-4">
                <div class="lg:w-1/2 md:w-1/2 p-1">
                    <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                        <img src="../../../../assets/images/listing/1.jpg" alt="">
                        <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                        <div
                            class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                            <a @click="showMultiple(0)"
                                class="inline-flex cursor-pointer justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><i
                                    data-feather="camera" class="size-4 align-middle"></i></a>
                        </div>
                    </div>
                </div>

                <div class="lg:w-1/2 md:w-1/2">
                    <div class="flex">
                        <div class="w-1/2 p-1">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/2.jpg" alt="">
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

                        <div class="w-1/2 p-1">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/3.jpg" alt="">
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
                    </div>

                    <div class="flex">
                        <div class="w-1/2 p-1">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/4.jpg" alt="">
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

                        <div class="w-1/2 p-1">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img src="../../../../assets/images/listing/5.jpg" alt="">
                                <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                </div>
                                <div
                                    class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                    <a @click="showMultiple(4)"
                                        class="inline-flex cursor-pointer justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><i
                                            data-feather="camera" class="size-4 align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end flex-->
        </div><!--end container fluid-->

        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div class="lg:col-span-8 md:col-span-7">
                    <tourdetail />
                </div>
                <toursidebar />
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import navbar from '@/components/navbar.vue'
import fooTer from '@/components/footer.vue';
import switcher from '@/components/switcher.vue';
import image from '../../../../assets/images/listing/1.jpg';
import image2 from '../../../../assets/images/listing/2.jpg';
import image3 from '../../../../assets/images/listing/3.jpg';
import image4 from '../../../../assets/images/listing/4.jpg';
import image5 from '../../../../assets/images/listing/5.jpg';
import toursidebar from '@/components/tour-detail/tour-sidebar.vue';
import tourdetail from '@/components/tour-detail/tour-detail.vue';
export default {
    name: 'detailTwo',
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
                image4,
                image5
            ],
            visibleRef: false,
            imgsRef: [],
            indexRef: 0,
        }
    },
    components: {
        navbar,
        VueEasyLightbox,
        fooTer,
        switcher,
        toursidebar,
        tourdetail
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