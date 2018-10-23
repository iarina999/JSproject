module.exports = class User { // irina
    constructor(username) {
        this.username = username
        this.concerts = [] // ['nmt', 'ec']
        this.reviews = []
    }
  attend(concert) { // concert = 'ec'
      this.concerts.push(concert)
      concert.guests.push(this.username) // this = irina
  }
}