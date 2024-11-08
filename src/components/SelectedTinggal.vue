<template>
    <form class="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
        <div class="registration-form text-dark text-start">
            <div class="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                    <label class="form-label font-medium text-slate-900 dark:text-white">Durasi</label>
                    <div class="relative mt-2">
                        <i data-feather="clock" class="size-[18px] absolute top-[10px] start-3"></i>
                        <input name="durasi" type="number" id="job-keyword"
                            class="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="1">
                    </div>

                </div>
                <div>
                    <label class="form-label font-medium text-slate-900 dark:text-white">Pilihan Waktu:</label>
                    <div class="relative mt-2">
                        <i data-feather="clock" class="size-[18px] absolute top-[10px] start-3"></i>
                        <select
                            class="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                            <option disabled selected>Hr/Bln/Thn</option>
                            <option value="indekos">Hari</option>
                            <option value="apartemen">Bulan</option>
                            <option value="rumah">Tahun</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="form-label font-medium text-slate-900 dark:text-white">Pilihan hunian:</label>
                    <div class="relative mt-2">
                        <i data-feather="home" class="size-[18px] absolute top-[10px] start-3"></i>
                        <select
                            class="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                            <option disabled selected>Jenis Hunian</option>
                            <option value="indekos">indekos</option>
                            <option value="apartemen">Apartemen</option>
                            <option value="rumah">Rumah</option>
                            <option value="ruko">Ruko</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="form-label font-medium text-slate-900 dark:text-white">Pilihan lokasi:</label>
                    <div class="relative mt-2">
                        <i data-feather="map-pin" class="size-[18px] absolute top-[10px] start-3"></i>
                        <select id="lokasi"
                            class="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                            <option disabled selected>Daerah</option>
                            <option value="indekos">Menteng, Jakarta</option>
                            <option value="apartemen">Kemang, Jakarta</option>
                            <option value="rumah">Depok, Jabar</option>
                            <option value="ruko">Bandung, Jabar</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="form-label font-medium text-slate-900 dark:text-white">Rencana Mulai:</label>
                    <div class="relative mt-2">
                        <VueDatePicker v-model="date2" class="dp__theme_dark" :enable-time-picker="false"
                            placeholder="Select Your Date" text-input />
                    </div>
                </div>

                <div class="lg:mt-[35px]">
                    <input type="submit" id="search-buy" name="search"
                        class="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer"
                        value="Search">
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </form><!--end form-->
</template>

<script>

import '@vuepic/vue-datepicker/dist/main.css'
import VueDatePicker from '@vuepic/vue-datepicker';

export default {
    name: 'selectedTinggal',
    data() {
        return {
            date: null,
            date2: null,
        }
    },
    components: {
        VueDatePicker,

    }
}
</script>

<style lang="scss" scoped></style>