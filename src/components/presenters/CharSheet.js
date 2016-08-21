import React from 'react'

import AbilityBlockContainer from '../containers/AbilityBlockContainer.js'
import NameBlockContainer from '../containers/NameBlockContainer.js'
	/*		HealthBlock,
	PersonalityBlock,
	AttacksBlock,
	FeaturesBlock,
	EquipmentBlock,
	OtherBlock*/

const CharSheet = () => (
	<div>
		<NameBlockContainer />
		<AbilityBlockContainer />
		HealthBlock
		PersonalityBlock
		AttacksBlock
		FeaturesBlock
		EquipmentBlock
		OtherBlock
	</div>
)

export default CharSheet
