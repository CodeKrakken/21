const Deck = require('../lib/Deck')
const Dealer = require('../lib/Dealer')
const Player = require('../lib/Player')

let deck = new Deck
let dealer = new Dealer()
let sam = new Player
dealer.shuffle(deck)
dealer.deal(sam)
