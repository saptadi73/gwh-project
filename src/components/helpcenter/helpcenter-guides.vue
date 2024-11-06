<template>
    <div>
        <!-- Start Section-->
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div v-for="item in guidesData" :key="item" class="">
                        <h5 class="font-semibold text-xl mb-4">{{ item.title }}</h5>
                        <ul v-for="features in item.features" :key="features" class="list-none mt-2">
                            <li class="mt-2"><a href="" class="text-slate-400"><i
                                        class="mdi mdi-arrow-right text-red-500 me-2"></i>{{ features }}</a></li>

                        </ul>
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
    name: "helpcenter-guides",
    data() {
        return {
            guidesData: [
                {
                    title: 'Getting started',
                    features: [
                        'Deciding to purchase', 'List your space', 'Landing an experience or adventure', 'Top uses questions'
                    ]
                },
                {
                    title: 'Your calendar',
                    features: [
                        'Pricing & availability', 'Booking settings', 'Responding to enquiries & requests', 'Snoozing or deactivating your listing'
                    ]
                },
                {
                    title: 'Your listings',
                    features: [
                        'Updating your listing', 'Neighbourhoods', 'Listing photos & photography', 'Travosy Plus', 'API-connected software'
                    ]
                },
                {
                    title: 'How payouts work',
                    features: [
                        'Getting paid', 'Adding payout info', 'Your payout status', 'Donations', 'Taxes'
                    ]
                },
                {
                    title: 'Your reservations',
                    features: [
                        'Travosy safely', 'Travosy Experiences and Adventures', 'Changing a reservation', 'Cancelling a reservation', 'Long-term reservations'
                    ]
                },
                {
                    title: 'Reservation help',
                    features: [
                        'Help with a reservation or guest', 'Guest cancellations'
                    ]
                },
                {
                    title: 'Your account',
                    features: [
                        'Your profile', 'Account security', 'Identification & verifications', 'Reviews', 'Superhost status'
                    ]
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>