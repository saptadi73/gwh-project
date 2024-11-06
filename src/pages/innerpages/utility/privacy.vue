<template>
    <div>
        <navbar />
        <!-- Start Hero -->
        <section class="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="text-3xl leading-normal font-semibold">Privacy Policy</h3>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-red-500">
                        <router-link to="/">TRAVOSY </router-link>
                    </li>
                    <li
                        class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="mdi mdi-chevron-right"></i>
                    </li>
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-red-500">
                        <a href="">Utility</a>
                    </li>
                    <li
                        class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="mdi mdi-chevron-right"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold text-red-500" aria-current="page">Privacy
                    </li>
                </ul>
            </div>
        </section><!--end section-->
        <!-- End Hero -->
        <privacy />
    </div>
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/navbar.vue';
import privacy from '@/components/utility/privacy.vue'
import fooTer from '@/components/footer.vue';
import switcher from '@/components/switcher.vue'
export default {
    name: "privacyPage",
    data() {
        return {

        }
    },
    components: {
        navbar,
        privacy,
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