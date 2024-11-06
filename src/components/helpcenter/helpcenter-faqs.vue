<template>
    <div>
        <!-- Start Section-->
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="flex justify-center md:pb-24 pb-16">
                    <div class="lg:col-span-8 md:col-span-7 ">
                        <div id="tech">
                            <h5 class="text-2xl font-semibold">Buying Product</h5>

                            <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas" :key="item"
                                    class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button " @click="handleclick(item.id)"
                                            :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''"
                                            class=" flex justify-between items-center p-5 w-full font-medium text-start">
                                            <span>{{ item.title }}</span>
                                            <svg data-accordion-icon class="size-4  shrink-0"
                                                :class="item.id === activeIndex ? 'rotate-180' : ''" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class=""
                                        :class="item.id === activeIndex ? '' : 'hidden'">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="general" class="mt-8">
                            <h5 class="text-2xl font-semibold">General Questions</h5>

                            <div id="accordion-collapsetwo" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas2" :key="item"
                                    class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-5">
                                        <button type="button" @click="handleclick2(item.id)"
                                            :class="item.id === activeIndex2 ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''"
                                            class="flex justify-between items-center p-5 w-full font-medium text-start">
                                            <span>{{ item.title }}</span>
                                            <svg data-accordion-icon class="size-4  shrink-0"
                                                :class="item.id === activeIndex2 ? 'rotate-180' : ''" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-5" class=""
                                        :class="item.id === activeIndex2 ? '' : 'hidden'"
                                        aria-labelledby="accordion-collapse-heading-5">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">
                                                {{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="payment" class="mt-8">
                            <h5 class="text-2xl font-semibold">Payments Questions</h5>

                            <div id="accordion-collapsethree" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas3" :key="item"
                                    class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-9">
                                        <button type="button" @click="handleclick3(item.id)"
                                            :class="item.id === activeIndex3 ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''"
                                            class="flex justify-between items-center p-5 w-full font-medium text-start">
                                            <span>{{ item.title }}</span>
                                            <svg data-accordion-icon class="size-4 shrink-0"
                                                :class="item.id === activeIndex3 ? 'rotate-180' : ''" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-9" class=""
                                        :class="item.id === activeIndex3 ? '' : 'hidden'">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="support" class="mt-8">
                            <h5 class="text-2xl font-semibold">Support Questions</h5>

                            <div id="accordion-collapsefour" data-accordion="collapse" class="mt-6">
                                <div v-for="item in datas4" :key="item"
                                    class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 class="text-base font-semibold" id="accordion-collapse-heading-13">
                                        <button type="button" @click="handleclick4(item.id)"
                                            :class="item.id === activeIndex2 ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''"
                                            class="flex justify-between items-center p-5 w-full font-medium text-start">
                                            <span>{{ item.title }}</span>
                                            <svg data-accordion-icon class="size-4  shrink-0"
                                                :class="item.id === activeIndex4 ? 'rotate-180' : ''" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-13" class=""
                                        :class="item.id === activeIndex4 ? '' : 'hidden'">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question ?
                        Get in touch!</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose
                        confidence, embrace your unique look.</p>

                    <div class="mt-6">
                        <router-link to="/helpcenter-support"
                            class="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md me-2 mt-2"><i
                                data-feather="phone" class="size-4 me-1"></i> Contact us</router-link>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section-->
    </div>
</template>

<script>
export default {
    name: "helpFaqs",
    data() {
        return {
            scroll: true,
            sections: document.querySelectorAll("section"),
            navLi: document.querySelectorAll("div .container .rounded-md ul li"),
            current: "",
            sectionTop: null,
            activeIndex: 1,
            activeIndex2: 1,
            activeIndex3: 1,
            activeIndex4: 1,

            datas: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use Travosy  ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 3,
                    title: 'What do I need to do to start selling ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 4,
                    title: 'What happens when I receive an order ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
            ],
            datas2: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use Travosy  ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 3,
                    title: 'What do I need to do to start selling ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 4,
                    title: 'What happens when I receive an order ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
            ],
            datas3: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use Travosy  ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 3,
                    title: 'What do I need to do to start selling ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 4,
                    title: 'What happens when I receive an order ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
            ],
            datas4: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use Travosy  ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 3,
                    title: 'What do I need to do to start selling ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 4,
                    title: 'What happens when I receive an order ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
            ],
            
            

        }
    },
    mounted() {
        window.addEventListener('scroll', this.onscroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onscroll);
    },
    methods: {
        onscroll() {
            document.querySelectorAll("section").forEach((section) => {
                this.sectionTop = section.offsetTop;
                if (pageYOffset >= this.sectionTop - 60) {
                    this.current = section.getAttribute("id");
                }
            });

            document.querySelectorAll("div .container .rounded-md ul li").forEach((li) => {
                if (li.classList.contains(this.current)) {
                    li.classList.add("active");
                } else {
                    li.classList.remove("active");

                }
            });
        },
        handleclick(id) {
            this.activeIndex = id

        },
        handleclick2(id) {
            this.activeIndex2 = id

        },
        handleclick3(id) {
            this.activeIndex3 = id

        },
        handleclick4(id) {
            this.activeIndex4 = id

        },
    },
}
</script>

<style lang="scss" scoped>


</style>