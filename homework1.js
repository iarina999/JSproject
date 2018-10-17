var Person = class {
    constructor(username) {
        this.username = username
        this.concerts = []
        this.reviews = []
    }
  attend(concert) {
      this.concerts.push(concert)
      concert.guests.push(this)
  }
}

var irina = new Person ('iarina')
var roger = new Person ('waters')
var ozzy = new Person ('ironman')


var Concert = class {
    constructor(name){
        this.name = name
        this.review = []
        this.guests = []
    }
}

var nmt = new Concert('Ozzy Osbourne - No More Tears')
var ec = new Concert('Eric Clapton')
var sl = new Concert('The Slackers')

var Review = class {
    constructor(text, concert, guest){
        this.text = []
        this.concert = []
        this.guests = []
    }
    review(concert) {
        this.concerts.push(review)
        this.reviews.guests.push(this)
    }
}

var review_nmt_1 = new Review ('This was amazing!', nmt, ozzy)
console.log(review_nmt_1)

irina.attend(nmt) 
irina.attend(ec)
console.log(irina)

roger.attend(ec)
roger.attend(nmt)
console.log(roger)

ozzy.attend(ec)
ozzy.attend(sl)
console.log(ozzy)



