<template>
    <div class="relative md:-mt-48 -mt-32">
        <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <div class="profile-pic text-center mb-5">
                <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile" />
                <div>
                    <div class="relative h-28 w-28 mx-auto">
                        
                            <img :src="imageSrc" class="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="">
                        <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                    </div>

                    <div class="mt-4">
                        <h5 class="text-lg font-semibold">Jesus Zamora</h5>
                        <p class="text-slate-400">jesus@hotmail.com</p>
                    </div>
                    <div class="mt-2">
                        <div class="flex items-center">
                            <div class="text-medium font-semibold mr-5 text-blue-300 flex"><i data-feather="award"></i>Point</div>
                            <div class="ml-3">:</div>
                            <div class="ml-5 font-bold text-red-600">2.600</div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="flex items-center">
                            <div class="text-medium font-semibold mr-5 text-blue-300 flex"><i data-feather="zap"></i>Saldo</div>
                            <div class="ml-2">:</div>
                            <div class="ml-5 font-bold text-blue-950">45.500</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-100 dark:border-gray-700">
                <ul class="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-profile-gwh' ? 'active' : ''">
                        <router-link to="/user-profile-gwh"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="airplay" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Profile</h6>
                        </router-link>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-payment' ? 'active' : ''">
                        <router-link to="/user-payment-gwh"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="credit-card" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Payment</h6>
                        </router-link>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-invoice' ? 'active' : ''">
                        <router-link to="/user-list-invoice"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="file-text" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Invoice</h6>
                        </router-link>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-social' ? 'active' : ''">
                        <router-link to="/user-social"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="share-2" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Social Profile</h6>
                        </router-link>
                    </li>

                    <li class="navbar-item ms-0 account-menu"
                        :class="currentUrl == '/user-notification' ? 'active' : ''">
                        <router-link to="/user-notification"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="bell" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Notifications</h6>
                        </router-link>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-setting' ? 'active' : ''">
                        <router-link to="/user-setting"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="settings" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Settings</h6>
                        </router-link>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-registration' ? 'active' : ''">
                        <router-link to="/user-registration"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="settings" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">User Registration</h6>
                        </router-link>
                    </li>

                    <li class="navbar-item ms-0 account-menu" :class="currentUrl == '/user-screen' ? 'active' : ''">
                        <router-link to="/lock-screen"
                            class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 mb-0"><i data-feather="log-out" class="size-4"></i></span>
                            <h6 class="mb-0 font-medium">Sign Out</h6>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   

</template>

<script>
export default {
    name: "accountTab",
    data() {
        return {
            currentUrl: '',
            imageSrc: require('../assets/images/client/16.jpg'),
            image: ''
        }
    },

    created: function () {
        this.currentUrl = window.location.pathname;
    },
    methods: {
        loadFile(event) {
            this.image = document.getElementById(event.target.name);
            this.imageSrc = URL.createObjectURL(event.target.files[0]);
        }
    }



}
</script>

<style lang="scss" scoped></style>