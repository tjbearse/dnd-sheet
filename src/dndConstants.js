const ABILITY_NAMES = new Map([
	['STR', 'Strength'],
	['DEX', 'Dexterity'],
	['CON', 'Constitution'],
	['INT', 'Intelligence'],
	['WIS', 'Wisdom'],
	['CHR', 'Charisma']
])

const ABILITIES = [...ABILITY_NAMES.keys()]

const ABILITY_SKILLS = new Map([
	['STR', ['Athletics']],
	['DEX', ['Acrobatics', 'Sleight of Hand', 'Stealth']],
	['CON', []],
	['INT', ['Arcana', 'History', 'Investigation', 'Nature', 'Religion']],
	['WIS', ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']],
	['CHR', ['Deception', 'Intimidation', 'Performance', 'Persuasion']]
])
const SKILLS_LIST = [...ABILITY_SKILLS.values()]

export {ABILITIES, ABILITY_NAMES, ABILITY_SKILLS, SKILLS_LIST}
