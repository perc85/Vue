const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss'},
                {title: 'the way of kings', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'brandon sanderson'},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, dataa){
            console.log(e, e.type);
            if(dataa){
                console.log(dataa);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app')