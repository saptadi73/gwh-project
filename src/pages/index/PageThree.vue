<template>
    <TaglineGwh />
    <NavbarGwh :menuLight="'nav-light'" :tagLine="'tagline-height'" :navLight=true :searchMenu="'text-white'" />
    <!-- Hero Start -->
    <section class="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center" id="home" accordion
        :style="{ 'background-image': `url(${randomImage})` }">
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container relative">
            <div class="grid grid-cols-1">
                <div class="text-center">
                    <h1 class="font-bold text-white lg:leading-normal leading-normal text-3xl lg:text-4xl mb-6 mt-5">Kahuripan Lestari Menjamin Kenyamanan Anda Tinggal</h1>
                    <div class="bg-black bg-transparent">
                        <p class="font-bold text-white/70 text-xl max-w-xl mx-auto">Mencari tempat tinggal untuk anak anda yang menempuh pendidikan? Atau mencari tempat penginapan selama perjalanan dinas? Atau anda ingin mendapatkan ruko bisnis yang nyaman dan strategis?</p>
                    </div>
                    

                    <div class="mt-6">
                        <SelectedTanggal />
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <section class="relative md:py-24 py-16 overflow-hidden">
        <DestinationGwh/>
        <AgencyGwh />
        <RentalPackages />
        <GridRuko/>
        <UsersGwh />

    </section>
    <InstapostGwh />
    <FooTerGwh />
    <switcher :switcherBack=true />
</template>

<script>
import TaglineGwh from '@/components/TaglineGwh.vue';
import image from '../../assets/images/bg/bg_1.jpg'
import image2 from '../../assets/images/bg/bg_3.jpg'
import image3 from '../../assets/images/bg/bg_6.jpg';
import image4 from '../../assets/images/bg/bg_2.jpg';
import DestinationGwh from '@/components/destinations/DestinationGwh.vue';
import AgencyGwh from '@/components/AgencyGwh.vue';
import UsersGwh from '@/components/UsersGwh.vue';
import InstapostGwh from '@/components/InstapostGwh.vue';
import FooTerGwh from '@/components/FooterGwh.vue';
import switcher from '@/components/switcher.vue'
import NavbarGwh from '@/components/NavbarGwh.vue';
import RentalPackages from '@/components/tour-packages/RentalPackages.vue';
import GridRuko from '../innerpages/listing/tour-grid/GridRuko.vue';
import SelectedTanggal from '@/components/SelectedTanggal.vue';
export default {
    name: "indexThree",
    data() {
        return {
            randomImage: '',
            backgroundImages: [
                image,
                image2,
                image3,
                image4

            ]

        }
    },
    mounted() {
        this.changeBackground();
        setInterval(this.changeBackground, 4000);
        this.scrollToTop()

    },
    components: {
        TaglineGwh,
        NavbarGwh,
        DestinationGwh,
        AgencyGwh,
        RentalPackages,
        UsersGwh,
        InstapostGwh,
        FooTerGwh,
        SelectedTanggal,
        switcher,
        GridRuko
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