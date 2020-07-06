class Coin {
    constructor (initialState) {
        this.name = name
        this.state = initialState
    }

    flip () {
        console.log("coin.flip() has been invoked.")
        this.state = Math.floor(Math.random() * 2)
        return this.state
    }

    toString () {
        console.log("coin.toString() has been invoked.")
        if (this.state == 0){
            return "Heads "
        }
        else {
            return "Tails "
        }
    }

    toHTML () {
        console.log("coin.toHTML() has been invoked.")
        let image = document.createElement('img');
        if (this.state == 0) {
            image.src = "https://images-na.ssl-images-amazon.com/images/I/91dNxILkClL._AC_SL1500_.jpg"
        }
        else {
            image.src = "https://images-na.ssl-images-amazon.com/images/I/914247Q%2BS6L._AC_SL1500_.jpg"
        }
        return image
    }
}