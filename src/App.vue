<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activeMenu:''
    }
  },
  components: {
  },
  mounted() {
    this.scrollToTop()
    
  },
  created(){
    this.activeMenu = window.location.pathname;
  },
  methods: {
    scrollToTop() {
            window.scrollTo(0,0);
        }
  },
}
</script>

<style></style>