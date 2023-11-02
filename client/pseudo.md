# Psuedo Code for Dev Says

This is meant to mimic the traditional Simon Says electronic game of repeating patterns.

First the PC will show a preset pattern of the colored squares. Then the player will try to mimic the pattern animated by the PC

## PC Turn

- The pattern is animated on an overlay using the z-axis and hidden attribute when not demonstrating the pattern
  - The hidden attribute is removed
  - The pattern is played by mapping through an array with a timeout to allow for visibility
    - For a stretch goal the time of the playback interval could be set via form
  - Once the animation completes the hidden attribute is added back to the overlay
  - The player buttons are enabled

## Player Turn

- The player takes their turn and tries to repeat the pattern the PC demonstrated
  - The player clicks on the buttons in the order they saw animated by the PC
    - each button press adds the value of that button to a response array
    - When the length of the response array === the length of the animated array:
      - The buttons are disabled from further input
      - the response array is compared to the animated array of the PC
        - If they match the player wins the round
        - If they differ the player loses
  - **Stretch goal**
    - limit the time for the player to respond, using a timeout set to a % above the PC playback before the buttons disable

## Continue Play

- To play another round:
  - The player presses the 'Another Round?' button
    - **Stretch goals**
      - add to the length of the pattern by 1 for both the PC and the player for each win until they reach some number in the pattern (12?) and then they win the match (Confetti effect? Ala Inflating Unicorns?)
      - Shorten the time of the PC animation and/or the player response time
      - A loss would shorten the pattern by 1 unless it is at 4 (4 being the minimum in the pattern)
  - The PC plays the next pattern animation

## UI

- Wins and losses could be displayed in the upper right corner of the screen

## Managing State

- In reviewing the [React Docs](https://react.dev/learn/sharing-state-between-components) on managing state between components
  - we will need to have the parent component (App) manage the state (so called 'single source of truth')
  - the parent will pass event handlers as props to the child components.
  - This will allow the child components to set the state in the parent - add the button press to the response array
- Most of the functionality would be in the parent
