<template>
  <!-- Start Navbar -->
  <nav id="topnav" class="defaultscroll is-sticky" :class="tagLine">
    <div class="container relative">
      <!-- Logo container-->
      <router-link to="/" v-if="navLight" class="logo">
        <span class="inline-block dark:hidden">
          <img src="../assets/images/logo-dark.png" class="h-7 l-dark" alt="" />
          <img
            src="../assets/images/logo-light.png"
            class="h-7 l-light"
            alt=""
          />
        </span>
        <img
          src="../assets/images/logo-white.png"
          class="hidden dark:inline-block"
          alt=""
        />
      </router-link>
      <router-link to="/" v-else class="logo">
        <div>
          <img
            src="../assets/images/logo-dark.png"
            class="h-7 inline-block dark:hidden"
            alt=""
          />
          <img
            src="../assets/images/logo-white.png"
            class="h-7 hidden dark:inline-block"
            alt=""
          />
        </div>
      </router-link>
      <!-- End Logo container-->

      <!-- Start Mobile Toggle -->
      <div class="menu-extras" @click="handler">
        <div class="menu-item">
          <a
            class="navbar-toggle"
            id="isToggle"
            :class="toggle === false ? '' : 'open'"
          >
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
      <!-- End Mobile Toggle -->

      <!--Login button Start-->
      <ul class="buy-button list-none mb-0">
        <li class="dropdown inline-block relative pe-1">
          <button
            data-dropdown-toggle="dropdown"
            class="dropdown-toggle align-middle inline-flex search-dropdown"
            type="button"
            @click="toggleParagraph"
          >
            <i data-feather="search" class="size-5 dark-icon"></i>
            <i
              data-feather="search"
              class="size-5 white-icon"
              :class="searchMenu"
            ></i>
          </button>
          <!-- Dropdown menu -->
          <div
            class="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
            :class="searchmenu === false ? 'hidden' : ''"
          >
            <div class="relative">
              <i
                data-feather="search"
                class="size-4 absolute top-[9px] end-3"
              ></i>
              <input
                type="text"
                class="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none dark:bg-slate-900"
                name="s"
                id="searchItem"
                placeholder="Search..."
              />
            </div>
          </div>
        </li>

        <li class="dropdown inline-block relative ps-0.5">
          <button
            data-dropdown-toggle="dropdown"
            class="dropdown-toggle items-center"
            type="button"
            @click="toggleParagraph3"
          >
            <span
              class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
              ><img
                src="../assets/images/client/16.jpg"
                class="rounded-md"
                alt=""
            /></span>
          </button>
          <!-- Dropdown menu -->
          <div
            class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
            :class="account === false ? 'hidden' : ''"
          >
            <ul class="py-2 text-start">
              <li>
                <router-link
                  to="/user-profile"
                  class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"
                  ><i data-feather="user" class="size-4 me-2"></i
                  >Profile</router-link
                >
              </li>
              <li class="ms-0">
                <router-link
                  to="/helpcenter"
                  class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"
                  ><i data-feather="help-circle" class="size-4 me-2"></i
                  >Helpcenter</router-link
                >
              </li>
              <li class="ms-0">
                <router-link
                  to="/user-setting"
                  class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"
                  ><i data-feather="settings" class="size-4 me-2"></i
                  >Settings</router-link
                >
              </li>
              <li
                class="border-t border-gray-100 dark:border-gray-800 my-2"
              ></li>
              <li class="ms-0">
                <router-link
                  to="/login"
                  class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"
                  ><i data-feather="log-out" class="size-4 me-2"></i
                  >Logout</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <!--end dropdown-->
      </ul>
      <!--Login button End-->

      <div id="navigation" :class="toggle === false ? 'none' : 'block'">
        <!-- Navigation Menu-->
        <ul class="navigation-menu justify-end" :class="menuLight">
          <li :class="activeMenu === '/' ? 'active' : ''">
            <router-link to="/" class="sub-menu-item"
              >Home</router-link
            >
          </li>
          <li
            class="has-submenu parent-menu-item"
            :class="
              ['/list-kost','/list-rumah','/list-villa','/list-apartement','/grid-ruko','/list-kantor','/list-item'].includes(activeMenu)
                ? 'active'
                : ''
            "
          >
            <router-link to="" @click="submenu('/list-item')"
              >Listing <span class="menu-arrow"></span
            ></router-link>
            <ul
              class="submenu"
              :class="
                ['/list-kost','/list-rumah','/list-villa','/list-apartement','/grid-ruko','/list-kantor','/list-item'].includes(menuOpen)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeMenu === '/list-kost' ? 'active' : ''">
                <router-link to="/list-kost" class="sub-menu-item"
                  >List Kost</router-link
                >
              </li>
              <li :class="activeMenu === '/list-rumah' ? 'active' : ''">
                <router-link to="/list-rumah" class="sub-menu-item"
                  >List Rumah</router-link
                >
              </li>
              <li :class="activeMenu === '/list-villa' ? 'active' : ''">
                <router-link to="/list-villa" class="sub-menu-item"
                  >List Villa</router-link
                >
              </li>
              <li :class="activeMenu === '/list-apartement' ? 'active' : ''">
                <router-link to="/list-apartement" class="sub-menu-item"
                  >List Apartement</router-link
                >
              </li>
              <li :class="activeMenu === '/grid-ruko' ? 'active' : ''">
                <router-link to="/grid-ruko" class="sub-menu-item"
                  >List Ruko</router-link
                >
              </li>
              <li :class="activeMenu === '/grid-office' ? 'active' : ''">
                <router-link to="/grid-office" class="sub-menu-item"
                  >List Kantor</router-link
                >
              </li>
            </ul>
          </li>

          <li
            class="has-submenu parent-menu-item"
            :class="
              ['/apartement-detail-one', '/kos-detail-two','/list-detail'].includes(activeMenu)
                ? 'active'
                : ''
            "
          >
            <router-link to="" @click="submenu('/list-detail')"
              >Detail<span class="menu-arrow"></span
            ></router-link>
            <ul
              class="submenu"
              :class="
                ['/apartement-detail-one', '/kos-detail-two','/list-detail'].includes(menuOpen)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeMenu === '/kos-detail-two' ? 'active' : ''">
                <router-link to="/kos-detail-two" class="sub-menu-item"
                  >Kost</router-link
                >
              </li>
              <li :class="activeMenu === '/apartement-detail-one' ? 'active' : ''">
                <router-link to="/apartement-detail-one" class="sub-menu-item"
                  >Apartement</router-link
                >
              </li>
            </ul>
          </li>

          <li
            class="has-submenu parent-menu-item"
            :class="
              ['/user-profile-gwh', '/user-list-invoice','/user-payment-gwh','/user-list-item'].includes(activeMenu)
                ? 'active'
                : ''
            "
          >
            <router-link to="" @click="submenu('/user-list-item')"
              >User <span class="menu-arrow"></span
            ></router-link>
            <ul
              class="submenu"
              :class="
                ['/user-profile-gwh', '/user-list-invoice','/user-payment-gwh','/user-list-item'].includes(menuOpen)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeMenu === '/user-profile-gwh' ? 'active' : ''">
                <router-link to="/user-profile-gwh" class="sub-menu-item"
                  >User Profile</router-link
                >
              </li>
              <li :class="activeMenu === '/user-list-invoice' ? 'active' : ''">
                <router-link to="/user-list-invoice" class="sub-menu-item"
                  >User Invoice</router-link
                >
              </li>
              <li :class="activeMenu === '/user-payment-gwh' ? 'active' : ''">
                <router-link to="/user-payment-gwh" class="sub-menu-item"
                  >User Payment</router-link
                >
              </li>
            </ul>
          </li>

          

          <li
            class="has-submenu parent-parent-menu-item"
            :class="
              [
                '/aboutus',
                '/index-pages',
                '/user-profile-gwh',
                '/user-billing',
                '/user-payment-gwh',
                '/user-list-invoice',
                '/user-social',
                '/user-notification',
                '/user-setting',
                '/index-account',
                '/helpcenter',
                '/helpcenter-faqs',
                '/helpcenter-guides',
                '/helpcenter-support',
                '/index-helpcenter',
                '/login',
                '/signup',
                '/forgot-password',
                '/lock-screen',
                '/index-auth',
                '/terms',
                '/privacy',
                '/index-terms',
                '/comingsoon',
                '/maintenance',
                '/404',
                '/index-special',
              ].includes(activeMenu)
                ? 'active'
                : ''
            "
          >
            <router-link to="" @click="submenu('/index-pages')"
              >Pages <span class="menu-arrow"></span
            ></router-link>
            <ul
              class="submenu"
              :class="
                [
                  '/index-pages',
                  '/aboutus',
                  '/index-account',
                  '/index-helpcenter',
                  '/index-auth',
                  '/index-terms',
                  '/index-special',
                ].includes(menuOpen)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeMenu === '/aboutus' ? 'active' : ''">
                <router-link to="/aboutus" class="sub-menu-item"
                  >About Us</router-link
                >
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/user-profile-gwh',
                    '/user-billing',
                    '/user-payment-gwh',
                    '/user-list-invoice',
                    '/user-social',
                    '/user-notification',
                    '/user-setting',
                    '/index-account',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link to="" @click="submenu('/index-account')">
                  My Account<span class="submenu-arrow"></span
                ></router-link>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/user-profile-gwh',
                      '/user-billing',
                      '/user-payment-gwh',
                      '/user-list-invoice',
                      '/user-social',
                      '/user-notification',
                      '/user-setting',
                      '/index-account',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/user-profile-gwh' ? 'active' : ''">
                    <router-link to="/user-profile-gwh" class="sub-menu-item"
                      >User Account</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/user-payment-gwh' ? 'active' : ''">
                    <router-link to="/user-payment-gwh" class="sub-menu-item"
                      >Payment</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/user-list-invoice' ? 'active' : ''">
                    <router-link to="/user-list-invoice" class="sub-menu-item"
                      >Invoice</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/user-social' ? 'active' : ''">
                    <router-link to="/user-social" class="sub-menu-item"
                      >Social</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/user-notification' ? 'active' : ''"
                  >
                    <router-link to="/user-notification" class="sub-menu-item"
                      >Notification</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/user-setting' ? 'active' : ''">
                    <router-link to="/user-setting" class="sub-menu-item"
                      >Setting</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/helpcenter',
                    '/helpcenter-faqs',
                    '/helpcenter-guides',
                    '/helpcenter-support',
                    '/index-helpcenter',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link to="" @click="submenu('/index-helpcenter')">
                  Helpcenter<span class="submenu-arrow"></span
                ></router-link>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/helpcenter',
                      '/helpcenter-faqs',
                      '/helpcenter-guides',
                      '/helpcenter-support',
                      '/index-helpcenter',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/helpcenter' ? 'active' : ''">
                    <router-link to="/helpcenter" class="sub-menu-item"
                      >Overview</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/helpcenter-faqs' ? 'active' : ''"
                  >
                    <router-link to="/helpcenter-faqs" class="sub-menu-item"
                      >FAQs</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/helpcenter-guides' ? 'active' : ''"
                  >
                    <router-link to="/helpcenter-guides" class="sub-menu-item"
                      >Guides</router-link
                    >
                  </li>
                  <li
                    :class="
                      activeMenu === '/helpcenter-support' ? 'active' : ''
                    "
                  >
                    <router-link to="/helpcenter-support" class="sub-menu-item"
                      >Support</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/login',
                    '/signup',
                    '/forgot-password',
                    '/lock-screen',
                    '/index-auth',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link to="" @click="submenu('/index-auth')">
                  Auth Pages<span class="submenu-arrow"></span
                ></router-link>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/login',
                      '/signup',
                      '/forgot-password',
                      '/lock-screen',
                      '/index-auth',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/login' ? 'active' : ''">
                    <router-link to="/login" class="sub-menu-item">
                      Login</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/signup' ? 'active' : ''">
                    <router-link to="/signup" class="sub-menu-item">
                      Signup</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/forgot-password' ? 'active' : ''"
                  >
                    <router-link to="/forgot-password" class="sub-menu-item">
                      Forgot Password</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/lock-screen' ? 'active' : ''">
                    <router-link to="/lock-screen" class="sub-menu-item">
                      Lock Screen</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  ['/terms', '/privacy', '/index-terms'].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link to="" @click="submenu('/index-terms')">
                  Utility<span class="submenu-arrow"></span
                ></router-link>
                <ul
                  class="submenu"
                  :class="
                    ['/terms', '/privacy', '/index-terms'].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/terms' ? 'active' : ''">
                    <router-link to="/terms" class="sub-menu-item"
                      >Terms of Services</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/privacy' ? 'active' : ''">
                    <router-link to="/privacy" class="sub-menu-item"
                      >Privacy Policy</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/comingsoon',
                    '/maintenance',
                    '/404',
                    '/index-special',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link to="" @click="submenu('/index-special')">
                  Special<span class="submenu-arrow"></span
                ></router-link>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/comingsoon',
                      '/maintenance',
                      '/404',
                      '/index-special',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/comingsoon' ? 'active' : ''">
                    <router-link to="/comingsoon" class="sub-menu-item">
                      Coming Soon</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/maintenance' ? 'active' : ''">
                    <router-link to="/maintenance" class="sub-menu-item">
                      Maintenance</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/404' ? 'active' : ''">
                    <router-link to="/404" class="sub-menu-item">
                      404!</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          
        </ul>
        <!--end navigation menu-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </nav>
  <!--end header-->
  <!-- End Navbar -->
