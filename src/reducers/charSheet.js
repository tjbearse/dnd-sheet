import {combineReducers} from 'redux'
import {ABILITIES, ABILITY_NAMES, ABILITY_SKILLS, SKILLS_LIST} from '../dndConstants.js'


const abilities = (state={}, action) => state

function makeSavingThrowReducer(abilityKey) {
	return (state={
		prof: false,
		name: ABILITY_NAMES.get(abilityKey)
	}, action) => state
}
const savingThrows = combineReducers(
	Object.assign({}, ...(ABILITIES.map((ability) => (
		{[ability]: makeSavingThrowReducer(ability)}
	), {}))
	)
)

function makeSkillReducer(skillKey) {
	return (state={
		prof: false,
		name: skillKey
	}, action) => state
}
const skills = combineReducers(
	SKILLS_LIST.reduce((obj, skill) => (
		Object.assign(obj, {[skill]: makeSkillReducer(skill)})
	), {})
)

const skillsAndAbilities = combineReducers({
	abilities,
	savingThrows,
	skills
})

const charInfo = (state={
	class_: '',
	level: null,
	background: '',
	playerName: '',
	race: '',
	alignment: '',
	xp: null
}, action) => state
const reducer = combineReducers({
	skillsAndAbilities,
	charInfo
})

export default reducer
