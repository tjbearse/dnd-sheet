import React, {PropTypes} from 'react'

const Ability = ({ability, onChangeRaw}) => (
	<div>
		<input
			value={ability.raw}
			onChange={ (val) => (onChangeRaw(ability.id, raw)) }
		/>
		<span>{ability.mod}</span>
		<span>{ability.name}</span>
	</div>
)

Ability.propsTypes = {
	ability: PropTypes.shape({
		id: PropTypes.string.isRequired,
		raw: PropTypes.number.isRequired,
		mod: PropTypes.number.isRequired
	}).isRequired,
	onChangeRaw: PropTypes.func.isRequired
}

export default Ability
