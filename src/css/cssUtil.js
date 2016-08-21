
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

export {merge}
