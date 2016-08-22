import React from 'react'
import {merge as m} from './cssUtil.js'

const BevelBox = ({children, bevel=10, color='#fff', style}) => {
	let gradientInfo = [
		[135, 'top left'],
		[225, 'top right'],
		[315, 'bottom right'],
		[45, 'bottom left']
	]

	let background = gradientInfo
		.map(([deg, corner]) => (
			`linear-gradient(${deg}deg, transparent ${bevel}px, ${color} 0) ${corner}`))
		.reduce((background, grad) => (`${background},${grad}`))
	return <div className="BevelBox"
		style={
			m({
				background: color,
				background: background,
				backgroundSize: '50% 50%',
				backgroundRepeat: 'no-repeat'
			},
			style
			)}
		>
			{children}
		</div>
}

const BevelSeries = ({children, bevels}) => {
	return bevels.reduceRight((child, [bevel, color, pad])=>(
		<BevelBox bevel={bevel} color={color} style={{padding:pad}}>
			{child}
		</BevelBox>
	), children)
}

export {BevelBox as default, BevelSeries}
