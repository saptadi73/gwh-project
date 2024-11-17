<template>
    
    <h5 class="text-2xl font-semibold">Indekos Paling Menawan dan Nyaman dengan Variasi Harga Terjangkau Pelajar</h5>
    <p class="flex items-center text-slate-400 font-medium mt-2"><i data-feather="map-pin"
            class="size-4 me-1"></i>Depok, Jawa Barat</p>

    <ul class="list-none">
        <li class="inline-flex items-center me-5 mt-5">
            <i data-feather="clock" class="size-6 stroke-[1.5] text-red-500"></i>

            <div class="ms-3">
                <p class="font-medium">Fasilitas</p>
                <span class="text-slate-400 font-medium text-sm">Internet, Kamar Mandi Dalam</span>
            </div>
        </li>

        <li class="inline-flex items-center me-5 mt-5">
            <i data-feather="activity" class="size-6 stroke-[1.5] text-red-500"></i>

            <div class="ms-3">
                <p class="font-medium">Ukuran</p>
                <span class="text-slate-400 font-medium text-sm">3x4 m</span>
            </div>
        </li>

        <li class="inline-flex items-center me-5 mt-5">
            <i data-feather="users" class="size-6 stroke-[1.5] text-red-500"></i>

            <div class="ms-3">
                <p class="font-medium">Fasilitas lain:</p>
                <span class="text-slate-400 font-medium text-sm">Pantry, Taman</span>
            </div>
        </li>

        <li class="inline-flex items-center me-5 mt-5">
            <i data-feather="globe" class="size-6 stroke-[1.5] text-red-500"></i>

            <div class="ms-3">
                <p class="font-medium">Akses</p>
                <span class="text-slate-400 font-medium text-sm">15 menit jalan ke Kampus</span>
            </div>
        </li>

        <li class="inline-flex items-center me-5 mt-5">
            <i data-feather="dollar-sign" class="size-6 stroke-[1.5] text-red-500"></i>

            <div class="ms-3">
                <p class="font-medium">Rp 850k /bulan</p>
                <span class="text-slate-400 font-medium text-sm">35% off pembayaran setahun</span>
            </div>
        </li>
    </ul>

    <div class="mt-6">
        <h5 class="text-lg font-semibold">Deskripsi:</h5>

        <p class="text-slate-400 mt-6">Memilih indekos tentulah memilih yang sangat terjangkau harganya dan memiliki akses mudah ke tempat kerja maupun belajar. Kahuripan memiliki hunian untuk kos pelajar maupun pegawai yang terjangkau dengan akses ke Stasiun KRL atau jarak yang dekat dengan kampur.</p>
        <p class="text-slate-400 mt-3">Nikmati diskon yang menawan dengan melakukan deposit pembayaran untuk beberapa bulan ke depan hubungi kami.</p>
    </div>
    <div class="mt-6">
        <PannellumGwh/>

    </div>

    <div class="mt-6">
        <h5 class="text-lg font-semibold">Pertanyaan & Jawaban:</h5>

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
        <h5 class="text-lg font-semibold">Tinggalkan Pesan/Pertanyaan:</h5>

        <form class="mt-6">
            <div class="grid lg:grid-cols-12 lg:gap-6">
                <div class="lg:col-span-6 mb-5">
                    <div class="text-left">
                        <label for="name" class="font-semibold">Nama:</label>
                        <input name="name" id="name" type="text"
                            class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="Name :">
                    </div>
                </div>

                <div class="lg:col-span-6 mb-5">
                    <div class="text-left">
                        <label for="email" class="font-semibold">Email:</label>
                        <input name="email" id="email" type="email"
                            class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="Email :">
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1">
                <div class="mb-5">
                    <div class="text-left">
                        <label for="comments" class="font-semibold">Pertanyaan / Komentar:</label>
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
import PannellumGwh from '../PannellumGwh2.vue';

export default {
    components:{PannellumGwh},
data() {
return {
datas: [
    {
        id: 1,
        title: 'Berapa jarak jauh ke kampus dan Stasiun KRL ?',
        desc: 'Jika ditempuh dengan sepeda motor cukup 5 menit jalan dari indekos ke kampus UI, untuk ke stasiun KRL 15 menit.',
    },
    {
        id: 2,
        title: 'Jika melakukan pembayaran deposit apakah mendapatkan penawaran diskon?',
        desc: 'Jika melakukan pembayaran muka 3 bulan mendapatkan diskon 10%, untuk 6 bulan 25%, dan untuk 1 tahun ke depan 35%.',
    },
    {
        id: 3,
        title: 'Apakah diperbolehkan memasak sendiri di lingkungan kos?',
        desc: 'Kami menyediakan pantry, perlatan memasak seperti kompor, panci, dan wajan. Kami juga menyediakan beberapa piring dan gelas.',
    },
    {
        id: 4,
        title: 'Setiap tanggal berapa dilakukan pembayaran?',
        desc: 'Pembayaran dilakukan setap tanggal 10, dan untuk penempatan baru atau pindah kamar selalu dimulai tanggal 15 setiap bulannya.',
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