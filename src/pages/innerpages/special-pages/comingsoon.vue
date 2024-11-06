<template>
    <div>
        <section class="relative bg-[url('../../assets/images/bg/cta.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <router-link to="/"><img src="../../../assets/images/logo-icon.png" class="mx-auto"
                                    alt=""></router-link>
                        </div>
                        <div class="title-heading text-center my-auto">
                            <h1 class="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                            <p class="text-white/70 text-lg max-w-xl mx-auto">Start working with Travosy that can
                                provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div id="countdown">
                                <ul class="count-down list-none inline-block text-white text-center mt-8 m-6">

                                    <li id="days"
                                        class="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/20 backdrop-opacity-30 inline-block m-2">
                                        {{ days }}<p class="count-head">Days</p>
                                    </li>
                                    <li id="hours"
                                        class="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/20 backdrop-opacity-30 inline-block m-2">
                                        {{ hours }}<p class="count-head">Hours</p>
                                    </li>
                                    <li id="mins"
                                        class="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/20 backdrop-opacity-30 inline-block m-2">
                                        {{ minutes }}<p class="count-head">minutes</p>
                                    </li>
                                    <li id="secs"
                                        class="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/20 backdrop-opacity-30 inline-block m-2">
                                        {{ seconds }}<p class="count-head">seconds</p>
                                    </li>

                                    <li id="end" class="h1"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-slate-400">© {{ date1 }} Travosy. Design & Develop with <i
                                    class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/"
                                    target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- {{ seconds }} -->
        <switcher :switcherBack=false />
    </div>
</template>

<script>
import feather from 'feather-icons';
import switcher from '@/components/switcher.vue'
export default {
    name: "comingSoon",
    data() {
        return {
            date1: new Date().getFullYear(),
            date: '',
            now: '',
            countDownToTime: new Date("Sep 26, 2024 00:00:00").getTime(),
            targetTime: () => this.targetDate.getTime(),
            difference: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: '',

        }
    },
    components: {
        switcher
    },
    mounted() {
        this.intervalId = setInterval(() => {
            this.tickTock();
            this.difference = this.countDownToTime - this.now;
            this.difference = this.difference / (1000 * 60 * 60 * 24);
        }, 1000);

        feather.replace()
    },
    methods: {
        tickTock() {
            this.date = new Date();
            this.now = this.date.getTime();
            this.days = Math.floor(this.difference);
            this.hours = 23 - this.date.getHours();
            this.minutes = 60 - this.date.getMinutes();
            this.seconds = 60 - this.date.getSeconds();
        }
    },
}
</script>

<style lang="scss" scoped></style>