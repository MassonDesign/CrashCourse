//const axios = require('axios')

const categories = {
    data() {
        return {
            items: [
                { text: 'Women Running Shoes' },
                { text: 'Everyday Sneakers' },
                { text: 'Slip-On' },
                { text: 'High Tops' },
                { text: 'Boat Shoes' },
                { text: 'Flats' },
                { text: 'Weather Reppelant Shoes' }
            ],

            
        }
    }

}

Vue.createApp(categories).mount('#categories')


const shoes = {
    
    data() {
        return {
            currentIndex: 0,
            products: null
        
        }
    },
    // Pour ajouter des méthodes disponible dans ton HTML
    methods: {
        selectStyle(index) {
            // TODO: Catch index and replace the currentIndex with it
            this.currentIndex = index
        },

    },
    mounted() {
        axios
        .get('http://localhost:1337/products')
        .then((response) => {
            console.log(response.data)
            console.log(this.products)
            this.products = response.data
            console.log(this.products)
        })
        .catch(error => console.log(error))
        
        // const res = await fetch('http://localhost:1337/products')
         
        // const data = await res.json()
        
        // this.products = data
    }
   
      

}


//console.log(shoes.mounted())
Vue.createApp(shoes).mount('#shoes')
