import React, {PropTypes} from 'react'
import LabeledTE from './LabledTE.js'

const NameBlock = (charInfo) => (
	<div>
		<div className="charNameBox">
			<LabeledTE classes="charName" label="Character Name" value={charInfo.charName}/>
		</div>
		<div>
		{["class_", "level", "background", "playerName", "race", "alignment", "xp"].map((key) => (
			<LabeledTE class_={key} label={key} value={charInfo[key]} />
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
