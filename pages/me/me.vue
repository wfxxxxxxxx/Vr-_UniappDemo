<template>
<view class="content">
		
		<view class="userback">
			<image src="../../static/touxiang.jpg"></image>
			<view class="userName">用户001</view>
		</view>
		<view v-for="(p,index) in name">
			<view class="itlist">
				<image src="../../static/my_active_icon.png" style="width: 80rpx; height: 80rpx; float: left;"></image>
				<view style="text-align: center; line-height: 50rpx; font-size: 50rpx;">{{p.list}}</view>
			</view>	
			<hr/>
		</view>
		
	
	</view>
</template>

<script>
	export default {
		data(){
			return{
				name:[{list:'收藏'},{list:'历史'},{list:'相册'},{list:'设置'}]
			}
		},
	
		onLoad() {
	
		},
		methods: {
		}
	}
</script>

<style>
 .userback {
		height: 216px;
		background-image: url(../../static/beijing.png);
		background-repeat: no-repeat;
		background-size: 100%;
		text-align: center
	}
	.userback image{
			margin: auto;
			border-radius: 51px;
			margin-top: 21%;
			width: 97px;
			height: 97px;
		}
	.userName{
		margin-top: 20rpx;
		font-size: 40rpx;
		color: #000000;
	}
	.itlist{
		margin-top: 20rpx;
		width: 250rpx;
		height: 80rpx;
	}
			
	
</style>
