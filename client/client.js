import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
// Below is ES5 syntax, above is ES6 syntax
//var render - require('react-dom').render

render(
	// define the encompassing component,
	// DOM element we want to mount it to
	<App/>,
	document.getElementById('app')
)
