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

  it('knows the value of the picture cards', function() {
    expect(deck.pictures['A']).toEqual(11)
    expect(deck.pictures['K']).toEqual(10)
    expect(deck.pictures['Q']).toEqual(10)
    expect(deck.pictures['J']).toEqual(10)
  })
})
