class Calculator  {
    constructor (num1 , num2) {
        this.num1 = num1
        this.num2 = num2
    }
    add() {
        let res = this.num1 + this.num2;
        return res
    }
    subtract() {
        let res = this.num1 - this.num2;
        return res
    }
    divide() {
        let res = this.num1 / this.num2;
        return res
    }
    multi() {
        let res = this.num1 * this.num2;
        return res
    }
}

const cal = new Calculator(12,14)
console.log(cal.add());
console.log(cal.subtract());
console.log(cal.divide());
console.log(cal.multi());