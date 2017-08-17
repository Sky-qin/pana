	<template>
		<div id="detail">
			<img class="backimage" src="../assets/back-home.4b95b45.png" />
			<div class="typeOne" v-show="picOne">
				<img class="picOne" :src="this.image" />
				<p>
					<span :class="this.platform==1?'taobao':'tmall'">				
						<img src="../assets/baoyou.png"/>
					</span>
					{{this.title}}
				</p>
				<p>
					<img src="../assets/quan.png"/>	
					￥<span>{{this.price}}</span>
				</p>
				<p>
					<span>{{this.originPrice}}</span>
					<span>月销量：{{this.saleNum}}</span>
				</p>
				<div class="allPic">
					<p>——淘宝图文详情——</p>
					<div class="pic" v-for="(item,index) in productImage" :key="index">
						<img :src="item.url" />
					</div>
				</div>
			</div>
			<div class="typeTwo" v-show="picTwo">
				<div class="topPart">
					<img :src="this.image"/>
					<p class="buyway">{{this.description}}</p>
				</div>
				<ul>
					<li v-for="(item,index) in looplist" :key="index" @click="clickToDetail(item.id,item.type,item.url)">
						<img :src="item.image"/>
						<p>
							<span class="taobao">				
								<img src="../assets/baoyou.png"/>
							</span>
							{{item.title}}	
						</p>
						<span>￥<strong>{{item.price}}</strong></span>
					</li>
				</ul>
			</div>
		</div>
	</template>

	<script type="text/javascript">
	import { Indicator } from 'mint-ui';
	import router from '../router';
	import Api from './api';
		export default{
			data(){
				return{
					count:0,
					image:'',
					title:'',
					picTwo:false,
					picOne:false,
					platform:'',
					price:'',
					originPrice:'',
					saleNum:'',
					productImage:[],
					description:'',
					looplist:[],
				}
			},
			mounted(){
				if (this.$route.params.productType==1) {
					this.picOne = true
					this.picTwo = false
					Indicator.open();
					axios.get(Api.url + `/api/detail?id=${this.$route.params.productId}`).then((res)=>{
					console.log(res.data)
						this.image = res.data.data.detail.image
						this.title =res.data.data.detail.title
						this.platform = res.data.data.detail.platform
						this.price = res.data.data.detail.price
						this.originPrice = res.data.data.detail.originPrice
						this.saleNum = res.data.data.detail.saleNum
						this.productImage = res.data.data.detail.photo
						console.log(this.originPrice)
						Indicator.close();
					})
				};
				if (this.$route.params.productType==2) {
					this.picTwo = true
					this.picOne = false
					Indicator.open();
					var str = this.$route.params.productUrl
					console.log(str.substring(str.indexOf('=')+1,str.length))
					var data = str.substring(str.indexOf('=')+1,str.length)

					axios.get(Api.url + `/api/column/${data}`).then((res)=>{
						console.log(res.data)
						this.image = res.data.data.cover
						this.description = res.data.data.description
					})

					axios.get(Api.url + `/api/column/${data}/items?start=${this.count}`).then((res)=>{
						console.log(res.data)
						this.looplist = res.data.data.list
						Indicator.close();
					})
				};
			},
			methods:{
				clickToDetail(id,type,url){
					console.log('aaa')
					router.push({name:"detail",params:{ productId: id ,productType:type,productUrl:url}})
					console.log(this.$route.params.productType)
					if (this.$route.params.productType==1) {
						console.log('bbb')
					this.picOne = true
					this.picTwo = false
					Indicator.open();
					axios.get(Api.url + `/api/detail?id=${this.$route.params.productId}&normal=1`).then((res)=>{
					console.log(res.data)
						this.image = res.data.data.detail.image
						this.title =res.data.data.detail.title
						this.platform = res.data.data.detail.platform
						this.price = res.data.data.detail.price
						this.originPrice = res.data.data.detail.originPrice
						this.saleNum = res.data.data.detail.saleNum
						this.productImage = res.data.data.detail.photo
						console.log(this.originPrice)
						Indicator.close();
					})
				};
				},
			}
		}
	</script>

	<style lang="scss" scoped>
		$ui-width: 640px;
		 @function px2rem($px) {
		     @return $px/$ui-width*6.4rem;
		 }
		#detail{
			padding-top:px2rem(96px);
			.backimage{
				width:px2rem(92px);
				position:fixed;
				bottom:px2rem(150px);
				right:px2rem(40px);
			}
			.typeOne{
				.picOne{
				width: 100%;	
				}
				p:nth-of-type(1){	
					padding:0 10px;
					line-height:px2rem(40px);
					overflow:hidden;
					font-size: 14px;
					color: #43240c;
					span:nth-of-type(1){
						float:left;	
						display: inline-block;
						width:px2rem(90px);
						height:px2rem(32px);
						position: relative;
						margin-right: 5px;
						img{
							height:px2rem(32px);
							width:px2rem(45px);
							position:absolute;
							right:0px;
						}
					}
				}
				p:nth-of-type(2){
					font-size: 16px;
					color: #fa585a;
					padding:0 10px;
					img{
						height:px2rem(35px);
					}
					span{
						font-size:30px;
						color: #fa585a;
					}
				}
				p:nth-of-type(3){
					font-size: 12px;
					color: #b1a9a5;
					padding:0 10px;
					overflow: hidden;
					span:nth-of-type(1){
						float: left;
					}
					span:nth-of-type(2){
						float:right;
					}
				}
				.allPic{
					background-color: #fff;
					padding-bottom:px2rem(100px);
					p{
						font-size: 14px;
						color: #b1a9a5;
						text-align: center;
						height:px2rem(80px);
						line-height: px2rem(80px);
						background-color: #f5f5f5;
					}
					.pic{
						img{
							width:100%;
						}
					}
				}
			}
			.typeTwo{
				.topPart{
					img{
						width:100%;
					}
					p{
						padding:0 20px;
						background: url(../assets/rect.4efd933.png) no-repeat 5px 5px;
						background-size: px2rem(26px);
						font-size: 12px;
						color: #877a73;
					}
				}
				ul{
					background-color: #f5f5f5;
		 			overflow: hidden;
		 			li:nth-child(odd){
		 				float: left;
		 			}
		 			li:nth-child(even){
		 				float: right;
		 			}
		 			li{
		 				width:px2rem(312px);
		 				height:px2rem(556px);
		 				background: #fff;
		 				margin-top:10px;
		 				img{	
		 					width:100%;
		 				}
		 				p{	
		 					line-height:px2rem(40px);
		 					overflow:hidden;
		 					height:px2rem(80px);
		 					color:#877a73;
		 					font-size: 12px;
		 					padding:0 10px;
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
		 				span{
		 					font-size: 14px;
		 					color:#f60;
		 					strong{
		 						font-size: 20px;
		 					}
		 				}
		 			}
		 		}
			}
			
		}

		 .taobao{
		 	background-image:url('../assets/taobao.png');
		 	background-repeat: no-repeat;
		 	background-size: px2rem(32px);
		 }
		 .tmall{
		 	background-image:url('../assets/tmall.png');
		 	background-repeat: no-repeat;
		 	background-size: px2rem(32px);
		 }
	</style>