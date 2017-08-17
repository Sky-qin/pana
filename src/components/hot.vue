	<template>
		<div id="woman">
			<header class="header">
		     	<span @click="handleClick">关闭</span>
		     	<input type="text" placeholder="搜索商品，发现更多优选"/>
		    </header>
		    <div class="listOne">
		    	<p>商品分类</p>
		    	<ul>
		    		<router-link to="/show" tag="li" v-for="(item,index) in datalist" :key="index">
		    			{{item.cname}}
		    		</router-link>
		    	</ul>
		    </div>
		    <div class="listTwo">
		    	<p>热门搜索</p>
		    	<ul>
		    		<li v-for="(item,index) in looplist" :key="index" @click="clickHotDetail(item)">
		    			{{item}}
		    		</li>
		    	</ul>
		    </div>
		</div>
	</template>

	<script type="text/javascript">
		import router from '../router';
		import Api from './api'
		export default{
			data(){
				return{
					datalist:[],
					looplist:[],
				}
			},
			mounted(){
				axios.get(Api.url + `/api/category`).then((res)=>{
					console.log(res.data)
					this.datalist = res.data.data.list
				})
				axios.get(Api.url + `/api/hotWords`).then((res)=>{
					this.looplist = res.data.data
				})
			},
			methods:{
				handleClick(){
					history.back()
				},
				clickHotDetail(name){
					this.$store.dispatch("UPDATA_NAME",name)
					router.push(`/hotdetail`); 
				}
			}
		}
	</script>

	<style lang="scss" scoped>
		$ui-width: 640px;
		 @function px2rem($px) {
		     @return $px/$ui-width*6.4rem;
		 }
		 #woman{
		 	margin-top: px2rem(96px);
		 	 .header{
			    width:100%;
			    position:fixed;
			    top:0px;
			    overflow:hidden;
			    z-index:11;
			    background: #fff;
			    box-shadow: 0 4px 4px #ccc;
			    height:px2rem(96px);
			    line-height: px2rem(96px);
			    span{
			    	display: block;
			    	height:px2rem(96px);
			    	font-size: 14px;
			    	color: #877a73;
			    	margin-left: 20px;
			    	float:left;
			    }
			    input{
			    	margin-left: 10px;
			    	margin-top:10px;
			    	float: left;
			    	width:px2rem(500px);
			    	height:px2rem(50px);
			    	border-radius: 5px;
			    	outline: none;
			    	background-color: #eee;
			    	background-image: url(../assets/search.png);
			    	background-size: px2rem(30px) px2rem(30px);
			    	background-repeat: no-repeat;
			    	background-position: 5px center;
			    	text-indent: 2em;
			    }
			 }
			 .listOne{
			 	padding-top: 20px;
			 	overflow:hidden;
			 	p{
			 		font-size: 16px;
			 		color:#877a73;
			 		text-indent: 2em;
			 	}
			 	ul{
			 		padding-top: 10px;
			 		li{
			 			width:px2rem(160px);
			 			font-size: 14px;
			 			color: #43240c;
			 			text-align: center;
			 			float: left;
			 			height:px2rem(80px);
			 			line-height: px2rem(80px);
			 		}
			 	}
			 }
			 .listTwo{
			 	padding-bottom: 50px;
			 	p{
			 		font-size: 16px;
			 		color:#877a73;
			 		text-indent: 2em;
			 	}
			 	ul{
			 		padding:0 20px;
			 		overflow:hidden;
			 		li{
			 			font-size: 14px;
			 			color:#43240c;
			 			height:px2rem(50px);
			 			line-height: px2rem(50px);
			 			padding:0 10px;
			 			background-color: #f5f5f5;
			 			border-radius: 5px;
			 			float: left;
			 			margin-left: 10px;
			 			margin-top:20px;
			 		}
			 	}
			 }
		 }
	</style>