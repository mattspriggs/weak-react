# Psuedo Code for Dev Says

This is meant to mimic the traditional Simon Says electronic game of repeating patterns.

First the PC will show a preset pattern of the colored squares.

- The pattern is animated on an overlay using the z-axis and hidden attribute when not demonstrating the pattern
  - The hidden attribute is removed
  - The pattern is played by mapping through an array with a timeout to allow for visibility
    - For a stretch goal the time of the playback interval could be set via form
  - Once the animation completes the hidden attribute is added back to the overlay
  - The player buttons are enabled
- The player takes their turn and tries to repeat the pattern the PC demonstrated
  - Stretch goal is to limit the time for the player to respond, using a timeout set to a % above the PC playback
  - The player clicks on the buttons in the order they saw animated by the PC
    - each button press adds the value of that button to a response array
    - When the length of the response array = the length of the animated array:
      - The buttons are disabled from further input
      - the response array is compared to the animated array of the PC
        - If they match the player wins the round
        - If they differ the player loses
  - To play another round:
    - The player presses the 'Another Round?' button
      - Stretch goal - add to the length of the pattern by 1 for both the PC and the player
      - Stretch goal - Shorten the time of the PC animation and/or the player response time
      - The PC plays the next pattern animation
  - UI
    - Wins and losses could be displayed in the upper right corner of the screen
