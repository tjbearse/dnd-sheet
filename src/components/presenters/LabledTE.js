import React from 'react'

import TE from './TE.js'

const LabledTE = ({classes, label, value}) => (
		<span>
			<TE value={value} />
			<label>{label}</label>
		</span>
)

export default LabledTE