</template>

<script>
import feather from "feather-icons";
export default {
  props: {
    menuLight: {
      type: String,
      required: true,
    },
    tagLine: {
      type: String,
      required: true,
    },
    navLight: {
      type: Boolean,
      required: true,
    },
    searchMenu: {
      typr: String,
      required: true,
    },
  },
  name: "HelloWorld",
  data() {
    return {
      toggle: false,
      scroll: true,
      sections: document.querySelectorAll("section"),
      navLi: document.querySelectorAll("nav .container .navigation ul li"),
      sectionTop: null,
      activeMenu: "",
      menu: true,
      menuOpen: "",
      searchmenu: false,
      account: false,
    };
  },
  created() {
    this.activeMenu = window.location.pathname;
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    feather.replace();
    window.addEventListener("click", this.close);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handler: function () {
      this.toggle = !this.toggle;
    },

    // close(e) {
    //   if (!this.$el.contains(e.target)) {
    //     this.searchmenu = false;
    //     this.account = false;
    //   }
    // },
    toggleParagraph() {
      this.searchmenu = !this.searchmenu;
    },
    submenu(item) {
      this.menu = !this.menu;
      this.menuOpen = item;
    },
    handleScroll() {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    },
    toggleParagraph3() {
      this.account = !this.account;
    },
  },
};
</script>

<style scoped></style>
