Dealer = function(deck) {
  this.deck = deck
}

Dealer.prototype.deal = function(player) {
  this.player = player
  player.hand = this.draw(2)
  this.hand = this.draw(2)
  console.log(player.hand)
  if(this.blackjack(this.decode(player.hand))) { console.log("Blackjack!") }
}

Dealer.prototype.draw = function(numberOfCards) {
  let hand = []
  for(i=0;i<numberOfCards;i++) {
    randomIndex = Math.floor(Math.random() * this.deck.cards.length)
    randomCard = this.deck.cards.splice(randomIndex, 1)
    hand.push(randomCard[0])
  }
  return hand
}

Dealer.prototype.decode = function(hand) {
  let numberHand = []
  hand.forEach(card => {
    typeof card === 'string' ? numberHand.push(this.deck.pictures[card]) : numberHand.push(card)
  })
  return numberHand
}

Dealer.prototype.blackjack = function(hand) {
  return (hand.reduce((a, b) => a + b, 0) === 21)
}

module.exports = Dealer