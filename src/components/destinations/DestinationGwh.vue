<template>
    <!-- Start -->
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Pilihan Indekos untuk Pelajar/Pekerja Terbaik</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Ingin mendapatkan rumah indekos nyaman dan aman sekaligus memiliki fasilitas lengkap dan akses ke tempat kerja atau pendidikan lebih mudah?</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative mt-6 gap-6">
                    <div v-for="item in destinations" :key="item" class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                        <img :src="item.image" class="scale-125 group-hover:scale-100 duration-500" alt="">
                        <div class="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                        <div class="absolute p-4 bottom-0 start-0">
                            <a href="" class="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out">{{item.place}}</a>
                            <p class="text-white/70 group-hover:text-white text-sm duration-500">{{ item.hotel }}</p>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        name: 'destinationCompo',
        data() {
            return {
                destinations: [
                {
                    image: require('../../assets/images/listing/listing_1.jpg'),
                    place: 'Depok, Jawa Barat',
                    hotel: '13 Kamar'
                },
                {
                    image: require('../../assets/images/listing/listing_2.jpg'),
                    place: 'Menteng, Jakarta',
                    hotel: '15 Hotels'
                },
                {
                    image: require('../../assets/images/listing/listing_3.jpg'),
                    place: 'Geger Kalong, Bandung',
                    hotel: '20 Kamar'
                },
                {
                    image: require('../../assets/images/listing/listing_4.jpg'),
                    place: 'Dago, Bandung',
                    hotel: '12 Kamar'
                },
                {
                    image: require('../../assets/images/listing/listing_5.jpg'),
                    place: 'Kosambi, Bandung',
                    hotel: '12 Kamar'
                },
                {
                    image: require('../../assets/images/listing/listing_6.jpg'),
                    place: 'Kemang, Jakarta',
                    hotel: '8 Kamar'
                },
                {
                    image: require('../../assets/images/listing/listing_7.jpg'),
                    place: 'Kebon Sirih, Jakarta',
                    hotel: '1 Rumah 3 kamar'
                },
                {
                    image: require('../../assets/images/listing/listing_8.jpg'),
                    place: 'Pondok Kelapa, jakarta',
                    hotel: '2 Rumah'
                },
            ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>