import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import AbilityBlock from '../presenters/AbilityBlock.js'
import { ABILITIES, ABILITY_NAMES, ABILITY_SKILLS } from '../../dndConstants.js'

const mapStateToProps = ({skillsAndAbilities:
	{abilities, savingThrows, skills}
	}) =>
(
	// -> {[ability]: {ability, savingThrow, skills: {[skill]: skill}}}
	ABILITIES.reduce((obj, key) => {
		let abilityName = ABILITY_NAMES.get(key)
		obj[key] = {
			ability:Object.assign({key, name: abilityName}, abilities.get(key)),

			savingThrow: Object.assign({
				key:key+'_SAVE',
				name: abilityName + ' Saving Throw'
			}, savingThrows[key]),

			skills: ABILITY_SKILLS.get(key).map(
				(skill)=>(
					Object.assign({
						key:skill,
						name:skill
					}, skills.get(skill))
				))
		}

		return obj
	}, {})
)

const mapDispatchToProps = () => {
	return {}
}

const AbilityBlockContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AbilityBlock)

export default AbilityBlockContainer
