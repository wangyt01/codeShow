<template>
    <div class="c-top-nav">
        <ul>
            <li v-for="el in data">
                <a :href="el.url">{{el.name}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
	name:"c-top-nav",
    data() {
        return {
            data: [{
                name: "首页",
                url: "./index.html"
            }, {
                name: "关于",
                url: "./about.html"
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
$li-width:10%;
    .c-top-nav {
        width: 1000px;
        margin: 0 auto;
        overflow:hidden;
        ul {

            li {
                float:left;
                 height: 40px;
                    line-height: 40px;
                    width:$li-width;

                a {
        display:block;
                }
            }
        }
    }
</style>