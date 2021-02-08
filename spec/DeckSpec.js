'use strict'

const Deck = require('../lib/Deck.js')
let deck

describe('deck', function() {
  beforeEach(function() {
    deck = new Deck    
  })

  it('has an array of cards', function() {
    expect(deck.cards).toBeDefined()
  })
})
