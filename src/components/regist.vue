 <template>
 	<div id="regist">
 		<h4>熊猫注册</h4>
 		<div>
 			<input type="text" placeholder="请输入注册账号"/><span>{{this.name}}</span>
 			<p>账号为11位数字组成</p>
 			<input type="text" placeholder="请输入密码"/><span>{{this.password}}</span>
 			<p>密码不得少于6位，必须以字母开头</p>
 			<input type="text" placeholder="请确定密码"/><span>{{this.istrue}}</span>

 				<button>注册</button>
 		</div>
 	</div>
 </template>

 <script type="text/javascript">
 	export default{
 		data(){
 			return{
 				name:'',
 				password:'',
 				istrue:'',
 			}
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
 	#regist{
 		position: relative;
 		z-index: 20;
 		background-color: #fff;
 		h4{
 			padding-top:50px;
 			font-size: 25px;
 			text-align: center;
 			color: #f60;
 		}
 		div{
 			padding:10px 20px;
 			font-size: 16px;
			input{
				margin-top:20px;
				display: inline-block;
				width:px2rem(450px);
				height: px2rem(80px);
				border-radius: 5px;
				text-indent: 1em;
			}
			p{
				font-size: 12px;
				color:#ccc;
			}
			button{
				display:block;
				margin-left:px2rem(240px);
				margin-top:20px;
				height:px2rem(70px);
				width:px2rem(150px);
				border-radius: 3px;
				font-size: 16px;
				color:#f60;
				outline: none;
			}

 		}
 	}
 </style>