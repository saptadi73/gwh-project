<template>
    <navbar :navLight=false />
    <!-- Start Hero -->
    <section class="relative table w-full pt-44 pb-56 bg-[url('../../assets/images/bg/7.png')] bg-bottom bg-cover"
        id="home">
        <div class="container relative">
            <div class="grid grid-cols-1 items-center mt-10 gap-[30px]">
                <div>
                    <h5 class="text-3xl font-dancing">Beauty of Discover</h5>
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Enjoy Your
                        Dream <br> Vacation</h4>
                    <p class="text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and
                        within best budget!</p>

                    <selectdate class="mt-8" />
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->

    <section class="relative md:py-24 py-16 overflow-hidden">
        <destinations :Destinations=true />
        <agency />
        <packages />
        <users />
        <blog />
    </section>
    <fooTer />
    <switcher :switcherBack=true />
</template>

<script>
import navbar from '@/components/navbar.vue';
import destinations from '@/components/destinations/destinations-slider.vue';
import agency from '@/components/agency.vue';
import packages from '@/components/tour-packages/tour-packages.vue';
import users from '@/components/users.vue';
import blog from '@/components/blogs.vue';
import selectdate from '@/components/selected-date.vue'
import fooTer from '@/components/footer.vue';
import switcher from '@/components/switcher.vue'
export default {
    name: 'indexFive',
    data() {
        return {
            date: null,
            color: '#ff4577',
        }
    },
    components: {
        navbar,
        destinations,
        agency,
        packages,
        users,
        blog,
        selectdate,
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

<style scoped></style>