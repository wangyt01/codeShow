<template>
	<!-- S 公共底部 -->
            <div class="footer c-footer">
                <div class="f-content">
                    <span>技术支持</span><a href="#"></a>
                </div>
            </div>
            <!-- E 公共底部-->
</template>

<script>
export default{
	name:'c-footer',
	data(){
		return {
			// header:"这是头部"
		}
	}
}
</script>

<style lang="scss">
/*! ************
公共的底部
************* */
.c-footer {
    width: 100%;
    position: fixed;
    height: 40px;
    left: 0;
    bottom: 0;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    background: #477FB8;

    .f-content {
        text-align: center;

        span {
            margin-right: 20px;
        }

        a {
            color: #fff;
            text-decoration: none;
        }

    }

}
</style>