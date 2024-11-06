<template>
    
                <h5 class="text-2xl font-semibold">New Zealand’s South Island brims with majestic</h5>
                <p class="flex items-center text-slate-400 font-medium mt-2"><i data-feather="map-pin"
                        class="size-4 me-1"></i> New Zealand</p>

                <ul class="list-none">
                    <li class="inline-flex items-center me-5 mt-5">
                        <i data-feather="clock" class="size-6 stroke-[1.5] text-red-500"></i>

                        <div class="ms-3">
                            <p class="font-medium">Duration</p>
                            <span class="text-slate-400 font-medium text-sm">2 day</span>
                        </div>
                    </li>

                    <li class="inline-flex items-center me-5 mt-5">
                        <i data-feather="activity" class="size-6 stroke-[1.5] text-red-500"></i>

                        <div class="ms-3">
                            <p class="font-medium">Type</p>
                            <span class="text-slate-400 font-medium text-sm">Adventure</span>
                        </div>
                    </li>

                    <li class="inline-flex items-center me-5 mt-5">
                        <i data-feather="users" class="size-6 stroke-[1.5] text-red-500"></i>

                        <div class="ms-3">
                            <p class="font-medium">Group Size:</p>
                            <span class="text-slate-400 font-medium text-sm">50 Peoples</span>
                        </div>
                    </li>

                    <li class="inline-flex items-center me-5 mt-5">
                        <i data-feather="globe" class="size-6 stroke-[1.5] text-red-500"></i>

                        <div class="ms-3">
                            <p class="font-medium">Languages</p>
                            <span class="text-slate-400 font-medium text-sm">English</span>
                        </div>
                    </li>

                    <li class="inline-flex items-center me-5 mt-5">
                        <i data-feather="dollar-sign" class="size-6 stroke-[1.5] text-red-500"></i>

                        <div class="ms-3">
                            <p class="font-medium">$50 / Person</p>
                            <span class="text-slate-400 font-medium text-sm">1 Day</span>
                        </div>
                    </li>
                </ul>

                <div class="mt-6">
                    <h5 class="text-lg font-semibold">Tour Descriptions:</h5>

                    <p class="text-slate-400 mt-6">The most well-known dummy text is the 'Lorem Ipsum', which is
                        said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                        language which more or less corresponds to 'proper' Latin. It contains a series of real
                        Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of
                        most European languages in Latin script.</p>
                    <p class="text-slate-400 mt-3">The advantage of its Latin origin and the relative
                        meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or
                        distract the viewer's attention from the layout.</p>
                </div>

                <div class="mt-6">
                    <h5 class="text-lg font-semibold">Questions & Answers:</h5>

                    <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
                        <div v-for="item in datas" :key="item"
                            class="mt-4 relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                            <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                <button type="button" @click="handleclick(item.id)"
                                    :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''"
                                    class="flex justify-between items-center p-5 w-full font-medium text-start"
                                    data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                    aria-controls="accordion-collapse-body-1">
                                    <span>{{ item.title }}</span>
                                    <svg data-accordion-icon :class="item.id === activeIndex ? 'rotate-180' : ''"
                                        class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" class=""
                                :class="item.id === activeIndex ? '' : 'hidden'"
                                aria-labelledby="accordion-collapse-heading-1">
                                <div class="p-5">
                                    <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-6">
                    <h5 class="text-lg font-semibold">Leave A Comment:</h5>

                    <form class="mt-6">
                        <div class="grid lg:grid-cols-12 lg:gap-6">
                            <div class="lg:col-span-6 mb-5">
                                <div class="text-left">
                                    <label for="name" class="font-semibold">Your Name:</label>
                                    <input name="name" id="name" type="text"
                                        class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="Name :">
                                </div>
                            </div>

                            <div class="lg:col-span-6 mb-5">
                                <div class="text-left">
                                    <label for="email" class="font-semibold">Your Email:</label>
                                    <input name="email" id="email" type="email"
                                        class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="Email :">
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1">
                            <div class="mb-5">
                                <div class="text-left">
                                    <label for="comments" class="font-semibold">Your Comment:</label>
                                    <textarea name="comments" id="comments"
                                        class="mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 h-28"
                                        placeholder="Message :"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="submit" name="send"
                            class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full">Send
                            Message</button>
                    </form>
                </div>            
</template>

<script>

export default {
    data() {
        return {
            datas: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use TRAVOSY  ?',
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
            activeIndex: 1,
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