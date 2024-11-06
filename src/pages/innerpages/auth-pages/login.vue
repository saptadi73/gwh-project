<template>
    <!-- Loader End -->
    <section class="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div
            class="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover">
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
        <div class="container relative z-3">
            <div class="flex justify-center">
                <div
                    class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                    <router-link to="/"><img src="../../../assets/images/logo-icon.png" class="mx-auto"
                            alt=""></router-link>
                    <h5 class="my-6 text-xl font-semibold">Login</h5>
                    <form class="text-start">
                        <div class="grid grid-cols-1">
                            <div class="mb-4">
                                <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                <input id="LoginEmail" type="email"
                                    class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                    placeholder="name@example.com" required>
                            </div>

                            <div class="mb-4">
                                <label class="font-semibold" for="LoginPassword">Password:</label>
                                <input id="LoginPassword" type="password"
                                    class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                    placeholder="Password:" required>
                            </div>

                            <div class="flex justify-between mb-4">
                                <div class="flex items-center mb-0">
                                    <input
                                        class="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                                        type="checkbox" value="" id="RememberMe">
                                    <label class="form-checkbox-label text-slate-400" for="RememberMe">Remember
                                        me</label>
                                </div>
                                <p class="text-slate-400 mb-0"><router-link to="/forgot-password"
                                        class="text-slate-400">Forgot password ?</router-link></p>
                            </div>

                            <div class="mb-4">
                                <input type="submit"
                                    class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
                                    value="Login / Sign in">
                            </div>

                            <div class="text-center">
                                <span class="text-slate-400 me-2">Don't have an account ?</span> <router-link
                                    to="/signup" class="text-black dark:text-white font-bold inline-block">Sign
                                    Up</router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section><!--end section -->
    <switcher :switcherBack=false />

</template>

<script>
import feather from 'feather-icons'
import switcher from '@/components/switcher.vue'
export default {
    name: "loginPage",
    data() {
        return {
            date: new Date().getFullYear()
        }
    },
    components: {
        switcher
    },
    mounted() {
        feather.replace();
    },


}
</script>

<style lang="scss" scoped></style>