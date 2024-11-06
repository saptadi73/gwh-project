<template>
    <div>
        <!-- Start Section-->
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-6 mx-auto text-center">
                    <div class="lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10">
                        <div class="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                            <form>
                                <div class="grid lg:grid-cols-12 lg:gap-6">
                                    <div class="lg:col-span-6 mb-5">
                                        <div class="text-start">
                                            <label for="name" class="font-semibold">Your Name:</label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                                <input name="name" id="name" type="text"
                                                    class="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Name :">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lg:col-span-6 mb-5">
                                        <div class="text-start">
                                            <label for="email" class="font-semibold">Your Email:</label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                <input name="email" id="email" type="email"
                                                    class="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Email :">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                        <div class="text-start">
                                            <label for="subject" class="font-semibold">Your Question:</label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="book" class="size-4 absolute top-3 start-4"></i>
                                                <input name="subject" id="subject"
                                                    class="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Subject :">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-5">
                                        <div class="text-start">
                                            <label for="comments" class="font-semibold">Your Comment:</label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="message-circle"
                                                    class="size-4 absolute top-3 start-4"></i>
                                                <textarea name="comments" id="comments"
                                                    class="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send"
                                    class="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-white rounded-md justify-center flex items-center">Send
                                    Message</button>
                            </form>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help
                        You Need</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose
                        confidence, embrace your unique look.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                    <div v-for="item in helps" :key="item" class="text-center px-6 mt-6">
                        <div
                            class="w-20 h-20 bg-red-500/5 text-red-500 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i :data-feather="item.icon" class="size-[30px]"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/helpcenter-faqs"
                                class="title h5 text-lg font-medium hover:text-red-500">{{ item.name }}</router-link>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                            <div class="mt-5">
                                <router-link v-if="item.to === '/helpcenter-faqs'" to="/helpcenter-faqs" class="text-red-500">{{item.button}} <i
                                        class="mdi mdi-chevron-right"></i></router-link>
                                        <router-link v-if="item.to === '/helpcenter-guides'" to="/helpcenter-guides" class="text-red-500">{{item.button}} <i
                                        class="mdi mdi-chevron-right"></i></router-link>
                                        <router-link v-if="item.to === '/helpcenter-support'" to="/helpcenter-support" class="text-red-500">{{item.button}} <i
                                        class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section-->
    </div>
</template>

<script>
export default {
    name: "helpcenter-support",
    data() {
        return {
            helps: [
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
        }
    },
}
</script>

<style lang="scss" scoped></style>