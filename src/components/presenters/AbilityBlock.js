import React, {PropTypes} from 'react'
import AbilityAndSkills from './AbilityAndSkills.js'

import tjStrap, {Bevels} from '../../css/tjStrap.js'

let BevelSeries = Bevels.BevelSeries
const FancyBevel = ({children}) => (
	<BevelSeries bevels={[[5, '#c2c3c6', 4], [3, '#ffffff',1], [3, '#c2c3c6',1]]}>
		{children}
	</BevelSeries>
)

const AbilityBlock = (abilities) => {
	return <FancyBevel>
			proficiency bonus
			inspiration
			<ul style={tjStrap.nonlist}>
				{ Object.keys(abilities).map((abilityKey)=>(
					<li key={abilityKey}>
						<AbilityAndSkills  {...abilities[abilityKey]} />
					</li>
				))}
			</ul>
			passiveWisdom
		</FancyBevel>
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



