const { createApp } = Vue;

createApp({
	// date, function
	//template: "<h2> I am the template </h2>",
	data() {
		return {
			url: "http:/www.thenetninja.co.uk",
			showBooks: true,
			books: [
				{
					title: "name of the wind",
					author: "patrick rothfuss",
					img: "assets/1.jpg",
					isFav: true,
				},
				{
					title: "the way of kings",
					author: "brendan sanderson",
					img: "assets/2.jpg",
					isFav: false,
				},
				{
					title: "the final empire",
					author: "brendan sanderson",
					img: "assets/3.jpg",
					isFav: true,
				},
			],
			//title: "The Final Empire",
			//author: "Brandon Sanderson",
			//age: 45,
			//x: 0,
			//y: 0,
		};
	},
	methods: {
		//changeTitle(title) {
		//this.title = "Words of Randiance";
		//this.title = title;
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
		toggleFav(item) {
			item.isFav = !item.isFav;
		},

		handleEvent(e, data) {
			console.log(e, e.type);
			if (data) {
				console.log(data);
			}
		},
		handleMousemove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
	},
	computed: {
		filterBooks() {
			return this.books.filter((book) => book.isFav);
		},
	},
}).mount("#app");
