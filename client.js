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
		msg:"Hey",
		rawHtml : "<b>Here We Are!</b>",
	}
})
var app7 = new Vue({
	el:"#app-7",
	data:{
		first_name:"foo",
		last_name:"bar",
	},
/*	watch:{
		first_name : function(value){
			this.fullName = value + ' ' + this.last_name  
		},
		last_name:function(value){
			this.fullName = this.first_name + ' ' + value
		}
	},*/
	computed:{
		fullName:{
			get:function(){
				return this.first_name + ' ' + this.last_name
			},
			set:function(val){
				var names = val.split(' ')
				this.first_name = names[0]
				this.last_name = names[names.length - 1]
			}
		}
	}
})
var app8 = new Vue({
	el:"#app-8",
	data:{
		answer : 'until ask a question',
		question : ''
	},
	watch:{
		question:function(newQ){
			this.answer = 'waiting for you to stop typing',
			this.getAnswer()
		}
	},
	methods:{
		getAnswer:_.debounce(
			function(){
				if(this.question.indexOf('?') === -1){
					this.answer = "question usually contain a question mark"
					return
				}
				this.answer = "thinking"
				var vm = this
				axios.get("https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif")
				.then(function(response){
					vm.answer = _.capitialize(response.data.answer)
				})
				.catch(function(error){
					vm.answer = "Error! could not reach the API." + error
				})
			}, 500
		)
	}
})