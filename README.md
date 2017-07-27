## React-Redux-sample-project

### this may act as a starting point for new projects 
### using 
* react
* redux 
* webpack
* react-bootstrap
* react-router
* react-router-redux
* react-router-bootstrap
* persistant state 
* custom redux middlewares
* babel
* es6/7/8 features

most of these things require a number of things in place to work, 

lets go over some of this projects setup:

* webpack:
	- webpack.configmaker.js
	- webpack.config.js

	webpack requires a configuration to 
	know how to package your application, 
	what loaders to use, what plugins to
	use. this project has a setup
	with a main webpack bundle, as well
	as vendor requirements in a seperate 
	vendor bundle

* react:
	- `PROJECT/src/**/*.jsx`
	react is used to create custom components 
	by extending its `React.Component` class

* redux: 
	- `PROJECT/src/actions/**/*.js`
	- `PROJECT/src/reducers/**/*.js`

	to use redux we define a set of actions/ action types
	as well as reducers for each `key` in our state tree

* react-redux: 
	we use a function called `mapDispatchToProps` which
	uses `react-redux's` `bindActionCreators` function 
	to bind our action functions to reduxs dispatcher

* react-router: 
	we use react-router-dom.Router to map url's with
	our applications current state

* react-router-redux:
	using `react-router-redux.ConnectedRouter` we have access
	to our router inside our state tree using the `router` key

* react-router-bootstrap:
	using `LinkContainer` and `IndexLinkContainer` we can use
	the custom elements from `react-bootstrap` as navigation links 
	for our app

for more info, and walkthroughs on simple actions like:
	* adding a new page
	* adding a new key to the state tree
	* adding /binding actions / action types
	* and more

check out the [wiki](https://github.com/jstacoder/sample-react-redux-project/wiki)
