<template>
    <navbar :menuLight="'nav-light'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Blogs / News</h3>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">Travosy</router-link></li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                        class="mdi mdi-chevron-right"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">Blogs</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->

    <!-- Start -->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                <div v-for="item in blogs" :key="item" class="group relative overflow-hidden">
                    <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                        <img :src="item.image" class="group-hover:scale-110 group-hover:rotate-3 duration-500" alt="">
                        <div class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                            <span
                                class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{ item.status }}</span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <div class="flex mb-4">
                            <span class="flex items-center text-slate-400 text-sm"><i data-feather="clock"
                                    class="size-4 text-slate-900 dark:text-white me-1.5"></i>5 min read</span>
                            <span class="text-slate-400 text-sm ms-3">by <a href=""
                                    class="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">Travosy</a></span>
                        </div>

                        <router-link to="/blog-detail"
                            class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{{ item.title
                            }}</router-link>
                        <p class="text-slate-400 mt-2">{{ item.desc }}</p>

                        <div class="mt-3">
                            <router-link to="/blog-detail" class="hover:text-red-500 inline-flex items-center">Read More
                                <i data-feather="chevron-right" class="size-4 ms-1"></i></router-link>
                        </div>
                    </div>
                </div><!--end content-->
            </div><!--end grid-->
            <pagination />
        </div>
    </section>
    <fooTer />
      <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/navbar.vue';
import pagination from '@/components/listing/tour-grid/pagination.vue';
import fooTer from '@/components/footer.vue';
import switcher from '@/components/switcher.vue'
export default {
    name: 'blogS',
    data() {
        return {
            blogs: [
                {
                    image: require('../../../assets/images/blog/1.jpg'),
                    title: 'This Spanish city is a feast for the eyes: Travosy',
                    status: 'Travel',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/2.jpg'),
                    title: 'New Zealand’s South Island brims with majestic',
                    status: 'Tour',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/3.jpg'),
                    title: 'When you visit the Eternal Rome City: Travosy',
                    status: 'Tourist',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/4.jpg'),
                    title: 'My Story When I Backpacked Around The World',
                    status: 'Flight',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/5.jpg'),
                    title: 'Organization of accounting at the enterprise',
                    status: 'Arab',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/6.jpg'),
                    title: 'Three of the Best Day Trips to Make from Francisco',
                    status: 'Dubai',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/7.jpg'),
                    title: 'Why Do People Travel ? Reasons People Travel in 2023',
                    status: 'Maldivas',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/8.jpg'),
                    title: 'Jungles In Australia: Vermont’s Rugged, Retro Ski Mountain',
                    status: 'News',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
                {
                    image: require('../../../assets/images/blog/9.jpg'),
                    title: 'Traveller Visiting Ice Cave With Amazing Eye-catching Scenes',
                    status: 'Packages',
                    desc: 'This is required when, for example, the final text is not yet available.'
                },
            ]

        }
    },
    components: {
        navbar,
        pagination,
        fooTer,
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
}
</script>

<style lang="scss" scoped></style>
