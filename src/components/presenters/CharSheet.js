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
		backgroundColor: '#fff',
		padding: '18px 30px'
	}
	return <div style={pageStyle}>
		<div style={{
			width: '100%',
			marginBottom: '8px',
			clear:'both'
		}}>
			<NameBlockContainer />
		</div>
		<div style={{
			width: '33%',
			float: 'left',
			backgroundColor: '#e7e8e8',
			margin: 8
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
