	<template>
		<div id="sale">
			<ul>
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
	</template>

	<script type="text/javascript">
		import { Indicator } from 'mint-ui';
		import router from '../router';
		import Api from './api';
		export default{
			data(){
				return{
					looplist:[],
				}
			},
			mounted(){
				Indicator.open();
				axios.get(Api.url + `/api/search?word=${this.$store.state.listhotword}&start=0&sort=2`).then((res)=>{
					console.log(res.data)
					this.looplist = res.data.data.list
					Indicator.close();
				})
			},
			methods:{
				clickToDetail(id,type,url){
					console.log('aaa')
					// router.push(`/detail/${id}`)
					router.push({name:"detail",params:{ productId: id ,productType:type,productUrl:url}})
				},
			}
		}
	</script>

	<style lang="scss" scoped>
		$ui-width: 640px;
		 @function px2rem($px) {
		     @return $px/$ui-width*6.4rem;
		 }
		#sale{
			margin-top:px2rem(278px);
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