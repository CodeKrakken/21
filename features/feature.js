const Deck = require('../lib/Deck')
const Dealer = require('../lib/Dealer')
const Player = require('../lib/Player')

let deck = new Deck
let dealer = new Dealer
let sam = new Player
dealer.shuffle(deck)
dealer.deal(sam)
if (dealer.total(sam.hand) < 17 ) {
  sam.hit(dealer, deck)
}
if (dealer.total(dealer.hand) <= dealer.total(sam.hand)) {
  dealer.hit()
}
