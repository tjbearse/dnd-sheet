import React, {PropTypes} from 'react'
import AbilityAndSkills from './AbilityAndSkills.js'

const AbilityBlock = ({abilities}) => (
		<div>
			proficiency bonus
			inspiration
			<ul>
				{abilities.map((ability)=>(
					<li>
						<AbilityAndSkills ability={ability} skills={skills} savingThrow={savingThrow}/>
					</li>
				))}
			</ul>
			passiveWisdom
		</div>
)

AbilityBlock.propsTypes = {
	abilities: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		raw: PropTypes.number.isRequired,
		mod: PropTypes.number.isRequired
	}).isRequired
	).isRequired,
	skills: PropTypes.array.isRequired,
	savingThrow: PropTypes.array.isRequired
}

export default AbilityBlock



