import React, {PropTypes} from 'react'
import Ability from './Ability.js'
import MixedList from './MixedList.js'
//SavingThrowListItem from './
//SkillListItem from '.'

const AbilityAndSkills = ({ability, skills, savingThrow}) => (
	<div>
		<Ability ability={ability} />
		<MixedList items={
		[
			{
				component: SavingThrowListItem,
				data: {savingThrow}
			},
			...skills.map((skill) => ({
				component: SkillListItem,
				data: {skill}
			})
		)]
		} />

	</div>
)

AbilityAndSkills.propsTypes = {
	ability: PropTypes.shape({
		id: PropTypes.string.isRequired,
		raw: PropTypes.number.isRequired,
		mod: PropTypes.number.isRequired
	}).isRequired,
	skills: PropTypes.array.isRequired,
	savingThrow: PropTypes.object.isRequired
}

export default AbilityAndSkills
