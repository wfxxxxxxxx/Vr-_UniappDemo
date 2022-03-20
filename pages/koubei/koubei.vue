<template>
	<view>
	<view class="hot_goods">
		<view class="tit">商品列表</view>
		<view class="good_list" v-for="item in data" >
			<view class="good_item">
				<image :src="item.pic"></image>
				<view class="price">
					<text>{{item.costPrice}}</text>
				</view>
				<view class="name">{{item.commodityName}}</view>
			</view>
		
			
		</view>
	</view>
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data :[]
				
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData(){
				const res =await this.$myRequest({
					url:'http://smartcity.lenovoedu.com/interface/Commodity/search?userId=NzAz',
				})
				console.log(res)
				this.data=res.data.data
			}
			
		}
	}
</script>

<style>
	.hot_goods{
		background-color: #eee;
		margin-top: 10rpx;
		
		
	}
	.tit{
		height: 50px;
		line-height: 50px;
		color: #b50e03;
		text-align: center;
		background: #fff;
		margin: 10rpx 0;
		letter-spacing: 20px;
		
	}
	
	
	.good_list{
	padding: o 15rpx;	
	
	flex-wrap: wrap;
	justify-content: space-between;
	}
	.good_item{
		background: #fff;
		width: 355rpx;
		margin: 1orpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		
	}
	.price{
		text-align: center;
		color:#b50e03 ;
		font-size: 30rpx;
	}
	.name{
		width: 100%;
		text-align: center;
		font-size: 20rpx;
		line-height: 50rpx;
		padding-top: 10rpx;
	}
	.good_item.image{
			 width: 20%;
			 height: 15rpx;
		
			margin: auto;	
		
	}
	
</style>
