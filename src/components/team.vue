<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-6 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Team</h3>

            <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome
                template, you can replace it with any text.</p>
        </div><!--end grid-->

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in teams" :key="item" class="lg:col-span-3 md:col-span-6">
                <div class="group text-center">
                    <div class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                        <img :src="item.image" class="" alt="">
                        <div
                            class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500">
                        </div>

                        <ul class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><i
                                        data-feather="facebook" class="size-4"></i></a></li>
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><i
                                        data-feather="instagram" class="size-4"></i></a></li>
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><i
                                        data-feather="linkedin" class="size-4"></i></a></li>
                        </ul><!--end icon-->
                    </div>

                    <div class="content mt-3">
                        <a href="" class="text-lg font-semibold hover:text-red-500 duration-500">{{item.name}}</a>
                        <p class="text-slate-400">{{item.position}}</p>
                    </div>
                </div>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
export default {
    name: 'teamCompo',
    data() {
        return {
            teams: [
                {
                    image: require('../assets/images/client/04.jpg'),
                    name: 'Jack John',
                    position: 'Agent',
                },
                {
                    image: require('../assets/images/client/05.jpg'),
                    name: 'Krista John',
                    position: 'Agent',
                },
                {
                    image: require('../assets/images/client/06.jpg'),
                    name: 'Roger Jackson',
                    position: 'Agent',
                },
                {
                    image: require('../assets/images/client/07.jpg'),
                    name: 'Johnny English',
                    position: 'Agent',
                },
            ]


        }
    },
}
</script>

<style lang="scss" scoped></style>