const nonlist = {
	listStyle: 'none',
	paddingLeft: 0
}
const colors = {
	grey: '#dcdddf',
	dgrey: '#c2c3c6',
	white: '#ffffff',
	black: '#000000'
}

// idea credit to Christopher Chedeau's talk JS in CSS
function merge(...styles){
	var style = {}
	styles.forEach((s) => {
		if (s) {
			Object.assign(style, s)
		}
	})
	return style
}

export {merge,colors,nonlist}

