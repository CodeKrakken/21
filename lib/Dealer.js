Dealer = function(deck) {
  this.deck = deck
}

Dealer.prototype.deal = function(player) {
  player.hand = this.draw(2)
  this.hand = this.draw(2)
}

Dealer.prototype.draw = function(numberOfCards) {
  let hand = []
  for(i=0;i<numberOfCards;i++) {
    randomIndex = Math.floor(Math.random() * 52)
    randomCard = this.deck.cards.splice(randomIndex, 1)
    hand.push(randomCard)
  }
  console.log(hand)
  return hand
}
module.exports = Dealer