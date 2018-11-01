<template>
	<header>
		<div class="c-header">
			<div class="h-content">
			{{header}}
			</div>
		</div>
	</header>
</template>

<script>
export default{
	name:'c-header',
	data(){
		return {
			header:"这是头部"
		}
	}
}
</script>

<style lang="scss">
	.c-header{
		height: 80px;
		line-height: 80px;
		background: #ddd;
		text-align: center;
		color:#000;
		.h-content{
			width:1000px;
			margin:0 auto;
		}

	}
</style>