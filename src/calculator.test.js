import { expect } from "chai";
import { add, mul, sub, div, avg } from "./calculator";

describe("Calculator", () => {
	it("sum of 2 numbers.", () => {
		const num1 = 5;
		const num2 = 7;
		const expected = 12;
		const actual = add(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("subtraction of 2 numbers whose result is positive.", () => {
		const num1 = 7;
		const num2 = 5;
		const expected = 2;
		const actual = sub(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("subtraction of 2 numbers whose result is negative.", () => {
		const num1 = 5;
		const num2 = 7;
		const expected = -2;
		const actual = sub(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("multiplication of 2 numbers whose result is positive.", () => {
		const num1 = 5;
		const num2 = 7;
		const expected = 35;
		const actual = mul(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("multiplication of 2 numbers whose result is negative.", () => {
		const num1 = 5;
		const num2 = -7;
		const expected = -35;
		const actual = mul(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("division of 2 numbers whose result is positive.", () => {
		const num1 = 6;
		const num2 = 12;
		const expected = 0.5;
		const actual = div(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("division of 2 numbers whose result is negative.", () => {
		const num1 = -6;
		const num2 = 12;
		const expected = -0.5;
		const actual = div(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("division by zero.", () => {
		const num1 = 12;
		const num2 = 0;
		const expected = 1;
		const actual = div(num1, num2);
		expect(actual).to.equal(expected);
	});

	it("average of 2 numbers.", () => {
		const num1 = 6;
		const num2 = 12;
		const expected = 9;
		const actual = avg(num1, num2);
		expect(actual).to.equal(expected);
	});
});
