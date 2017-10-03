var menu = new Vue({
	el: '#menu',
	data: {
		message: 'Please click a menu item',
		homeActive: false,
		projectsActive: false,
		servicesActive: false,
		contactActive: false
	},
	methods: {
		makeActive: function(item, label) {
			//console.log('makeActive');
			//console.log('makeActive - item:', item, 'label:', label);
			// Remove active class from previous anchor
			this.homeActive = false;
			this.projectsActive = false;
			this.servicesActive = false;
			this.contactActive = false;
			// Add active class to the selected anchor (item)
			switch(item) {
				case 'homeMenu':
				this.homeActive = true;
				//console.log('Colorize:', label);
				break;
				case 'projectsMenu':
				this.projectsActive = true;
				//console.log('Colorize:', label);
				break;
				case 'servicesMenu':
				this.servicesActive = true;
				//console.log('Colorize:', label);
				break;
				case 'contactMenu':
				this.contactActive = true;
				//console.log('Colorize:', label);
				break;
			}
			// Change text of message
			this.message = 'You chose ' + label;
		}
	}
});