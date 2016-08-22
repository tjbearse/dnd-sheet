import React from 'react'

import AbilityBlockContainer from '../containers/AbilityBlockContainer.js'
import NameBlockContainer from '../containers/NameBlockContainer.js'
	/*		HealthBlock,
	PersonalityBlock,
	AttacksBlock,
	FeaturesBlock,
	EquipmentBlock,
	OtherBlock*/

const CharSheet = () => {
	let pageStyle = {
		width: 748,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '60px',
		padding: '18px 30px',
		//backgroundColor: '#fff',
		position: 'relative',
		overflow: 'auto'
	}
	return <div style={pageStyle}>
		<div style={{
			backgroundImage: 'url(bg.png)',
			backgroundSize: '100%',
			backgroundRepeat: 'no-repeat',
			position: 'absolute',
			right: 0,
			left: 0,
			top: 0,
			bottom: 0,
			opacity: .5,
			zIndex: -1
		}}/>
		<div style={{
			backgroundColor: '#fff',
			position: 'absolute',
			right: 0,
			left: 0,
			top: 0,
			bottom: 0,
			zIndex: -2
		}}/>
		<div style={{
			width: '100%',
			marginBottom: '8px',
			clear:'both'
		}}>
			<NameBlockContainer />
		</div>
		<div style={{
			width: 236,
			float: 'left',
			margin: 8,
			border: '1px solid'
		}}>
			<AbilityBlockContainer />
		</div>
		<div>
		HealthBlock
		</div>
		<div>
		PersonalityBlock
		</div>
		<div>
		AttacksBlock
		</div>
		<div>
		FeaturesBlock
		</div>
		<div>
		EquipmentBlock
		</div>
		<div>
		OtherBlock
		</div>
	</div>
}

export default CharSheet
