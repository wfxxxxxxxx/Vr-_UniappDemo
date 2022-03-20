<template>
	<view>
	<view class="sousuo" :style="{'margin-left': isShowFocus?'5%':'','width':width}">
		<view class="sousuo_ico"><text class="iconfont icon-sousuo"></text></view>
		<view class="sousuo_input"><input type="text" @focus="onFocusInput" @blur="onBlurInput"
		  placeholder-class="sousuo_placeholder"
			v-model="inpuval"	:placeholder="placeholder" /></view>
	    <view class="sousuo_cances" @click="inputCances" v-if="isShowFocus">取消</view>
	</view>
	<view class="banner">
		<swiper indicator-dots circular interval=3000 autoplay>
			<swiper-item><image src="../../static/beijing.png"></image> </swiper-item>
			<swiper-item><image src="../../static/beijing.png"></image> </swiper-item>
			<swiper-item><image src="../../static/beijing.png"></image> </swiper-item>
			<swiper-item><image src="../../static/beijing.png"></image> </swiper-item>
		</swiper>
	</view>
	<view class="hot_list">
		<view class="tit">热门推荐</view>
		<view class="goo_list">
			<view class="good_item">
				<image src="../../static/fenmian.png"></image>
				<view class="name">uni-app之video视频组件</view>
			</view>
			<view class="good_item">
				<image src="../../static/fenmian.png"></image>
				<view class="name">uni-app之video视频组件</view>
			</view>
			<view class="good_item">
				<image src="../../static/fenmian.png"></image>
				<view class="name">uni-app之video视频组件</view>
			</view>
			<view class="good_item">
				<image src="../../static/fenmian.png"></image>
				<view class="name">uni-app之video视频组件</view>
			</view>
			<view class="good_item">
				<image src="../../static/fenmian.png"></image>
				<view class="name">uni-app之video视频组件</view>
			</view>
			<view class="good_item">
				<image src="../../static/fenmian.png"></image>
				<view class="name">uni-app之video视频组件</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name:"searInput",
		props:{
			placeholder:{
				type:String,
				default:"请输入"
			}
		},
		data() {
			return {
				isShowFocus:false,
				inpuval:'',
				width:"90%"
			};
		},
		methods:{
			onFocusInput: function(event) {
				//console.log('输入框聚焦时触发:',event)
				   // this.inputValue = event.target.value
				   this.isShowFocus=true;
				   this.width="80%";
				   this.$emit("focus")
			   },
			onBlurInput:function(event){
				//console.log("输入框失去焦点时触发:",event); 
				this.$emit("blur")
				 
			},
			inputCances:function(){
				this.isShowFocus=false;
				this.inpuval='';
				this.width="90%"
				this.$emit("cancel");
			}
		}
		
	}
</script>

<style lang="scss">
.sousuo {
		display: flex; 
		align-content: center;
		align-items: center;
		background-color: #E5E5E5;
		padding: 5px 0;
		margin-left: 5%;
		margin-top: 10px;
		margin-bottom: 10px; 
		border-radius: 5px;
		.sousuo_ico {
			width: 10%;
			text-align: center;
		}

		.sousuo_input {
			width: 90%;

			input {
				font-size: 10px;
				letter-spacing: 1px;
			}

			.sousuo_placeholder {
				font-size: 10px;
				color: #7E7E7E;
			}
		}
		.sousuo_cances{
			position: absolute;
			width: 93%;
			text-align: right;
			font-size: 15px;
			color: #666;
			 
		}
	}
	.banner{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
	.hot_list{
		background: #eee;
		overflow: hidden;
	}
	.tit{
		height: 50px;
		line-height: 50px;
		color: #000;
		text-align: center;
		letter-spacing: 20rpx;
		background: #fff;
		margin: 10rpx 0;
	}
	.goo_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 10rpx 0;
	}
	.good_item{
		background: #fff;
		width: 355rpx;
		margin: 10rpx 0;
		box-sizing: border-box;
		image{
			width: 80%;
			height: 150rpx;
			align-items: center;
			display: block;
			margin: 0 auto;
		}
		
	}
	.name{
		font-size: 32rpx;
		line-height: 50rpx;
		padding-bottom: 15rpx;
		padding-top: 10rpx;
	}
	
</style>
