import {combineReducers} from 'redux'
import {ABILITIES, ABILITY_NAMES, ABILITY_SKILLS, SKILLS_LIST} from '../dndConstants.js'

/*
function makeAbilityReducer(key) {
	return (state={
		raw: null,
	}, action) => state
}

Object.keys(abilityNames).reduce((key, obj)=>{
	return Object.assign(obj, {key: makeAbilityReducer(key)})
},
{})
*/
function makeSkillReducer(skillKey) {
	return (state={}, action) => state
}
function makeSavingThrowReducer(abilityKey) {
	return (state={}, action) => state
}

const abilities = (state={}, action) => state
const savingThrows = combineReducers(
	Object.assign({}, ...(ABILITIES.map((ability) => (
		{[ability]: makeSavingThrowReducer(ability)}
	), {}))
	)
)
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
