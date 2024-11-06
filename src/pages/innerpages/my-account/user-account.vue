<template>
    <navbar />
    <!-- Start Hero -->
    <section class="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div class="md:container container-fluid relative">
            <div
                class="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-800 h-52 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover">
            </div>
        </div><!--end container-->

        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex">
                <div class="lg:w-1/4 md:w-1/3 md:px-3">
                    <account />
                </div>

                <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                    <div>
                        <h5 class="text-lg font-semibold mb-6">Introduction</h5>

                        <p class="text-slate-400 mt-4">Nam libero tempore, cum soluta nobis est eligendi optio cumque
                            nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
                            est, omnis dolor repellendus how to pursue pleasure rationally encounter but because those
                            who do not know how to pursue consequences that are extremely</p>
                        <p class="text-slate-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                            earum dicta saepe fugit, qui commodi possimus vero pariatur asperiores. Sed impedit
                            reprehenderit deserunt culpa incidunt iste laborum placeat molestiae illo?</p>
                    </div>

                    <div class="mt-6">
                        <h5 class="text-lg font-semibold mb-6">My Tours</h5>

                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div v-for="item in datas" :key="item" class="group rounded-md shadow dark:shadow-gray-700">
                                <div
                                    class="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                    <img :src="item.image" class="scale-125 group-hover:scale-100 duration-500" alt="">
                                    <div class="absolute top-0 start-0 p-4">
                                        <span v-if="item.discount === '10% Off'"
                                            class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{
                                item.discount }}</span>
                                        <span v-if="item.discount === '25% Off'"
                                            class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{{
                                item.discount }}</span>
                                    </div>

                                    <div class="absolute top-0 end-0 p-4">
                                        <a href="javascript:void(0)"
                                            class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i
                                                class="mdi mdi-heart text-[20px] align-middle"></i></a>
                                    </div>
                                </div>

                                <div class="p-4">
                                    <p class="flex items-center text-slate-400 font-medium mb-2"><i
                                            data-feather="map-pin" class="text-red-500 size-4 me-1"></i> {{ item.country
                                        }}</p>
                                    <router-link to="/tour-detail-one"
                                        class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{{
                                item.city }}</router-link>

                                    <div class="flex items-center mt-2">
                                        <span class="text-slate-400">Rating:</span>
                                        <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                            <li class="inline text-black dark:text-white text-sm">5.0(30)</li>
                                        </ul>
                                    </div>

                                    <div
                                        class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

                                        <a href="" class="text-slate-400 hover:text-red-500">Explore Now <i
                                                class="mdi mdi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div><!--end content-->
                        </div><!--end grid-->
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/navbar.vue';
import account from '@/components/account-tab.vue'
import fooTer from '@/components/footer.vue';
import switcher from '@/components/switcher.vue'
export default {
    name: 'userAccount',
    data() {
        return {
            datas: [
                {
                    image: require('../../../assets/images/listing/1.jpg'),
                    country: 'Dubai',
                    city: 'Cuba Sailing Adventure',
                    discount: '10% Off',
                },
                {
                    image: require('../../../assets/images/listing/2.jpg'),
                    country: 'Italy',
                    city: 'Tour in New York',
                    discount: '',

                },
                {
                    image: require('../../../assets/images/listing/3.jpg'),
                    country: 'Maldivas',
                    city: 'Discover Greece',
                    discount: '',

                },
                {
                    image: require('../../../assets/images/listing/4.jpg'),
                    country: 'USA',
                    city: 'Museum of Modern Art',
                    discount: '',

                },
                {
                    image: require('../../../assets/images/listing/5.jpg'),
                    country: 'Bali',
                    city: 'Peek Mountain View',
                    discount: '',

                },
                {
                    image: require('../../../assets/images/listing/6.jpg'),
                    country: 'Bangkok',
                    city: 'Hot Baloon Journey',
                    discount: '25% Off',
                },
            ]

        }
    },
    components: {
        navbar,
        account,
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