<template>
    <navbar :menuLight="'nav-light'" :navLight=true :searchMenu="'text-white'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="text-4xl leading-normal tracking-wider font-semibold text-white">Travosy Travel Agency</h3>
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
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">About Us</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->
    <agency />
    <section class="relative md:py-24 py-16 overflow-hidden">
        <team />
        <users />
        <blog />
    </section>
    <instapost />
    <fooTer />
      <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/navbar.vue';
import agency from '@/components/agency.vue';
import team from '@/components/team.vue';
import users from '@/components/users.vue';
import blog from '@/components/blogs.vue';
import instapost from '@/components/insta-post.vue'
import fooTer from '@/components/footer.vue';
import switcher from '@/components/switcher.vue'
export default {
    name: 'aboutUs',
    data() {
        return {

        }
    },
    components: {
        navbar,
        agency,
        team,
        users,
        blog,
        instapost,
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