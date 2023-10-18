<template>
    <div>
        <img width="500" class="big" :src="bigImg">
        <div>
            <img width="100" v-for="(image, index) in images" :key="index" :src="image" @click="changeImg(image)">
        </div>
    </div>
</template>

<script>
import img2 from "@/assets/img/2.jpeg";
import img3 from "@/assets/img/3.jpg";
import img4 from "@/assets/img/4.jpeg";
    export default {
        data() {
            return {
                images: { 
                    pic1: require("@/assets/img/1.jpg"),
                    pic2: img2,
                    pic3: img3,
                    pic4: img4,
            }, 
            bigImg: "",
            }
        },
        methods: {
            changeImg(imgPath) {
                this.bigImg = imgPath;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>