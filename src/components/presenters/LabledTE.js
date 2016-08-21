import React from 'react'

const LabledTE = ({classes, label, value}) => (
		<span>
			<input value={value || ''} />
			<label>{label}</label>
		</span>
)

export default LabledTE
