var Person = Backbone.Model.extend({
    
   defaults: {
       name: 'меня зовут Иван',
       age: 'мне 20 лет',
       job: 'работаю таксистом',
       words: 'у меня всегда низкие цены:)'

    }

});

var PersonView = Backbone.View.extend({
	tagName: 'li',
	template: _.template('<strong><%= name %></strong> ( <%=age %>) - <%= job %> <%=words%>'),
	
	initialize: function (){
		this.render();
		
	},
	
	
	
	
	
	render: function (){
		this.$el.html( this.template( this.model.toJSON()));
	}

});
var person = new Person;
var PersonView = new PersonView({model: person});


