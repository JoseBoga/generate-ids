
//function generate Ids

function generate(value) {
	if (value) {
		value = value || 999999;
		return Math.floor(Math.random() * value) + 1;
	}else {
		return Math.floor(Math.random() * 999999) + 1;
	}
}

module.exports = generate;