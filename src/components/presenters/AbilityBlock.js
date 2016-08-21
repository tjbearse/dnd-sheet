import React, {PropTypes} from 'react'
import AbilityAndSkills from './AbilityAndSkills.js'

const AbilityBlock = (abilities) => {
	return <div>
			proficiency bonus
			inspiration
			<ul>
				{ Object.keys(abilities).map((abilityKey)=>(
					<li key={abilityKey}>
						<AbilityAndSkills  {...abilities[abilityKey]} />
					</li>
				))}
			</ul>
			passiveWisdom
		</div>
}

AbilityBlock.propsTypes = PropTypes.objectOf({
	ability: PropTypes.shape({
		name: PropTypes.string.isRequired,
		//id: PropTypes.string.isRequired,
		raw: PropTypes.number.isRequired,
		mod: PropTypes.number.isRequired
	}).isRequired,
	skill: PropTypes.object.isRequired,
	savingThrow: PropTypes.object.isRequired
}).isRequired

export default AbilityBlock



