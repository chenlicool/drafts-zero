// 构造函数 function

class Card {
    constructor(initName) {
        this.name = initName
    }
}

const c1 = new Card('布鲁斯')
console.log('c1', c1)
console.log(c1.name)

// 继承
class Car {
    start() {
        // todo del
        console.log('车子启动')
    }
}

class Porshe extends Car {
    constructor(namePorshe) {
        super(namePorshe)
    }
    start() {
        console.log('我真牛')
    }
}

const p1 = new Porshe('leah的车子')
p1.start();