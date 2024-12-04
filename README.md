# Random Card

Random Card is a simple React app that displays a deck of cards. When the 'Draw a Card' button is clicked, a new card will be displayed until there are none left in the deck. The user can also shuffle the deck.

## Components:
1. App: Renders the Deck component.
2. Deck: Contains the state of shuffling, cards drawn, and the deck. It renders a new Card component on draw until there are no more cards in the deck. It also contains a shuffle button that will shuffle the deck.
3. Card: Returns an img of the card with dynamic styling.


## Features:
1. Draw: When the button is clicked to draw a card, a new card is displayed until there are no more cards.
2. Alert: User will be alerted when there are no more cards to draw.
3. Shuffling: When the button to shuffle is clicked, the deck will be shuffled so that the user can start drawing from a full deck without refreshing. The draw and shuffle buttons will both be disabled when the shuffle is in progress.

