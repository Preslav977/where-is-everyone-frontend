# where-is-everyone-frontend

Features:

- Timer that will be synchronized with the backend
- Character validation on the characters to the backend
- A leaderboard to show the user's score
- Validation on the backend that checks when a game is done

1. This is the result of the Where's Everyone frontend.

![Screenshot_2024-09-12_09-46-30](https://github.com/user-attachments/assets/e169f37e-339d-4fe2-b9c4-d741fafac768)

2. About the project the project.

- Photo tagging game that you need to search for characters and based on the shortest time you can earn a place in the leaderboard
- The game is consistent in frontend and backend, which reduces the chances that you can cheat.

3. Project objectives

- [x] FetchSingleGame component, which allows to render on click a drop-down menu and is hidden on clicked away.
      Also getBoundingClientRect method that calculates the image width and height depending on the screen sizes in order to make the coordinates of the characters consistent.
- [x] MainComponent component that has an onLoad event that will start a new game and will show a timer and stop it until all characters are found. Also, a dialog will pop up when the game is done.
      When a character is found, it will render a marker to notify a user.
- [x] NavComponent component that will render the timer when the game is loaded. If a character is found, the character name is going to be struck through it.
- [x] GameComponent component with props that is going to be used to render all games using map
- [x] FetchGames component, which is going to render all games on the main screen
- [x] Footer component
- [x] DropDownMenuContent component, which will validate each character on click to the server
- [x] Dialog component that will pop up when all characters are found and it will ask the user for username so it can save it for later and show his or hers score to the leaderboard.
- [x] FetchGamesLeaderBoard component, which is similar to FetchGames; the only difference is that it is going to render a leaderboard on click.
- [x] LeaderBoardTable component that is going to render the player username, score, place depending on the score, and a date
- [x] useGamesURL useEffect hook that fetches all games
- [x] useSingleGameURL useEffect hook that fetches single game with useParams
- [x] useSingleGameCharactersURL useEffect hook that fetches all characters depending on the game ID
- [x] created tests for each component

4. Notes and lessons learned

- I learned what is getBoundingClientRect and how to use it to calculate the character coordinates, also known as normalized coordinates, which are consistent depending on all screen sizes.
- I learned what clientX is, which is a mouse event that allows to click horizontally within the viewport of the page.
- I learned what clientY is, which is a mouse event that allows to click vertically within the viewport of the page.
- Using these two mouse events since they are relative to the target when it is clicked depending on the targeting box is needed to subtract left and top in order to make the targeting box centered.
- How to make the drop-down appear and hide on clicking away using the useRef hook and useEffect with the cleanup function
- I learned how to make a timer using useRef and useState as well as clearInterval that clears the timer.
- I learned how to normalize the coordinates using the image width and height on click.
- I learned how to make a table in order to show a leaderboard with the users information.
- I learned how to use a React router loader that renders before the component is loaded.

5. Features or things I'd love to work on in the future

- [ ] Figure out how to add an indicator on a miss or character found.
- [ ] Figure out how to better organize the variables in the CSS.
- [ ] Figure out a better way to reuse a single component instead of creating the same component with minor differences.
- [ ] Figure out how to make the application more accessible using semantics.
- [ ] Figure out how to test the mouse on click events.
- [ ] Figure out how to use the loaders that can be used for the tests because it will not render the component after it is done since it loads before the component is rendered.
- [ ] Figure out how to make the drop-down in the NavComponent hidden on clicking away.
- [ ] Figure out how to make the drop-down shown to the left side of the targeting box when the mouse is in the middle of the screen
- [ ] Figure out with using useContext how to make a light and a dark theme rendered on click.
- [ ] Figure out how to render the leaderboard when a game is finished on Load instead on Click event
- [ ] Figure out how to censor the unappropriated usernames in the leaderboard.
