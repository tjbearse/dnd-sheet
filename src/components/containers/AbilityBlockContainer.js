import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import AbilityBlock from '../presenters/AbilityBlock.js'

const mapStateToProps = (state) => {
	return {
		abilities: state.abilities,
		skills: state.skills,
		savingThrow: state.savingThrows
	}
}

const mapDispatchToProps = () => {
	return {}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(AbilityBlock)

export default FilterLink
