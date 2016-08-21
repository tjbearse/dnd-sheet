import React, {PropTypes} from 'react'
import LabeledTE from './LabledTE.js'

const NameBlock = (charInfo) => (
	<div style={{
		display: 'table',
		height: 135
	}}>
		<div style={{
			width: '40%',
			float: 'left',
			border: '1px solid black',
			boxSizing: 'border-box',
			marginTop: 40,
			height: 70,
		}}>
			<LabeledTE classes="charName" label="Character Name" value={charInfo.charName}/>
		</div>
		<div style={{
			width: '60%',
			marginTop: 36,
			height: 81,
			float: 'left',
			border: '1px solid black',
			boxSizing: 'border-box',
		}}>
		{["class_", "level", "background", "playerName", "race", "alignment", "xp"].map((key) => (
			<LabeledTE key={key} class_={key} label={key} value={charInfo[key]} />
		))}
		</div>
	</div>
)
NameBlock.propsTypes = {
	charInfo: PropTypes.shape({
		charName: PropTypes.string,
		class_: PropTypes.string,
		level: PropTypes.number,
		background: PropTypes.string,
		playerName: PropTypes.string,
		race: PropTypes.string,
		alignment: PropTypes.string,
		xp: PropTypes.number,
	}).isRequired
}


export default NameBlock
