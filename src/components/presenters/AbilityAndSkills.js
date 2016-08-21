import React, {PropTypes} from 'react'
import Ability from './Ability.js'
import MixedList from './MixedList.js'
import SavingThrowListItem from './SavingThrowListItem.js'
import SkillListItem from './SkillListItem.js'

const AbilityAndSkills = ({ability, skills, savingThrow}) => {
	let items = [
		{
			component: SavingThrowListItem,
			data: savingThrow
		}
		,
		...(skills.map((skill) => ({
			component: SkillListItem,
			data: skill
		}))
		)
	]
	//let SaveAndSkillList = MixedList(items)
	let ret = <div>
		<Ability ability={ability} />
		<MixedList items={items} />

	</div>
	return ret
}

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
