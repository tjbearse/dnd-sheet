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
const SKILLS_LIST = [...ABILITY_SKILLS.values()].reduce((list, entry)=>[...list, ...entry])

function getAbilityModifier(raw){
	return Math.floor((raw - 10) / 2)
}

const levelToXPAndBonus = new Map([
	[0,			1,	2],
	[200,		2,	2],
	[900,		3,	2],
	[2700,		4,	2],
	[6500,		5,	3],
	[1400,		6,	3],
	[23000,		7,	3],
	[34000,		8,	3],
	[48000,		9,	4],
	[64000,		10,	4],
	[85000,		11,	4],
	[100000,	12,	4],
	[120000,	13,	5],
	[140000,	14,	5],
	[165000,	15,	5],
	[195000,	16,	5],
	[225000,	17,	6],
	[265000,	18,	6],
	[305000,	19,	6],
	[355000,	20,	6]
].map(([xp, level, bonus]) => [level, {xp, bonus}])
)

function getProficiencyForLevel(level){
	return levelToXPAndBonus.get(leve).bonus
}

export {ABILITIES, ABILITY_NAMES, ABILITY_SKILLS, SKILLS_LIST, getAbilityModifier, getProficiencyForLevel}
