const User = require('./user')
const Concert = require('./concert')
const Database = require('./database')

const irina = new User ('irina')
const roger = new User ('waters')
const ozzy = new User ('ironman')

const nmt = new Concert ('Ozzy Osbourne - No More Tears')
const ec = new Concert ('Eric Clapton')
const sl = new Concert ('The Slackers')

irina.attend(nmt) 
irina.attend(ec)
roger.attend(ec)
roger.attend(nmt)
ozzy.attend(ec)
ozzy.attend(sl)

Database.save([nmt, ec, sl])
const json = Database.load()
console.log(json)
