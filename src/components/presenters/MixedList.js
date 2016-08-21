import React from 'react'
import {connect} from 'react-redux'

function listItem(Component, data) {
	return <Component/>
}

function MixedList (clist) {
	return class extends React.Component {
		render(){
			return <ul>
				{clist.map(({component: Component, data})=>(
				<Component {...data} />))}
			</ul>
		}
	}
}


export default MixedList
