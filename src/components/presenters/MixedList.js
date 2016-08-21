import React from 'react'
import {connect} from 'react-redux'

function MixedList ({items}) {
	return <ul>
		{items.map(({component: Component, data})=>(
		<Component {...data} />))}
	</ul>
}


export default MixedList
