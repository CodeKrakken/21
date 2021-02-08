function Player() {}

Player.prototype.hit = function(dealer, deck) {
  if (dealer.total(this.hand) < 17) {
    card = deck.cards.pop()
    this.hand.push(card)
    dealer.printHand()
  }
}

module.exports = Player