var generate = require('../');
var should = require('should');

describe('generate-ids', function () {
	
	it('should be a constructor', function () {
		generate.should.be.a.function;
	});

	it('should allow instatntiating without new', function () {
		var gId = generate();
		gId.should.be.an.instanceOf(generate);
	});

	it('should have a generate method', function () {
		var gId = generate();
		gId.generate.should.be.function;
	});

	it('should have a generate methods', function () {
		var gId = generate();
		gId.generate.should.be.function;
		gId.find.should.be.function;
		gId.removeAll.should.be.function;
	});

	it('should generate id', function () {
		var gId = generate();
		var id = gId.generate();
		id.should.be.Number;
	});

	it('should find a id', function () {
		var gId = generate();
		var id = gId.generate();
		var find = gId.find(id);
		find.should.be.true;
	});

	it('should remove all id', function () {
		var gId = generate();
		var remove = gId.removeAll();
		remove.should.be.true;
	});

});