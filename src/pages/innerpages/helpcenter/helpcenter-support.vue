<template>
    <navbar :menuLight="'nav-light'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Submit Your Support Request
                </h3>

            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">Travosy</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                        class="mdi mdi-chevron-right"></i></li>
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/helpcenter">Helpcenter</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                        class="mdi mdi-chevron-right"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">Support</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->
    <helpsupport />
    <fooTer />
      <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/navbar.vue';
import helpsupport from '@/components/helpcenter/helpcenter-support.vue'
import fooTer from '@/components/footer.vue';
import switcher from '@/components/switcher.vue'
export default {
    name: 'helpcenter-support',
    data() {
        return {

        }
    },
    components: {
        navbar,
        helpsupport,
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