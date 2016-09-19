
//function generate Ids

function generate(value, patter) {
	value = value || 999999;
	if (patter) {
		var id = Math.floor(Math.random() * value) + 1;
		return patter + id;
	} else {
		return Math.floor(Math.random() * value) + 1;
	}
}

module.exports = generate;