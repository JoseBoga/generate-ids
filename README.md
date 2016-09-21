# Generate Ids

Generate IDs

```bash
$ npm install generate-ids
```

```javascript

	var generateID = require('generate-ids');
	

	//with parameters

	var options = {
		value: 999999,
		pattern: 'test'
	};

	var ids = new generateID(options)

	var id generateID.generate()

	//return test383939

	//without parameters

	var generateID = require('generate-ids');

	var id = generateID.generate();

	//return 939300

	//Find ID

	generateID.find(id)
	
	//return true || false
	

	//Clean 
	generateID.removeAll()

	//return true
```