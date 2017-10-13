var app = new Vue({
	el : "#app",
	data:{
		msg : 'Hello world!'
	}
});
var app2 = new Vue({
	el:'#app-2',
	data:{
		msg:new Date().toLocaleString()
	}
})
var app3 = new Vue({
	el : "#app-3",
	data:{
		seen:false
	}
})
Vue.component('colors',{
	props:['value'],
	template:"<li>{{value}}</li>"
})

var app4 = new Vue({
	el:"#app-4",
	data:{
		colors:['red', 'green', 'black']
		// colors:[]
	}
})
var app5 = new Vue({
	el:"#app-5",
	data:{
		message : "welcome Here",
	},
	methods:{
		reverseMsg:function(){
			this.message = this.message.split('').reverse().join('');

		}
	}
})
var app6 = new Vue({
	el: "#app-6",
	data:{
		msg:"Hey"
	}
})
