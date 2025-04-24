# Gridlock - Testing
During the testing phase of the game, I focused on documenting bugs as soon as I encountered them. Once again, Chrome DevTools proved to be incredibly helpful throughout this process. Due to time constraints, I wasn’t able to fully implement tests using Jest. Instead, I relied on console logging to verify that everything was functioning correctly on the backend.
![Game as displayed on different screensizes]()


[View Deployed site](https://augustinagonja.github.io/grid-lock/)

## Contents
**[Automated Testing](#automated-testing)**
* [Html Validator](#wc3-html-validator)
* [CSS Validator](#wc3-css-validator)
* [JS Validator](#wc3-css-validator)

**[Performance Testing](#performance-testing-lighthouse)**
* [Desktop](#desktop)
* [Mobile](#mobile)

**[Performance Results](#performance-results)**

**[Manual Testing](#manual-testing)**
* [Testing User Stories](#testing-user-stories)

**[Full Testing](#full-testing)**
* [Devices Tested On](#devices-tested-on)
* [Page Feature Testing](#page-feature-testing)

**[Solved & Known Bugs ](#solved--known-bugs)**

**[Deployment & Local Development](#deployment--local-development)**

## Automated Testing
### WC3 HTML Validator
* [index.html](testing/Validators/index.html%20validator.png)
* [Normal.html](testing/Validators/css%20pass.png)
* [Challenge.html](testing/Validators/css%20pass.png)

The "cells" attribute within the div flagged an [error](testing/Validators/gamelevel%20html.png). Since these aren't important and I mainly used them for reference, I could safely remove them without affecting my code.

The consistent [issue](testing/Validators/index.html%20error.png) I encountered with my html was with the anchor tags nested inside the buttons. I removed the button element and and styled the anchors in CSS.
### CSS Validator
* [style.css](testing/Validators/css%20pass.png) <br>
**Passed**<br>

I initially encountered a [Parse Error](testing/Validators/css%20error.png), but I removed the styling elements that caused it, as they didn't significantly affect the appearance. I ran it through the validator, and it passed.
### JS Linter
* [game.js](testing/Validators/jslint.png) <br>
* [game.c.js](testing/Validators/jslint.png) <br>

The two js files are identical except for the values of some variables. No major issues, aside from the ones mentioned above. The two errors flagged are functioning correctly with the proper syntax.
# Performance Testing
# Solved & Known Bugs 
## Solved Bugs 
| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | When the pattern array is logged to the console, some indexes appear more than once. This can lead to issues, as the same boxes might be highlighted multiple times during the game.![Repeated indexes in Pattern Array](testing/Bugs/e1.png)| To prevent any repeated numbers, I added an if statement that filters out any numbers already present in the pattern. For assistance , I used this [Help Article](https://forum.freecodecamp.org/t/how-to-make-math-random-not-repeat-same-numbers/417973/3).|
| 2 | Reference Error occurred in the generatePattern function, indicating that the randNum variable was undefined.![Reference Error_1](testing/Bugs/e2.png)| I moved the randNum declaration to the top of the function because it wasn’t visible to the if statement — it was outside its scope. |
| 3 | Pattern array has reverted back to repeating again, but this time it repeats the exact same number 8 times.![Repeated indexes in Pattern Array](testing/Bugs/e3.png)|Commented out parts of the code to check what would be logged in console.Found that the first pattern.push(randNum) was causing the issue and making the indexes repeat again. [Fix](testing/Bugs/e5.png)  & [Result logged in Console](testing/Bugs/e6.png).|
| 4 | Reference Error occurred in the revealPattern function, indicating that the randNum variable was undefined.![Reference Error_2](testing/Bugs/e4.png)| I defined pattern outside the generatePattern function so it could also be accessed by the revealPattern function.( Was previously defined INSIDE the generate function)|
| 5 | Type Error occurred in the revealPattern function.![Type Error](testing/Bugs/e7.png)  [Error Code](testing/Bugs/e9.png)| I couldn’t color pattern[i] properly since I needed to access and style the actual boxes it was referring to. [Fix](testing/Bugs/e8.png) .|
| 6 | Website Unresponsive and not loading.Issue within the Javascript, as when commented out , the website loads and its appearance is restored.[Loading](testing/Bugs/e10.png)| Calling the generatePattern function caused this issue. [Fix](testing/Bugs/e8.png) .|
| 7 | Variable had already been declared at start of JS script, unable to use for function.![Syntax Error](testing/Bugs/e11.png)| Rename variable to restartButton [Fix](testing/Bugs/e12.png) .|
| 8 |When game is started ang patterb is rvealed , player cannot select any of the boxes/Nothing happens.Error in userClick function![Error Code](testing/Bugs/e14.png)| Syntax issues .Need to add brackets aroounf selectedBox.Second if statement has no curly braces.Order. [Fix](testing/Bugs/e8.png) .|
| 9 | Grid does not clear after you have lost or won a game.[Error](testing/Bugs/e15.png)|In code , add anotehr for of statement withing reatrt game function , which will clear the boxes back to its og state (default blue color) [Fix](testing/Bugs/e8.png) .|
| 10 | Countdown variable ntot defined.[Reference Error](testing/Bugs/e16.png)| Misatkenkly defined countdown variabke twice in js script .|
| 11 | Countdown not counting down.[Reference Error](testing/Bugs/e17.png)| Elements needed moving within else blco so that it is exectuted once , not repeatedly.[Fix](testing/Bugs/e18.png)|
## Known Bugs 
| No | Bug | 
| :--- | :--- | 