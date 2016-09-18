
//function generate Ids

function generate() {
	return Math.floor(Math.random() * 999999) + 1;
}


console.log(generate());
module.exports = generate;