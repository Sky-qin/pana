	<template>
		<div id="hotDetail">
			<div class="fixed">
				<div class="search">
					<input type="text" :value="listname"/>
					<span>搜索</span>
				</div>
				<ul>
					<router-link to='/hotdetail/default' tag="li" activeClass="active1">
						默认
					</router-link>
					<router-link to='/hotdetail/rank' tag="li" activeClass="active1">
						价位最低
					</router-link>
					<router-link to='/hotdetail/sale' tag="li" activeClass="active1">
						销量最高
					</router-link>

				</ul>
			</div>
			
			<router-view></router-view>
		</div>
	</template>

	<script type="text/javascript">
		import Api from './api'
		export default{
			data(){
				return{

				}	
			},
			computed:{
				listname(){
					return this.$store.state.listhotword
				}
			},
			mounted(){

			},
			methods:{

			}
		}

	</script>

	<style lang="scss" scoped>
		$ui-width: 640px;
		 @function px2rem($px) {
		     @return $px/$ui-width*6.4rem;
		 }
		 #hotDetail{
		 	
		 	
		 	.fixed{
		 		padding-top:px2rem(96px);
		 		position:fixed;
		 		top:0px;
		 		background-color: #fff;
		 		width:100%;
		 		.search{
		 		height: px2rem(96px);
		 		overflow: hidden;
		 		input{
		 			float:left;
		 			height:px2rem(46px);
		 			width:px2rem(480px);
		 			margin-left:10px;
		 			margin-top:px2rem(25px);
		 			border-radius: 8px;
		 			background: #eeeeee;
		 			text-indent: 2em;
		 			background-image:url(../assets/search.png);
		 			background-repeat: no-repeat;
		 			background-position: 5px center;
		 			background-size: px2rem(33px);
		 			outline: none;
		 			}
		 		span{
		 			float:left;
		 			display: inline-block;
		 			height:px2rem(96px);
		 			line-height: px2rem(96px);
		 			font-size: 12px;
		 			color: #877a73;
		 			margin-left:10px;
		 			}
			 	}
			 	ul{
			 		display:flex;
			 		li{
			 			width: 33.3%;
			 			font-size: 12px;
			 			color: #43240c;
			 			text-align: center;
			 			height:px2rem(80px);
			 			line-height: px2rem(80px);
			 			}
			 		}
			 		.active1{
		 				color:#fa585a;
					 }
		 		}
		 	
		 	 
		 }

		
	</style>