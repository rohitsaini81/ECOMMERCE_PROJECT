class Cart {
    cart = [{ name: "rohit", id: "1", title: "bhgasd;lj kfk" },]

    Cart(){
        this.cart = [
            { id: 1, name: 'item1', price: 100 },
            { id: 2, name: 'item2', price: 200 },
            { id: 3, name: 'item3', price: 300 }
        ];
    }
    setCart(obj) {
        this.cart.push(obj)
        console.log("cart added succesfull", obj.title)
    }
    async getCart(myid) {
        const itemobj= await this.cart.find(element =>element.id == myid);
        // console.log(itemobj)
        return itemobj
    }
}

const mycart = new Cart();


export default mycart;