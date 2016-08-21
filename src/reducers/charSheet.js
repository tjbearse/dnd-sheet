import {combineReducers} from 'redux'
import {ABILITIES, ABILITY_NAMES, ABILITY_SKILLS, SKILLS_LIST} from '../dndConstants.js'


function abilities(state=
	new Map(ABILITIES.map(ability => [ability, {
		raw: 0
	}])),
	action) {
	return state
}

/*
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
*/
function savingThrows (
	state= new Map(ABILITIES.map(ability=>[ability, {prof:false}])),
	action
) {
	return state
}

function skills (state=
	new Map(SKILLS_LIST.map((skill) => [skill, {prof: false, name: skill}]))
, action) {
	return state
}

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
