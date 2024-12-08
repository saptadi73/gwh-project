import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/pages/index/page-four.vue'),
  },
  {
    path: "/index-two",
    name: "index-two",
    component: () => import('@/pages/index/index-two.vue'),
  },
  {
    path: "/index-three",
    name: "index-three",
    component: () => import('@/pages/index/index-three.vue'),
  },
  {
    path: "/index-four",
    name: "index-four",
    component: () => import('@/pages/index/index-four.vue'),
  },
  {
    path: "/index-five",
    name: "index-five",
    component: () => import('@/pages/index/index-five.vue'),
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import('@/pages/innerpages/listing/tour-grid/grid.vue'),
  },
  {
    path: "/grid-right-sidebar",
    name: "grid-right-sidebar",
    component: () => import('@/pages/innerpages/listing/tour-grid/grid-right-sidebar.vue'),
  },
  {
    path: "/grid-left-sidebar",
    name: "grid-left-sidebar",
    component: () => import('@/pages/innerpages/listing/tour-grid/grid-left-sidebar.vue'),
  },
  {
    path: "/list",
    name: "list",
    component: () => import('@/pages/innerpages/listing/tour-list/list.vue'),
  },
  {
    path: "/list-left-sidebar",
    name: "list-left-sidebar",
    component: () => import('@/pages/innerpages/listing/tour-list/list-left-sidebar.vue'),
  },
  {
    path: "/list-right-sidebar",
    name: "list-right-sidebar",
    component: () => import('@/pages/innerpages/listing/tour-list/list-right-sidebar.vue'),
  },
  {
    path: "/tour-detail-one",
    name: "tour-detail-one",
    component: () => import('@/pages/innerpages/listing/tour-detail/tour-detail-one.vue'),
  },
  {
    path: "/tour-detail-two",
    name: "tour-detail-two",
    component: () => import('@/pages/innerpages/listing/tour-detail/tour-detail-two.vue'),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import('@/pages/innerpages/aboutus.vue'),
  },
  {
    path: "/user-profile",
    name: "user-profile",
    component: () => import('@/pages/innerpages/my-account/user-account.vue'),
  },
  {
    path: "/user-payment",
    name: "user-payment",
    component: () => import('@/pages/innerpages/my-account/user-payment.vue'),
  },
  {
    path: "/user-invoice",
    name: "user-invoice",
    component: () => import('@/pages/innerpages/my-account/user-invoice.vue'),
  },
  {
    path: "/user-social",
    name: "user-social",
    component: () => import('@/pages/innerpages/my-account/user-social.vue'),
  },
  {
    path: "/user-notification",
    name: "user-notification",
    component: () => import('@/pages/innerpages/my-account/user-notification.vue'),
  },
  {
    path: "/user-setting",
    name: "user-setting",
    component: () => import('@/pages/innerpages/my-account/user-setting.vue'),
  },
  {
    path: "/lock-screen",
    name: "lock-screen",
    component: () => import('@/pages/innerpages/auth-pages/lock-screen.vue'),
  },
  {
    path: "/helpcenter",
    name: "helpcenter",
    component: () => import('@/pages/innerpages/helpcenter/helpcenter.vue'),
  },
  {
    path: "/helpcenter-faqs",
    name: "helpcenter-faqs",
    component: () => import('@/pages/innerpages/helpcenter/helpcenter-faqs.vue'),
  },
  {
    path: "/helpcenter-guides",
    name: "helpcenter-guides",
    component: () => import('@/pages/innerpages/helpcenter/helpcenter-guides.vue'),
  },
  {
    path: "/helpcenter-support",
    name: "helpcenter-support",
    component: () => import('@/pages/innerpages/helpcenter/helpcenter-support.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/pages/innerpages/auth-pages/login.vue'),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('@/pages/innerpages/auth-pages/signup.vue'),
  },
  {
    path: "/signup-success",
    name: "signup-success",
    component: () => import('@/pages/innerpages/auth-pages/signup-success.vue'),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import('@/pages/innerpages/auth-pages/forgot-password.vue'),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import('@/pages/innerpages/utility/terms.vue'),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import('@/pages/innerpages/utility/privacy.vue'),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import('@/pages/innerpages/contact.vue'),
  },
  {
    path: "/comingsoon",
    name: "comingsoon",
    component: () => import('@/pages/innerpages/special-pages/comingsoon.vue'),
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: () => import('@/pages/innerpages/special-pages/maintenance.vue'),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import('@/pages/innerpages/blog/blogs.vue'),
  },
  {
    path: "/blog-standard",
    name: "blog-standard",
    component: () => import('@/pages/innerpages/blog/blog-standard.vue'),
  },
  {
    path: "/blog-detail",
    name: "blog-detail",
    component: () => import('@/pages/innerpages/blog/blog-detail.vue'),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import('@/pages/innerpages/special-pages/404.vue'),
  },
  {
    path: "/page-one",
    name: "page-one",
    component: () => import('@/pages/index/PageOne.vue'),
  },
  {
    path: "/page-three",
    name: "page-three",
    component: () => import('@/pages/index/PageThree.vue'),
  },
  {
    path: "/list-apartement",
    name: "list-apartement",
    component: () => import('@/components/ListApartemen.vue'),
  },
  {
    path: '/apartement-detail-one',
    name: 'apartement-detail-one',
    component: () => import('@/pages/innerpages/listing/tour-detail/ApartementDetailOne.vue')
  },
  {
    path: '/list-kost',
    name: 'list-kost-sidebar',
    component: () => import('@/pages/innerpages/listing/tour-list/ListKosSidebar.vue')
  },
  {
    path: '/kos-detail-two',
    name: 'kos-detail-two',
    component: () => import('@/pages/innerpages/listing/tour-detail/KosDetailTwo.vue')
  },
 {
  path: '/user-profile-gwh',
  name: 'user-profile-gwh',
  component: () => import('@/pages/innerpages/my-account/UserProfileGwh.vue')
 },
 {
  path: '/user-payment-gwh',
  name: 'user-payment-gwh',
  component: () => import('@/pages/innerpages/my-account/UserPaymentGwh.vue')
 },
 {
  path: '/user-invoice-gwh',
  name: 'user-invoice-gwh',
  component: () => import('@/pages/innerpages/my-account/UserInvoiceGwh.vue')
 },
 {
  path: '/app-pannellum',
  name: 'app-pannellum',
  component: () => import('@/components/AppPannellum.vue')
 },
 {
  path: '/vue-pannellum',
  name: 'vue-pannellum',
  component: () => import('@/components/vue-pannellum.vue')
 },
 {
  path: '/pannellum-gwh',
  name: 'pannellum-gwh',
  component: () => import('@/components/PannellumGwh.vue')
 },
 {
  path: '/gambar-url',
  name: 'gambar-url',
  component: () => import('@/components/GambarUrl.vue')
 },
 {
  path: '/user-registration',
  name: 'user-registration',
  component: () => import('@/pages/innerpages/my-account/UserRegistration.vue')
 },
 {
  path: '/user-list-invoice',
  name: 'user-list-invoice',
  component: () => import('@/pages/innerpages/my-account/UserListInvoice.vue')
 },
 {
  path: '/grid-ruko',
  name: 'grid-ruko',
  component: () => import('@/pages/innerpages/listing/tour-grid/GridRuko.vue')
 },
 {
  path: '/list-kantor',
  name: 'list-kantor',
  component: () => import('@/components/ListKantor.vue')
 },
 {
  path: '/grid-office',
  name: '/grid-office',
  component: () => import('@/pages/innerpages/listing/tour-grid/grid-right-sidebar-office.vue')
 },
 {
  path: '/list-rumah',
  name: '/list-rumah',
  component: () => import('@/pages/innerpages/listing/tour-list/list-rumah.vue')
 },
 {
  path: '/list-villa',
  name: '/list-villa',
  component: () => import('@/components/list-villa.vue')
 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;