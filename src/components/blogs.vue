<template>
     <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Travel Blogs</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div><!--end grid-->

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div v-for="item in blogs" :key="item" class="group relative overflow-hidden">
            <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <img :src="item.image" class="group-hover:scale-110 group-hover:rotate-3 duration-500"
                    alt="">
                <div class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                    <span v-if="item.travel === 'Travel'"  class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Travel</span>
                    <span v-if="item.travel === 'Tourist'"
                        class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Tourist</span>
                    <span v-if="item.travel === 'Tour'" class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Tour</span>
                </div>
            </div>

            <div class="mt-6">
                <div class="flex mb-4">
                    <span class="flex items-center text-slate-400 text-sm"><i data-feather="clock"
                            class="size-4 text-slate-900 dark:text-white me-1.5"></i>5 min read</span>
                    <span class="text-slate-400 text-sm ms-3">by <a href=""
                            class="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">Travosy</a></span>
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
</template>

<script>
export default {
    name: 'blogCompo',
    data() {
        return {
            blogs: [
                {
                    image: require('../assets/images/blog/1.jpg'),
                    title: 'This Spanish city is a feast for the eyes: Travosy',
                    desc: 'This is required when, for example, the final text is not yet available.',
                    travel: 'Travel'
                },
                {
                    image: require('../assets/images/blog/2.jpg'),
                    title: 'New Zealand’s South Island brims with majestic',
                    desc: 'This is required when, for example, the final text is not yet available.',
                    travel: 'Tourist'
                },
                {
                    image: require('../assets/images/blog/3.jpg'),
                    title: 'When you visit the Eternal Rome City: Travosy',
                    desc: 'This is required when, for example, the final text is not yet available.',
                    travel: 'Tour'
                },

            ]

        }
    },
}
</script>

<style lang="scss" scoped></style>