import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import AbilityBlock from '../presenters/AbilityBlock.js'

const mapStateToProps = ({skillsAndAbilities}) => {
	return skillsAndAbilities
}

const mapDispatchToProps = () => {
	return {}
}

const AbilityBlockContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AbilityBlock)

export default AbilityBlockContainer
