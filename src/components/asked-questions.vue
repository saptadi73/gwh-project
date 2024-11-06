<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-6 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Frequently Asked
                Questions</h3>

            <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome
                template, you can replace it with any text.</p>
        </div><!--end grid-->

        <div class="relative grid md:grid-cols-12 grid-cols-1 items-center mt-6 gap-6">
            <div class="md:col-span-6">
                <img src="../assets/images/bg/6.jpg"
                    class="w-full h-[540px] object-cover rounded-md shadow dark:shadow-gray-800" alt="">
            </div><!--end col-->

            <div class="md:col-span-6">
                <div id="accordion-collapse" data-accordion="collapse">
                    <div v-for="item in datas" :key="item"
                        class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                        <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                            <button type="button"  @click="handleclick(item.id)"
                                :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''"
                                class="flex justify-between items-center p-5 w-full font-medium text-start"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span>{{ item.title }}</span>
                                <svg data-accordion-icon :class="item.id === activeIndex ? 'rotate-180' : ''"
                                    class="w-4 h-4  shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" class="" :class="item.id === activeIndex ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5">
                                <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end grid-->
    </div><!--end container-->
    <!-- End -->
</template>

<script>
export default {
    name: 'askedQuestions',
    data() {
        return {
            activeIndex: 1,
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
                {
                    id: 5,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
            ]
        }
    },
    methods: {
        handleclick(id) {
            this.activeIndex = id

        },
    },
}
</script>

<style lang="scss" scoped></style>