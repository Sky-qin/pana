	<template>
		<div id="beauty">
			<div class="partOne">
				<p class="titleOne">{{categoriesTitle}}</p>
				<ul>
					<router-link to="/show" tag="li" v-for="(item,index) in categories"
					 :key="index">
						<img :src="item.imageUrl"/>
						<p>{{item.title}}</p>
					</router-link>
				</ul>
			</div>
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
		import Api from './api';
		Vue.use(InfiniteScroll);
		export default{
			data(){
				return{
					count:0,
					categories:[],
					categoriesTitle:'',
					looplist:[],
				}
			},
			mounted(){
				Indicator.open();
				axios.get(Api.url + "/api/tab/3?start=0").then((res)=>{
					console.log(res.data)
					this.categoriesTitle = res.data.data.categoriesTitle
					this.categories = res.data.data.categories
					this.looplist = res.data.data.items.list
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
					axios.get(Api.url + `/api/main/beauty?start=${this.count}`).then((res)=>{
						console.log(res.data)
						this.categoriesTitle = res.data.data.categoriesTitle
						this.categories = res.data.data.categories
						this.looplist = [...this.looplist,...res.data.data.items.list]
					})
				},

			}
		}
	</script>

	<style lang="scss" scoped>
		$ui-width: 640px;
		 @function px2rem($px) {
		     @return $px/$ui-width*6.4rem;
		 }
		 #beauty{
		 	margin-top: px2rem(96px);
		 	.partOne{
		 		color:#877a73;
		 		.titleOne{
		 			text-align: center;
		 			font-size: 12px;
		 			height: px2rem(80px);
		 			line-height: px2rem(80px);
		 			background: #fff;

		 		}
		 		ul{
		 			display: flex;
		 			flex-wrap:wrap;
		 			padding-bottom: 20px;
		 			background: #fff;
		 			li{
		 				width:px2rem(160px);
		 				height:px2rem(130px);
		 				display:table;
		 				text-align: center;
		 				img{
		 					
		 					width:px2rem(92px);
		 				}
		 				
		 				p{
		 					text-align: center;
		 					font-size: 12px;
		 				}
		 			}
		 		}
		 	}
		 	.partTwo{
		 		background-color: #f5f5f5;
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
		 						color:#877a73;
		 						font-size: 12px;
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
		 							width:50%;
		 						}
		 						span:nth-of-type(1){
		 							font-size: 20px;
		 							color:#fa585a;
		 						}
		 						
		 						span:nth-of-type(2){
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