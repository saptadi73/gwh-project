<template>
    <div>
 <!-- Start -->
 <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help You Need</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                    <div v-for="item in helps" :key="item" class="text-center px-6 mt-6">
                        <div class="w-20 h-20 bg-red-500/5 text-red-500 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i :data-feather="item.icon" class="size-[30px]"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/helpcenter-faqs" class="title h5 text-lg font-medium hover:text-red-500">{{item.name}}</router-link>
                            <p class="text-slate-400 mt-3">{{item.desc}}</p>
                            <div class="mt-5">
                                <router-link  v-if="item.to === '/helpcenter-faqs'" to="/helpcenter-faqs" class="text-red-500">{{ item.button }} <i class="mdi mdi-chevron-right"></i></router-link>
                                <router-link v-if="item.to === '/helpcenter-guides'" to="/helpcenter-guides" class="text-red-500">{{ item.button }}<i class="mdi mdi-chevron-right"></i></router-link>
                                <router-link v-if="item.to === '/helpcenter-support'" to="/helpcenter-support" class="text-red-500">{{ item.button }} <i class="mdi mdi-chevron-right"></i></router-link>

                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get Started</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-6">
                    <div v-for="item in starts" :key="item" class="flex">
                        <i :data-feather="item.icon" class="fea icon-ex-md text-red-500 me-3"></i>
                        <div class="flex-1">
                            <h5 v-if="item.name === 'How our'" class="mb-2 text-xl font-semibold">{{item.name}} <span class="text-red-500">Travosy</span> {{item.name3}}</h5>
                            <h5 v-if="item.name === ' What is the main process open account ?'" class="mb-2 text-xl font-semibold"> {{ item.name }}</h5>
                            <h5 v-if="item.name === ' How to make unlimited data entry ?'" class="mb-2 text-xl font-semibold"> {{ item.name }}</h5>
                            <h5 v-if="item.name === ' Is'" class="mb-2 text-xl font-semibold"> {{item.name}} <span class="text-red-500">Travosy</span> {{item.name3}}</h5>
                            <p class="text-slate-400">{{item.desc}}</p>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question ? Get in touch!</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                
                    <div class="mt-6">
                        <router-link to="/helpcenter-support" class="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md me-2 mt-2"><i data-feather="phone" class="size-4 me-1"></i> Contact us</router-link>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section-->
    </div>
</template>

<script>
    export default {
        name: "helpCenter",
        data() {
            return {
                helps:[
                    {
                        icon: 'help-circle',
                        name: 'FAQs',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        button: 'Read More',
                        to: '/helpcenter-faqs'
                    },
                    {
                        icon: 'bookmark',
                        name: 'Guides / Support',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        button: 'Read More',
                        to: '/helpcenter-guides'
                    },
                    {
                        icon: 'settings',
                        name: 'Support Request',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        button: 'Read More',
                        to: '/helpcenter-support'
                    },

                ],
                starts:[
                    {
                        icon: 'help-circle',
                        name: 'How our',
                        name2: 'Travosy',
                        name3: 'work ?',
                        desc: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.'
                    },
                    {
                        icon: 'help-circle',
                        name: ' What is the main process open account ?',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact."
                    },
                    {
                        icon: 'help-circle',
                        name: ' How to make unlimited data entry ?',
                        desc: 'Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.'
                    },
                    {
                        icon: 'help-circle',
                        name: ' Is',
                        name2: 'Travosy',
                        name3: 'safer to use with my account ?',
                        desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin."
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>