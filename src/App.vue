<template>
  <div id="app">
    <header class="header">
      <ul>
      <router-link to="/main/recommend" tag="li" activeClass="active">推荐</router-link>
      <router-link to="/main/woman" tag="li" activeClass="active">女装</router-link>
      <router-link to="/main/beauty" tag="li" activeClass="active">美妆护肤</router-link>
      </ul>
      <router-link to="/hot" tag="a"><img src="./assets/search-btn.png"/></router-link>
    </header><!-- /header -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss">
$ui-width: 640px;
 @function px2rem($px) {
     @return $px/$ui-width*6.4rem;
 }


 body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,img,a,input{
   padding:0; margin:0;}

 ul,ol{
   list-style:none;} 
 header,footer,section,figcaption,figure,main,nav,aside,summary,details{
   display:block;}
 a{
   text-decoration: none;
 } 

 html,body{
   width:100%;
   height:100%;
 }

 .header{
    width:100%;
    position:fixed;
    top:0px;
    overflow:hidden;
    z-index:10;
    background: #fff;
    box-shadow: 0 4px 4px #ccc;
    ul{
      height:px2rem(96px);
      overflow: hidden;
      margin-left: 5px;
      float:left;
      li{
        float: left;
        font-size: 14px;
        color: #877a73;
        height:px2rem(96px);
        line-height: px2rem(96px);
        padding: 0 10px;
        box-sizing: border-box;
      }
    }
    a{
      float:right;
      margin-right: 10px;
      display:table;
      margin-top:-15px;
      img{
      width:px2rem(46px);
     }
    }
  
 }
 .active{
    border-bottom: 4px solid #43240c;
    color:#43240c;
 }
</style>
