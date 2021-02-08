Dealer = function() {
}

Dealer.prototype.shuffle = function(deck) {
  let remainingCards = deck.cards.length
  let movingCard
  let randomCard
  while (remainingCards > 0) {
    randomCard = Math.floor(Math.random() * remainingCards)
    remainingCards -= 1
    movingCard = deck.cards[remainingCards]
    deck.cards[remainingCards] = deck.cards[randomCard]
    deck.cards[randomCard] = movingCard
  }
  this.deck = deck
}

Dealer.prototype.deal = function(player) {
  this.player = player
  this.gameOn = true
  this.player.hand = this.draw(2)
  this.hand = this.draw(2)
  this.printHand(this.player.hand)
  if(this.blackjack(this.decode(this.player.hand))) { console.log("Blackjack!") }
}

Dealer.prototype.printHand = function(hand) {
  total = this.total(hand)
  console.log(hand)
  console.log('Hand total: ' + total)
  if (total === 21) {this.endGame(true)}
  if (total > 21) {this.endGame(false)}
}

Dealer.prototype.endGame = function(playerWin) {
  playerWin ? console.log('You win!') : console.log('Bust - You lose!') 
  this.gameOn = false
}

Dealer.prototype.draw = function(numberOfCards) {
  if (this.gameOn === true) {
    let hand = []
    for(i=0;i<numberOfCards;i++) {
      card = this.deck.cards.pop()
      hand.push(card)
    }
    return hand
  }
}

Dealer.prototype.decode = function(hand) {
  let numberHand = []
  hand.forEach(card => {
    typeof card === 'string' ? numberHand.push(this.deck.pictures[card]) : numberHand.push(card)
  })
  return numberHand
}

Dealer.prototype.total = function(hand) {
  numberHand = this.decode(hand)
  total = numberHand.reduce((a, b) => a + b, 0)
  return total
}

Dealer.prototype.blackjack = function(hand) {
  return (hand.reduce((a, b) => a + b, 0) === 21)
}

Dealer.prototype.hit = function() {
  this.draw(1)
  this.printHand(this.hand)
}

module.exports = Dealer