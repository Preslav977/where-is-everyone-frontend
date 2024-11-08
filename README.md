# where-is-everyone-frontend

![Screenshot_2024-09-12_09-46-30](https://github.com/user-attachments/assets/e169f37e-339d-4fe2-b9c4-d741fafac768)

# Overview

This is the frontend of the project. Created with React. Where's Everyone is a photo-tagging game in which you need to find all the characters as fast as possible in order to achieve a place in the leaderboard.

# About the project the project

Photo tagging game that you need to search for characters and based on the shortest time you can earn a place in the leaderboard
The game is consistent in frontend and backend, which reduces the chances that you can cheat.

# Live Previews

- [View the live site here](https://where-is-everyone-frontend.vercel.app/)
- [View the back-end API repository here](https://github.com/Preslav977/where-is-everyone-backend)

# Features

- Timer that will be synchronized with the backend
- Character validation on the characters to the backend
- A leaderboard to show the user's score
- Validation on the backend that checks when a game is done

# Technology Used

- useRef Hook: creating a timer on the frontend in order to calculate how long it will take the user to find all characters
- React Router: rendering different components depending on the route
- PropTypes: validating the prop of a component
- Vitest: testing the components of the application
- CSS module: organized CSS style files for each component

# Lessons Learned

- React getBoundingClientReact method: how to use it to calculate the character coordinates, also known as normalized coordinates, which are consistent depending on all screen sizes.
- Mouse Event ClientX: what clientX is, which is a mouse event that allows to click horizontally within the viewport of the page
- Mouse Event ClientY: what clientY is, which is a mouse event that allows to click vertically within the viewport of the page
- useRef hook: make the drop-down appear and hide on clicking away using the useRef hook and useEffect with the cleanup function. How to make a timer using useRef and useState as well as clearInterval that clears the timer
- HTML table: in order to show a leaderboard with the users information.
- React Router Loader: how to use a React router loader that renders before the component is loaded

# Future Improvements

- Indicator on hit or miss when user clicked on the character in the drop-down menu
- Better organization of the CSS
- Better reusing of the component to reduce duplication
- Using more semantics
- Testing the user events with Vitest
- How to test with React Router Loader
- How to hide the drop-down when clicked outside
- How to make the drop-down switch position when overflowed
- React Content API for switching themes
- Loading leaderboard when the game is finished instead of clicking on it
- How to censor the unappropriated usernames in the leaderboard
