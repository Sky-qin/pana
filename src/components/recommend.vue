	<template>
		<div id="recommend">
			<div id="partOne">
				<ul>
					<router-link to="/new" tag="li" v-for="(item,index) in grids" :key="index">
						<div class="left">
							<span>{{item.title}}</span>
							<span>{{item.text}}</span>
						</div>
						<img :src="item.imageUrl"/>
					</router-link>
				</ul>
			</div>
			<p>{{this.time}}</p>
			<div class="partTwo">
				<ul 
					v-infinite-scroll="loadMore"
					infinite-scroll-immediate-check="true"
  					infinite-scroll-disabled="loading"
  					infinite-scroll-distance="0">
					<li v-for="(item,index) in looplist" :key="index" @click="clickToDetail(item.id,item.type,item.url)">
						<img :src="item.image" :class="item.type==2?'big':''">
						<div class="about" v-if="item.type==2?false:true">
							<p>
								<span :class="item.platform==1?'taobao':'tmall'">				<img src="../assets/baoyou.png"/>
								</span>
								{{item.title}}	
							</p>
							<div>
								￥<span>{{item.price}}</span>
								<span>￥{{item.originPrice}}</span>
								<span>{{item.couponValue}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<img class="toTop" src="../assets/top.png" @click="toTop"/>
		</div>
	</template>

	<script type="text/javascript">
		import router from '../router';
		import { Indicator } from 'mint-ui';
		import { InfiniteScroll } from 'mint-ui';
		import Vue from 'vue';

		import Api from './api'

		Vue.use(InfiniteScroll);
		export default{
			data(){
				return{
					count:0,
					grids:[],
					looplist:[],
					time:'',
					datalist:[],
					heightTop:'',
				}
			},
			mounted(){
				Indicator.open();

				axios.get(Api.url + "/api/tab/1?start=0").then((res)=>{
					console.log(res.data.data.grids)
					this.grids = res.data.data.grids
					this.looplist = res.data.data.items.list
					this.time = res.data.data.note
					Indicator.close();
				})
			},
			methods:{
				
				 toTop(){
				 	 var timer = setInterval(function(){
						if (document.body.scrollTop<=0) {
							clearInterval(timer)
						};
						document.body.scrollTop-=200
					}, 50)
				 },
				clickToDetail(id,type,url){
					console.log('aaa')
					// router.push(`/detail/${id}`)
					router.push({name:"detail",params:{ productId: id ,productType:type,productUrl:url}})
				},
				loadMore(){
					this.count+=20;
					console.log('ssss')
					axios.get(Api.url + `/api/main/recommend?count=${this.count}`).then((res)=>{
					console.log(res.data.data.grids)
					this.grids = res.data.data.grids
					this.time = res.data.data.note
					this.looplist = [...this.looplist,...res.data.data.items.list]
					
					})
				}
			}
		}
	</script>

	<style lang="scss" scoped>
		$ui-width: 640px;
		 @function px2rem($px) {
		     @return $px/$ui-width*6.4rem;
		 }

		 #recommend{
		 	background: #f5f5f5;
		 	padding-top:px2rem(96px);
		 	overflow: hidden;
		 	#partOne{
		 		margin-top: 15px;
		 		ul{
		 			li{
		 				float:left;
		 				overflow: hidden;
		 				width:px2rem(318px);
		 				background: #fff;
		 				margin-top:1px;
		 				.left{
		 					width:px2rem(144px);
		 					float:left;
		 					padding: 10px;
		 					padding-right: 0px;
		 					span:nth-of-type(1){
		 						font-size: 16px;
		 						color:#fa485f;
		 						float:left;
		 					}
		 					span:nth-of-type(2){
		 						font-size: 14px;
		 						color: #877a73;
		 						float:left;
		 					}
		 				}
		 				img{
		 					width:px2rem(134px);
		 					margin-top:10px;
		 				}
		 			}
		 			li:nth-child(even){
		 				margin-left: 1px;
		 			}
		 			
		 		}
		 	}
		 	p{
		 		font-size: 12px;
		 		text-align: center;
		 		line-height: px2rem(80px);
		 	}
		 	.partTwo{
		 		ul{
		 			overflow:hidden;
		 			li:nth-child(odd){
		 				float:left;
		 			}
		 			li:nth-child(even){
		 				float:right;
		 			}
		 			li{
		 				width:px2rem(312px);
		 				height:px2rem(556px);
		 				background: #fff;
		 				overflow:hidden;
		 				margin-top:10px;
		 				img{
		 					width:px2rem(312px);
		 				}
		 				.about{
		 					margin-top:-10px;
		 					padding:10px;
		 					overflow:hidden;
		 					p{	
		 						line-height:px2rem(40px);
		 						overflow:hidden;
		 						height:px2rem(80px);
		 						span:nth-of-type(1){
		 							float:left;	
		 							display: inline-block;
		 							width:px2rem(75px);
		 							height:px2rem(26px);
		 							position: relative;
		 							top:5px;
		 							img{
		 								height:px2rem(26px);
		 								width:px2rem(45px);
		 								position:absolute;
		 								right:0px;
		 							}
		 						}
		 					}
		 					div{
		 						display:flex;
		 						align-items:flex-end;
		 						margin-top:20px;
		 						font-size: 12px;
		 						span{
		 							width:33%;
		 						}
		 						span:nth-of-type(1){
		 							font-size: 20px;
		 							color:#fa585a;
		 						}
		 						span:nth-of-type(2){
		 							text-decoration: line-through;
		 							color: #877a73;
		 						}
		 						span:nth-of-type(3){
		 							display:inline-block;
		 							width:px2rem(90px);
		 							height:px2rem(34px);
		 							background-image: url('../assets/coupon-bg.png');
		 							background-size: px2rem(90px) px2rem(34px);
		 							text-align: center;
		 							color:#fa585a;
		 						}
		 					}
		 				}
		 			}
		 		}
		 	}
		 	.toTop{
		 		position:fixed;
		 		right:20px;
		 		bottom: px2rem(200px);
		 		width:px2rem(92px);
		 	}
		 }
		 .big{
		 	height:px2rem(556px);
		 }
		 .taobao{
		 	background-image:url('../assets/taobao.png');
		 	background-repeat: no-repeat;
		 	background-size: px2rem(26px);
		 }
		 .tmall{
		 	background-image:url('../assets/tmall.png');
		 	background-repeat: no-repeat;
		 	background-size: px2rem(26px);
		 }
		
	</style>