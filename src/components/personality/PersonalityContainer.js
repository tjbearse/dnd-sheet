import { connect } from 'react-redux'
import PersonalityBlock from './PersonalityBlock.js'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = () => {
	return {}
}

const PersonalityContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PersonalityBlock)

export default PersonalityContainer
