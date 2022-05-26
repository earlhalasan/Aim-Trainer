# Aim Trainer

## Concept

Want to improve your aim on first person shooters? Or just open files laying around your desktop with heightened precision and speed? Then Aim Trainer is the game for you. Click the target on the screen and a new target will appear. Each successful hit makes the target move incrementally faster! So stay on your toes and keep your eyes open. Click as many targets as you can and raise your score. However, if you miss 5 targets, the game is over! I have always loved FPS games so it made sense to make a game that would help improve the aiming mechanic.

## Technologies Used

- HTML
- CSS
- JavaScript
- Canvas

## User Story

I built this game out using canvas with click event listeners. It will generate a target (circle or target.png) which the player has to click in order to generate a new one. I've included a score tally as well as a missed targets tally. I've also included menu and gameplay music along with sound effects on successful clicks and a game-over tone. It currently only has one game mode, but in the future, I also hope to implement different difficulty levels: Normal, Hard, and Nightmare as well as a top score display.

- **Normal:** One sized moving target that will generate randomly after each successful click.
- **Hard:** Smaller moving targets that will generate randomly after each succesful click.
- **Nightmare:** Smaller AND moving targets. Two clicks will be required to make moving targets disappear.

I used a 100ms buffer until the next target appears. Games like these have always interested me because average human reaction times range from 250ms-270ms, but this can be improved with simple games like these.

## Wireframes

My initial sketch of the game.  
<img src="https://i.imgur.com/Hhbni3g.jpeg" width="600"/>

Drew this out using Figjam. Hoping to go with a flat design for the game similar to what's shown below.  
<img src="https://i.imgur.com/6kefwl0.png" width="600"/>
