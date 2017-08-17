 <template>
 	<div id="login">
 		<div>
 			<h4>熊猫登录</h4>
 			<div>
 				<input type="text" placeholder="用户名"/>
 				<input type="text" placeholder="密码"/>
 				<button>登录</button>
 			</div>
 		</div>
 	</div>
 </template>

 <script type="text/javascript">

 </script>

 <style lang="scss" scoped>
 	$ui-width: 640px;
		 @function px2rem($px) {
		     @return $px/$ui-width*6.4rem;
		 }
 	#login{
 		position: relative;
 		z-index: 21;
 		background-color: #fff;
 		div{
 			h4{
			padding-top:50px;
			font-size: 25px;
			text-align: center;
			color: #f60;
 			}
 			div{
 				padding-top:20px;
 				padding-left: px2rem(85px);
 				input{
 				font-size: 16px;
 				margin-top:20px;
 				display: block;
 				width:px2rem(450px);
 				height: px2rem(80px);
 				border-radius: 5px;	
 				outline: none;
 				text-indent: 1em;
 				}
 				button{
				display:block;
				margin-left:px2rem(170px);
				margin-top:40px;
				height:px2rem(70px);
				width:px2rem(150px);
				border-radius: 3px;
				font-size: 16px;
				color:#f60;
				outline: none;
			}
 			}
 		}
 	}
 </style>