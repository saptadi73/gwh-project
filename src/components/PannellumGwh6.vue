<template>
    <div>
        <v-pannellum :src="equirectangularUrl" style="height: 400px; width: 600px"></v-pannellum>
    </div>
</template>

<script>
import imageUrl from '../assets/images/equirectangular/panoramic7.jpg'

export default {

    data() {
        return {
            equirectangularUrl: imageUrl,
        }
    }

}

</script>

<style lang="scss" scoped>

</style>