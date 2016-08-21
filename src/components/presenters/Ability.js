import React, {PropTypes} from 'react'
import {getAbilityModifier} from '../../dndConstants.js'

const Ability = ({ability, onChangeRaw}) => {
	let mod = getAbilityModifier(ability.raw) || 0
	return <div>
		<input
			value={ability.raw}
		/>
		<span>{mod}</span>
		<span>{ability.name}</span>
	</div>
}

Ability.propsTypes = {
	ability: PropTypes.shape({
		id: PropTypes.string.isRequired,
		raw: PropTypes.number.isRequired,
		mod: PropTypes.number.isRequired
	}).isRequired,
	onChangeRaw: PropTypes.func.isRequired
}

export default Ability
