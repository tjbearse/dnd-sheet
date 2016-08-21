import {combineReducers} from 'redux'

const abilities = (state=[], action) => state
const savingThrows = (state=[], action) => state
const skills = (state=[], action) => state

const reducer = combineReducers({
	abilities,
	savingThrows,
	skills
})
	
export default reducer
