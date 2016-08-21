import React from 'react'

const MixedList = ({items}) => (
	<ul>
		{items.map(({Component, data})=>(
			<Component { ...data } />
		))}
	</ul>
)


//MixedList.prop
