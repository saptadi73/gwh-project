<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-6 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Users Say</h3>

            <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome
                template, you can replace it with any text.</p>
        </div><!--end grid-->

        <div class="grid grid-cols-1 mt-6">
            <div class="tiny-three-item">
                <div v-for="item in users" :key="item" class="tiny-slide text-center">
                    <div  class="cursor-e-resize">
                        <div
                            class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                            <i class="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                            <p class="text-slate-400">{{ item.desc }}</p>
                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>

                        <div class="text-center mt-5">
                            <img :src="item.image"
                                class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="">
                            <h6 class="mt-2 font-semibold">{{item.name}}</h6>
                            <span class="text-slate-400 text-sm">{{item.position}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
    name: 'userCompo',
    data() {
        return {
            users: [
                {
                    desc: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
                    image:require('../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    position: 'Manager'
                },
                {
                    desc: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
                    image:require('../assets/images/client/02.jpg'),
                    name: 'Christa Smith',
                    position: 'Manager'
                },
                {
                    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
                    image:require('../assets/images/client/03.jpg'),
                    name: 'Jemina CLone',
                    position: 'Manager'
                },
                {
                    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
                    image:require('../assets/images/client/04.jpg'),
                    name: 'Smith Vodka',
                    position: 'Manager'
                },
                {
                    desc: '" There is now an abundance of readable dummy texts. These are usually used when a text is required. "',
                    image:require('../assets/images/client/05.jpg'),
                    name: 'Cristino Murfi',
                    position: 'Manager'
                },
                {
                    desc: '" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "',
                    image:require('../assets/images/client/06.jpg'),
                    name: 'Cristino Murfi',
                    position: 'Manager'
                },
            ]

        }
    },
    setup() {
        onMounted(() => {
            tns({
                container: '.tiny-three-item',
                controls: false,
                mouseDrag: true,
                loop: true,
                rewind: true,
                autoplay: true,
                autoplayButtonOutput: false,
                autoplayTimeout: 3000,
                navPosition: "bottom",
                speed: 400,
                gutter: 12,
                responsive: {
                    992: {
                        items: 3
                    },

                    768: {
                        items: 2
                    },

                    320: {
                        items: 1
                    },
                },
            });
        });
    },
}
</script>

<style lang="scss" scoped></style>