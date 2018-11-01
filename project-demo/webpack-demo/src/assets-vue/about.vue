<template>
    <div class="app-container">
        <Cheader></Cheader>
        <Ctopnav></Ctopnav>
        <div class="middle-content">
            <h3>{{msg}}</h3>
        </div>
        <Cfooter></Cfooter>
    </div>
</template>
<script>
import Cheader from './components/header.vue';
import Ctopnav from './components/c-nav.vue';
import Cfooter from './components/footer.vue';
export default {
    components: {
        Cheader,
        Ctopnav,
        Cfooter
    },
    data() {
        return {
            msg: "this is about page",

        }

    }
}
</script>
<style lang="scss" scoped>
.middle-content {
    width:1000px;
    margin:0 auto;
}
</style>
