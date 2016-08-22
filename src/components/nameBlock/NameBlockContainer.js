import { connect } from 'react-redux'

import NameBlock from './NameBlock.js'

const mapStateToProps = ({charInfo}) => {
	return charInfo
}

const mapDispatchToProps = () => {
	return {}
}

const NameBlockContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NameBlock)

export default NameBlockContainer
