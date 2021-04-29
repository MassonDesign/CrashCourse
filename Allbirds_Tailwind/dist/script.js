
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
            products: [
                {
                    id: 01,
                    name: "Women's Wool Runner Mizzles",                    
                    description: "Our weather-ready sneaker made with merino wool and Puddle Guard",
                    previewText: "Cozy Sneaker, Stormy Weather",
                    previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/2SJ7oQMIoIBIzdlmOtAGkA/5e5808e1d641be343569a2c17246a110/SpringCore2020_Shot04_SavannaNight_WRM_0687.jpg',
                    style: [
                        {
                            name: 'Natural Grey (Cream Sole)',
                            price: '$115',
                            colors: ['#585c60', '#e2e2da'],
                            image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/2'
                        },
                        {
                            name: 'Savana Night (Cream Sole)',
                            price: '$115',
                            colors: ['#353946', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1bRf7x3NByrcpXwAMRReII/1"
                        },
                        {
                            name: 'Black Sands (Asphalt Sole)',
                            price: '$115',
                            colors: ['#28282c', '#434345'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4hckj5ecFQqndunxNaKLVo/1"
                        },
                        {
                            name: 'Cardamon (Cream Sole)',
                            price: '$115',
                            colors: ['#9d957a', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5n0651h2Bqfah2KjyaVWLY/2"
                        },
                        {
                            name: 'Ginseng (Beige Sole)',
                            price: '$115',
                            colors: ['#e7e5e2', '#bfbab5'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5bQSi7FA9ZDG9DKOfGRZbT/1"
                        },
                        {
                            name: 'Dapple Grey (Cream Sole)',
                            price: '$115',
                            colors: ['#353946', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/JKWuH2CmnLWoDEq5Q89D0/1"
                        },
                        {
                            name: 'Aurora (Cream Sole)',
                            price: '$115',
                            colors: ['#353946', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1asfoA8T96201A3ODn2r4f/2"
                        },
                        {
                            name: 'Pacific (Cream Sole)',
                            price: '$115',
                            colors: ['#353946', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/75ZQVsFKvFeQ6hpDiTDgXZ/1"
                        },
                        {
                            name: 'True Black (Black Sole)',
                            price: '$115',
                            colors: ['#353946', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4pb4Y9adj7i0v4YpuVadSV/1"
                        },
                    ]

                },
                
                {
                    id: 02,
                    name: "Women's Wool Dasher Mizzles", 
                    previewText: "Extra Grip, Stormy Weather",                   
                    description: "Our weather-ready running shoe made with ZQ merino wool and Puddle Guard",
                    previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/2uQxW5KGZdfyo0MsfSi3W6/7821933447f0bcd2b053d042f6bae08a/WDM_Parent_Collection_Tile__1_.jpg',
                    style: [
                        {
                            name: 'Kotare Night (Light Grey Sole)',
                            price: '$190',
                            colors: ['rgb(54,57,59)', 'rgb(200,201,203)'],
                            image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6K8wZ3okXK3dM78iTEst6K/2'
                        },
                        {
                            name: 'Meteorite (Grey Sole)',
                            price: '$190',
                            colors: ['rgb(187,185,176)', 'rgb(142,139,138)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2"
                        },
                        {
                            name: 'Natural Black (White Sole)',
                            price: '$190',
                            colors: ['rgb(45,44,47)', 'rgb(244,245,241)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4mEljFZAAHsPoiq89ZvhOz/3"
                        },
                        {
                            name: 'Comet (Purple Sole)',
                            price: '$190',
                            colors: ['rgb(80,73,117)', 'rgb(80,73,117)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4anbxLa1Q1UbeNbtZbRJ8l/1"
                        },
                        {
                            name: 'Nova (White Sole)',
                            price: '$190',
                            colors: ['rgb(45,89,85)', 'rgb(210,226,133)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7zH6z1ZICqNsobuE3elfMA/2"
                        },
                        
                    ]

                },
                
                {
                    id: 03,
                    name: "Women's Wool Runner-up Mizzles",    
                    previewText: "Cozy High Top, Stormy Weather",                
                    description: "Our weather-ready high top made with merino wool and Puddle Guard",
                    previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/4MjEdiJHplh6HFH6iem6PC/6416efa47ca9775d4e9eaa7c7666c805/W_PCT_WRUM.jpg',
                    style: [
                        {
                            name: 'Tuke Jo (Cream Sole)',
                            price: '$195',
                            colors: ['rgb(75,74,74)', 'rgb(226,226,219)'],
                            image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vj0oKn4Grnojpwe2UkKh1/1'
                        },
                        {
                            name: 'Savana Night (Navy Sole)',
                            price: '$195',
                            colors: ['rgb(54,57,69)', 'rgb(112,126,141)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2B0h6umoZeNXMXDgtmwZuP/1"
                        },
                        {
                            name: 'Myst (Grey Sole)',
                            price: '$195',
                            colors: ['rgb(132,132,134)', 'rgb(200,200,203)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1608762607/production/colorway/en-US/images/6KReTwAZk7Nwf31ULaTGhj/2.png"
                        },
                        {
                            name: 'Fog (Cream Sole)',
                            price: '$195',
                            colors: ['rgb(168,173,170)', 'rgb(226,226,219)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6uU083uueA31a5MoEbv11o/1"
                        },
                        {
                            name: 'Ursa Minor (Dark Grey)',
                            price: '$195',
                            colors: ['rgb(171,171,170)', 'rgb(78,83,89)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5bQSi7FA9ZDG9DKOfGRZbT/1"
                        },
                        {
                            name: 'Dapple Grey (Cream Sole)',
                            price: '$195',
                            colors: ['#353946', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7lL4vmAknygdCx9HrFIJUL/1"
                        },
                        {
                            name: 'Cardamom (Cream Sole)',
                            price: '$195',
                            colors: ['rgb(157,150,125)', 'rgb(226,226,219)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/31xABGHCtZadsb5r69WvKn/1"
                        },
                        {
                            name: 'Ginseng (Cream Sole)',
                            price: '$195',
                            colors: ['#353946', '#e2e2da'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7yAgXZqXdchEPIfcEX9rCW/2"
                        },
                        {
                            name: 'Aurora (Cream)',
                            price: '$195',
                            colors: ['rgb(75,74,74)', 'rgb(226,226,219)'],
                            image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1TJW9OFNFxVo9mdklpKhEH/1"
                        },
                    ]

                },

                
            ]
        }
    },
    // Pour ajouter des méthodes disponible dans ton HTML
    methods: {
        selectStyle(index) {
            // TODO: Catch index and replace the currentIndex with it
            this.currentIndex = index;
        }
    }
}
Vue.createApp(shoes).mount('#shoes')