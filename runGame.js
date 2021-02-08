console.log('game is running')
const Deck = require('./lib/Deck')
const Dealer = require('./lib/Dealer')
let deck = new Deck
let dealer = new Dealer(deck)
console.log(dealer)