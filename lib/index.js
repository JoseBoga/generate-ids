'use strict';

/**
 * Expose 'generateId'
 */

module.exports = generateId;


/**
 * Initialize generateId
 */

function generateId(options) {
	options = options || {};

	if (!(this instanceof generateId)) return new generateId(options);

	this.collections = {};
	this._value = options.value || 999999;
	this._pattern = options.pattern || '';

	if ('undefined' === typeof options.pattern || options.pattern === '') {
		this.collections.genericId = [];
	} else {
		this.collections[options.pattern] = [];
	}
}

generateId.prototype.generate = function() {
	var fails = 0;
	if (this._pattern) {
		var id = this._pattern + Math.floor(Math.random() * this._value) + 1;
		if (this.collections[this._pattern].indexOf(id) === -1) {
			this.collections[this._pattern].push(id);
		} else {
			fails += 1;
		}
		return id;
	} else {
		var id = Math.floor(Math.random() * this._value) + 1;
		if (this.collections.genericId.indexOf(id) === -1 ) {
			this.collections.genericId.push(id);
			return id;
		} else {
			fails += 1;
		}
	}	
}

generateId.prototype.find = function(id) {
	if (this._pattern) {
		if (this.collections[this._pattern].indexOf(id) !== -1){
			return true;
		} else return false;
	} else {
		if (this.collections.genericId.indexOf(id) !== -1) {
			return true;
		} else return false;
	}
}

generateId.prototype.removeAll = function() {
	if (this._pattern) {
		this.collections[this._pattern] = [];
		return true;
	}else {
		this.collections.genericId = [];
		return true;
	}
}
