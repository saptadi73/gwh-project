<template>
    <tagline />
    <navbar :menuLight="'nav-light'" :tagLine="'tagline-height'" :navLight=true :searchMenu="'text-white'" />
    <!-- Hero Start -->
    <section class="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center" id="home" accordion
        :style="{ 'background-image': `url(${randomImage})` }">
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container relative">
            <div class="grid grid-cols-1">
                <div class="text-center">
                    <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let
                        the journey begin...</h1>
                    <p class="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip
                        with the best places and within best budget!</p>

                    <div class="mt-6">
                        <selectdate />
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <section class="relative md:py-24 py-16 overflow-hidden">
        <destinations />
        <agency />
        <packages />
        <users />
    </section>
    <instapost />
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import tagline from '@/components/tagline.vue';
import navbar from '@/components/navbar.vue';
import image from '../../assets/images/bg/4.jpg'
import image2 from '../../assets/images/bg/5.jpg'
import image3 from '../../assets/images/bg/6.jpg';
import destinations from '@/components/destinations/destinations.vue';
import agency from '@/components/agency.vue';
import packages from '@/components/tour-packages/tour-packages-12item.vue';
import users from '@/components/users.vue';
import instapost from '@/components/insta-post.vue';
import fooTer from '@/components/footer.vue';
import selectdate from '@/components/selected-date.vue'
import switcher from '@/components/switcher.vue'
export default {
    name: "indexThree",
    data() {
        return {
            randomImage: '',
            backgroundImages: [
                image,
                image2,
                image3

            ]

        }
    },
    mounted() {
        this.changeBackground();
        setInterval(this.changeBackground, 4000);
        this.scrollToTop()

    },
    components: {
        tagline,
        navbar,
        destinations,
        agency,
        packages,
        users,
        instapost,
        fooTer,
        selectdate,
        switcher
    },
    methods: {
        changeBackground() {
            const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
            this.randomImage = this.backgroundImages[randomIndex];
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}
</script>

<style lang="scss" scoped></style>