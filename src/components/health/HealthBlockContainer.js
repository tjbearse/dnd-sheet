import { connect } from 'react-redux'
import HealthBlock from './HealthBlock.js'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = () => {
	return {}
}

const HealthBlockContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HealthBlock)

export default HealthBlockContainer
