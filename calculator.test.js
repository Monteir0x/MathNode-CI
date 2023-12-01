const Calculator = require('./calculator')
const c = new Calculator();

	test('adds 2 + 3 to equal 5', () => {
		expect(c.sum(2,3)).toBe(5);
	});

	test('substract 3 - 2 to equal 1', () => {
		expect(c.substract(3,2)).toBe(1);
	});
		
	
