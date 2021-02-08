'use strict'

const Deck = require('../lib/Deck.js')
let deck

describe('deck', function() {
  beforeEach(function() {
    deck = new Deck    
  })

  it('has an array of cards', function() {
    expect(deck.cards).toBeDefined()
    expect(deck.cards.length).toEqual(52)
  })

  it('has a hash of picture card values', function() {
    expect(deck.pictures).toBeDefined()
  })
})
