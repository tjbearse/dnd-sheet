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
		obj[key] = {
			ability: Object.assign({name: ABILITY_NAMES[key]}, abilities[key]),
			savingThrow: savingThrows[key],
			skills: Object.assign({},
				...(ABILITY_SKILLS.get(key).map((skill)=>({
					[skill]: skills[skill]
				})))
			)
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
