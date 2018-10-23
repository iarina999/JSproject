module.exports = class Concert { // ec
    constructor(name){
        this.name = name
        this.reviews = []
        this.guests = [] // ['irina']
    }
    add(review) {
        this.reviews.push(review)
    }
}