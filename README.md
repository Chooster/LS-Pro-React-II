# Homework #2

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

	* arrow functions
		* a simplified notation for writing functions. Also have some particular attributes regarding scope with `this`
	* state
		* a discrete condition of a dynamic component
	* constructor
		* a class prototype
	* setState - setState with a callback function and setState with an object passed in
		* a method for handling state changes
	* .bind
		* a method for binding the scope of `this`
	* functional components vs class components
		* class components inherit all the parent components, functional components are ad hoc
	* onClick
		* a means of controlling the users mouse actions


2. Fork and clone this repo.  When you need to commit use the following commands.

	* Run: `npm install -g create-react-app`
		* Done √
	* Create a boilerplate React app called clock. `create-react-app clock`
		*  Done √
	* Navigate into /clock and run the command: `npm start`
		*  Done √
	* Your `<App />` component will render a `<NavBar />` and a `<Clock />` component.
		*  Done √
	* Create a file called `NavBar.js` and a file called `Clock.js`
	* `<NavBar />` and `<Clock />` will both be React components.  `<NavBar />` should display the title of your page in a larger font.
	* `<Clock />` will display a clock that updates every second.  (You will need to use the `Date` object.)
  	* `Date` example: `const now = new Date(); now.getHours(); now.getDay(); now.getMinutes(); now.getSeconds(); etc.`
	* Create a clock that updates every second. JavaScript's `setInterval(cb, miliseconds)` function allows you to specify code that runs after a set time.
	* Style `<Clock />` and try to make it look nice.



#### Congratulations on finishing Homework #2!

For more information about our other courses visit: https://www.lambdaschool.com
