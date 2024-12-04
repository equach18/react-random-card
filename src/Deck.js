import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css"

const baseURL = `https://deckofcardsapi.com/api/deck`;

function Deck() {
  const [deck, setDeck] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardsDrawn, setCardsDrawn] = useState([]);

  useEffect(function fetchDeckOnShuffle() {
    async function fetchShuffledDeck() {
      let deckRes = await axios.get(`${baseURL}/new/shuffle/`);
      setDeck(deckRes.data);
    }
    fetchShuffledDeck();
  }, []);
  // Draw card and add the cards drawn to the state
  async function drawCard() {
    try {
      let cardRes = await axios.get(`${baseURL}/${deck.deck_id}/draw/`);
      if (cardRes.data.remaining === 0) throw new Error("Deck is Empty!");
      let { code, image, value, suit } = cardRes.data.cards[0];

      setCardsDrawn((cardsDrawn) => [
        ...cardsDrawn,
        { code, image, value, suit },
      ]);
    } catch (err) {
      alert(err);
    }
  }
  // update isShuffling state, shuffle the deck and clear the drawn cards from the state.
  async function shuffleDeck() {
    setIsShuffling(true);
    try {
      await axios.get(`${baseURL}/${deck.deck_id}/shuffle/`);
      setCardsDrawn([]);
    } catch (err) {
      alert(err);
    } finally {
      setIsShuffling(false);
    }
  }

  const cardComponent = cardsDrawn.map((c) => (
    <Card
      key={`${c.value}${c.suit}`}
      id={`${c.value}${c.suit}`}
      placeHolder={`${c.value}${c.suit}`}
      image={c.image}
    />
  ));

  return (
    <div className="Deck">
      {deck && <button onClick={drawCard} disabled={isShuffling}>Draw a Card!</button>}
      {deck && <button onClick={shuffleDeck} disabled={isShuffling}>Shuffle the Deck!</button>}
      <div className="Deck-container">{cardComponent}</div>
    </div>
  );
}

export default Deck;
