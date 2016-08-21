import {combineReducers} from 'redux'
import {abilityNames} from '../dndConstants.js'

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
const abilities = (state=[], action) => state
const savingThrows = (state=[], action) => state
const skills = (state=[], action) => state

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
