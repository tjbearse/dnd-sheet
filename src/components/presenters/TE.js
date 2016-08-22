import React from 'react'
import {merge as m} from '../../css/cssUtil.js'

const TE = ({value='', style={}, disabled=false, onChange=a=>a}) => (
	<input
		disabled={disabled}
		defaultValue={value || ''}
		style={m(
			{} ,
			style
		)}
		onChange={onChange}
	/>
)

export default TE
