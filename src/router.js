import Vue from 'vue';
import VueRouter from 'vue-router';
import Recommend from './components/recommend.vue';
import Woman from './components/woman.vue';
import Beauty from './components/beauty.vue';
import Hot from './components/hot.vue';
import Main from './components/main.vue';
import Detail from './components/detail.vue';
import HotDetail from './components/hotdetail.vue';
import Default from './components/default.vue';
import Rank from './components/rank.vue';
import Sale from './components/sale.vue';
import Login from './components/login.vue';
import Regist from './components/regist.vue';

Vue.use(VueRouter)

var routes = [
	{path:'/',redirect:'/main'},
	{path:'/main',component:Main,
		children:[
			{path:'/main',redirect:'/main/recommend'},
			{path:'/main/recommend',component:Recommend},
			{path:'/main/woman',component:Woman},
			{path:'/main/beauty',component:Beauty},
		]
	},
	{path:'/hot',component:Hot},
	{path:'/detail/:productId/:productType/:productUrl',name:"detail",component:Detail},
	{path:'/hotdetail',component:HotDetail,
		children:[
			{path:'/hotdetail',redirect:'/hotdetail/default'},
			{path:'/hotdetail/default',component:Default},
			{path:'/hotdetail/rank',component:Rank},
			{path:'/hotdetail/sale',component:Sale}
			
		]
	},
	{path:'/login',component:Login},
	{path:'/regist',component:Regist}
]

const router = new VueRouter({
	routes
})

export default router