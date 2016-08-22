import React, {PropTypes} from 'react'
import {getAbilityModifier} from '../../dndConstants.js'
import {EdgeBevelBox} from '../gen/BevelBox.js'
import TE from '../gen/TE.js'

const Ability = ({ability, onChangeRaw}) => {
	let mod = getAbilityModifier(ability.raw) || 0
	return <div style={{
		width: 85,
		height: 85,
		backgroundColor: '#fff'
	}}>
			<TE
				style={{
					width: 24
				}}
				value={ability.raw}
			/>

		<EdgeBevelBox vertRunners={false} style={{height: 70}}>
		<TE
			disabled
			style={{
				width: 50,
				fontSize: '24pt',
				textAlign: 'center'
			}}
			value={mod}
		/>
		</EdgeBevelBox>
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
