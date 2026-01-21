/*function Plate(color)
{
    this.color = color
}
const firstPlate = new Plate('piros')
console.log(firstPlate)

function BigPlate(color)
{
    Plate.call(this,color)
}
const firstBigPlate = new BigPlate('zöld')
console.log(firstBigPlate)
function SmallPlate(color)
{
    Plate.call(this,color)
}
const firstSmallPlate = new SmallPlate('fehér')
const secondSmallPlate = new SmallPlate('fekete')
console.log(firstSmallPlate)
console.log(secondSmallPlate)

function Cup(capacity)
{
    this.capacity = capacity
}
const firstCup = new Cup('3 dl')
console.log(firstCup)*/

class Plate{
    constructor(color){
        this.color = color
    }
}
const firstPlate = new Plate('fehér')
console.log(firstPlate)

class SmallPlate extends Plate{
    constructor(color){
        super(color)
    }
}
const firstSmallPlate = new SmallPlate('bordó')
console.log(firstSmallPlate)
const secondSmallPlate = new SmallPlate('kék')
console.log(secondSmallPlate)

class BigPlate extends Plate{
    constructor(color){
        super(color)
    }
}
const firstBigPlate = new BigPlate('fekete')
console.log(firstBigPlate)

class Cup{
    constructor(capacity) {
        this.capacity = capacity
    }
}
const firstCup = new Cup('3 dl')
console.log(firstCup)