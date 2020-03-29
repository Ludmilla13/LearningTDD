const expect = require('chai').expect;
const Calculator = require("../src/index")

const doesCalculatorExists = () => {
    Calculator();
};

const itShouldReturnOne = () => {
    expect(Calculator(1,0)).to.equal(1);

}

const itShouldReturnThree = () => {
    expect(Calculator(1,2)).to.equal(3)
}


doesCalculatorExists();
itShouldReturnOne()
itShouldReturnThree()
