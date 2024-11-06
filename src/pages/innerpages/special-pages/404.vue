<template>
    <div>
        <section class="relative bg-red-500/5">
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <router-link to="/">
                                <img src="../../../assets/images/logo-icon.png" class="mx-auto" alt="">
                               
                                </router-link>
                        </div>
                        <div class="title-heading text-center my-auto">
                            <img src="../../../assets/images/maintenance.svg" class="mx-auto w-72" alt="">
                            <h1 class="mt-8 mb-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                            <p class="text-slate-400">Whoops, this is embarassing. <br> Looks like the page you were
                                looking for wasn't found.</p>

                            <div class="mt-4">
                                <router-link to="/"
                                    class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-white rounded-md">Back
                                    to Home</router-link>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-slate-400">© {{ date }} Travosy. Design & Develop with <i
                                    class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/"
                                    target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->

        <div class="fixed bottom-3 end-3">
            <router-link to="/" href=""
                class="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-white rounded-full"><i
                    data-feather="arrow-left" class="h-4 w-4"></i></router-link>
        </div>
    </div>
</template>

<script>
import feather from 'feather-icons'
export default {
    name: "errorPage",
    data() {
        return {
            date: new Date().getFullYear()

        }
    },
    components: {
    },
    mounted() {
        feather.replace()
    },
}
</script>

<style lang="scss" scoped></style>