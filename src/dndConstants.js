const abilityNames = Object.freeze({
	'STR': 'Strength',
	'DEX': 'Dexterity',
	'CON': 'Constitution',
	'INT': 'Intelligence',
	'WIS': 'Wisdom',
	'CHR': 'Charisma'
})

const abilitySkills = {
	'STR': [
		'Athletics',
	],
	'DEX': [
		'Acrobatics',
		'Sleight of Hand',
		'Stealth'
	],
	'CON': [],
	'INT': [
		'Arcana',
		'History',
		'Investigation',
		'Nature',
		'Religion'
	],
	'WIS': [
		'Animal Handling',
		'Insight',
		'Medicine',
		'Perception',
		'Survival'
	],
	'CHR': [
		'Deception',
		'Intimidation',
		'Performance',
		'Persuasion'
	],
}

export {abilityNames, abilitySkills}
