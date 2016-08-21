import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/charSheet.js'
import CharSheet from './components/presenters/CharSheet'

let store = createStore(reducer)
console.log('hi');
render(
	<Provider store={store}>
		<CharSheet />
	</Provider>,
	document.getElementById('root')
)
